import { useEffect, useState } from 'react';
import { Alert, Image, Pressable, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import Hospital from '../../assets/icons/svg/Hospital.svg';
import Person from '../../assets/icons/svg/Person.svg';
import {
  CareUnit,
  LogoutAPI,
  Notification,
  patientListExisting,
} from '../../auth/auth';
import ButtonCircled from '../../components/buttons/ButtonCircled';
import ButtonSquared from '../../components/buttons/ButtonSquared';
import HorizontalDivider from '../../components/dividers/HorizontalDivider';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Icons from '../../components/Icons/Icons';
import TextInput from '../../components/inputs/TextInput';
import PatientPickerModal from '../../components/modls/PatientPickerModal';
import Colors from '../../constants/Colors';
import {
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_WIDTH,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../constants/Constants';
import { logoutUser } from '../../redux/slices/SessionUser';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.users?.users);
  console.log('user', user);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [careUnit, setCareUnit] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [patientID, setPatientID] = useState('');

  const GetNotification = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);

    if (user.login_role === 'Md Steward') {
      formdata.append('md_steward_id', user.user_id);
    }

    try {
      const response = await Notification(formdata);
      console.log('GetNotification response:', response);

      if (response.status === 1) {
        const notifications = response.response;

        // Filter unread notifications
        const unreadNotifications = notifications.filter(
          n => n.read_status === 'NO',
        );

        console.log('Unread notifications:', unreadNotifications);

        // Update state
        setNotificationCount(unreadNotifications.length);
      } else {
        console.log('GetNotification failed:', response.message);
      }
    } catch (error) {
      console.log('GetNotification error:', error);
    }
  };

  const GetCareUnit = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);

    try {
      const response = await CareUnit(formdata);
      console.log('CareUnit response:', response);

      if (response.status === 1) {
        const careUnit = response.response;
        setCareUnit(careUnit);
        console.log('Unread CareUnit:', careUnit);
      } else {
        console.log('CareUnit failed:', response.message);
      }
    } catch (error) {
      console.log('CareUnit error:', error);
    }
  };

  const searchExistingPatient = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    formdata.append('patient_id', patientID);
    try {
      const response = await patientListExisting(formdata);
      console.log('search Existing Patient response:', response);

      if (response.status === 1) {
        const search = response.response[0];
        navigation.navigate('PatientHistoryScreen', {
          care_unit_id: search?.care_unit_id,
          patient_id: search?.patient_id,
        });
        console.log('Unread search Existing Patient:', search);
      } else {
        console.log('search Existing Patient failed:', response.message);
      }
    } catch (error) {
      console.log('search Existing atient error:', error);
    }
  };

  const logoutUserButton = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user?.login_session_key);
    formdata.append('user_id', user?.user_id);
    try {
      const response = await LogoutAPI(formdata);
      console.log('Logout response:', response);
      if (response.status === 1) {
        // Clear Redux store
        dispatch(logoutUser());
        // Navigate to login or AuthStack
        navigation.replace('AuthStack');
      } else {
        console.log('Logout failed:', response.message);
      }
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const handlePatientList = () => {
    if (selectedPatient) {
      navigation.navigate('PatientsListScreen', {
        care_unit_id: selectedPatient?.id,
      });
    } else {
      setShowToast(true);
    }
  };

  useEffect(() => {
    GetNotification();
    GetCareUnit();
  }, []);

  return (
    <CustomSafeAreaView
      statusBarBackgroundColor={Colors.white}
      barStyle="dark-content"
    >
      <View style={[styles.mainWrapper, { backgroundColor: Colors.white }]}>
        <View style={styles.header}>
          <View>
            <CustomText style={styles.welcome}>Welcome back,</CustomText>
            <CustomText style={styles.user}>{user?.name}</CustomText>
            <CustomText style={styles.email}>
              Logged in as {user?.email}
            </CustomText>
          </View>

          <View style={styles.headerIcons}>
            <ButtonCircled
              height={35}
              icon={
                <Icons
                  iconType={'Fontisto'}
                  name={'bell'}
                  color={Colors.boysenberry}
                  size={STANDARD_VECTOR_ICON_SIZE * 0.8}
                />
              }
              onPress={() => {
                navigation.navigate('Notifications');
              }}
              backgroundColor={Colors.lightPurple}
            />
            <ButtonCircled
              height={35}
              icon={
                <Icons
                  iconType={'AntDesign'}
                  name={'logout'}
                  color={Colors.boysenberry}
                  size={STANDARD_VECTOR_ICON_SIZE * 0.8}
                />
              }
              onPress={() => {
                Alert.alert(
                  'Logout',
                  'Are you sure you want to logout?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Logout cancelled'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => logoutUserButton(),
                    },
                  ],
                  { cancelable: true },
                );
              }}
              backgroundColor={Colors.lightPurple}
            />
          </View>
        </View>
        <KeyboardAwareScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewWrapper}
          style={[styles.mainWrapper, { backgroundColor: Colors.white }]}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          extraScrollHeight={100}
          enableResetScrollToCoords={true}
          resetScrollToCoords={{ x: 0, y: 0 }}
        >
          {/* HERO */}
          <View style={styles.hero}>
            <View style={{ flex: 1 }}>
              <CustomText style={styles.heroTitle}>
                Care made simple,
              </CustomText>
              <CustomText style={styles.heroHighlight}>
                Patients come first.
              </CustomText>
              <CustomText style={styles.heroSub}>
                Search, manage and register patients with ease.
              </CustomText>
            </View>
            <View style={styles.heroImageWrapper}>
              <Image
                source={require('../../assets/images/illustrations/illustration.png')} // replace with your image
                style={styles.heroImage}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={styles.card}>
            {/* Header Row */}
            <View style={styles.headerRow}>
              <ButtonCircled
                height={40}
                icon={
                  <Hospital
                    width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                    height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  />
                }
                backgroundColor={Colors.lightPurple}
              />

              <View style={styles.CardDetailsWrapper}>
                <CustomText style={styles.cardTitle}>
                  Select Care Unit
                </CustomText>
                <CustomText style={styles.cardDesc}>
                  Choose a care unit to manage patients.
                </CustomText>
              </View>
            </View>

            {/* Full Width Dropdown */}
            <Pressable
              onPress={() => setModalVisible(true)}
              style={styles.dropdown}
            >
              <View style={{ flex: 1 }}>
                <CustomText
                  style={[
                    styles.dropdownText,
                    {
                      color: selectedPatient ? Colors.textHighContrast : Colors.textLowContrast,
                      // fontFamily: selectedPatient
                      //   ? OPEN_SANS_SEMIBOLD
                      //   : OPEN_SANS_REGULAR,
                    },
                  ]}
                  numberOfLines={2}
                >
                  {selectedPatient ? selectedPatient.name : 'Select Care Unit'}
                </CustomText>
              </View>

              <Icons
                iconType={'Feather'}
                name="chevron-down"
                size={20}
                color={Colors.black}
              />
            </Pressable>
            {selectedPatient && (
              <>
                <View style={styles.horizontalDividerComponentWrapper}>
                  <HorizontalDivider
                    lineColors={[
                      Colors.darkPurple,
                      Colors.darkPurple,
                      Colors.darkPurple,
                    ]}
                  />
                </View>

                {/* Button */}
                <TouchableOpacity
                  onPress={handlePatientList}
                  style={styles.patientsListButton}
                >
                  <Icons
                    iconType={'Feather'}
                    name="users"
                    size={16}
                    color={Colors.boysenberry}
                  />
                  <CustomText style={styles.patientsListButtonLable}>
                    List Patients
                  </CustomText>
                </TouchableOpacity>
              </>
            )}
          </View>

          <View style={styles.searchCardWrapper}>
            {/* Header Row */}
            <View style={styles.headerRow}>
              <ButtonCircled
                height={40}
                icon={
                  <Icons
                    iconType={'Feather'}
                    name={'search'}
                    size={STANDARD_VECTOR_ICON_SIZE * 1.2}
                    color={Colors.boysenberry}
                  />
                }
                backgroundColor={Colors.lightPurple}
              />

              <View style={styles.CardDetailsWrapper}>
                <CustomText style={styles.cardTitle}>
                  Search Existing Patient
                </CustomText>
                <CustomText style={styles.cardDesc}>
                  Search patient by unique ID quickly.
                </CustomText>
              </View>
            </View>
            <View>
              <TextInput
                placeholder={'Enter Patient Unique ID'}
                placeholderTextColor={Colors.textLowContrast}
                textInputValueColor={Colors.textHighContrast}
                backgroundColor={Colors.white}
                leftIcon={
                  <Icons
                    name="search"
                    iconType="Feather"
                    color={Colors.textLowContrast}
                    size={moderateScale(20)}
                  />
                }
                value={patientID}
                onChangeText={setPatientID}
                leftIconstyle={styles.searchTextInputIconStyl}
                borderWidth={STANDARD_BORDER_WIDTH}
                styleInput={styles.textInput}
                textInputWrapper={styles.textInputWrapper}
              />
            </View>
            <Pressable
              onPress={searchExistingPatient}
              style={[
                styles.searchButton,
                { backgroundColor: Colors.boysenberry },
              ]}
            >
              <CustomText
                style={[styles.searchButtonLable, { color: Colors.white }]}
              >
                Search
              </CustomText>
            </Pressable>
          </View>

          <View style={styles.registerWrapper}>
            <View style={styles.registerContainer}>
              <ButtonCircled
                height={45}
                icon={
                  <Person
                    width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                    height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  />
                }
                backgroundColor={Colors.white + '20'}
              />

              <View style={styles.registerDetailsWrapper}>
                <CustomText style={styles.registerTitle}>
                  Register A New Patient
                </CustomText>
                <CustomText style={styles.registerDesc}>
                  Add a new patient to the system.
                </CustomText>
              </View>
              <View
                style={[
                  styles.plusIconWrapper,
                  { backgroundColor: Colors.boysenberry },
                ]}
              >
                <Icons
                  iconType={'MaterialCommunityIcons'}
                  name={'plus'}
                  size={STANDARD_VECTOR_ICON_SIZE * 0.6}
                  color={Colors.white}
                />
              </View>
              <ButtonSquared
                height={30}
                icon={
                  <Icons
                    iconType={'MaterialCommunityIcons'}
                    name={'plus'}
                    size={STANDARD_VECTOR_ICON_SIZE}
                    color={Colors.boysenberry}
                  />
                }
                backgroundColor={Colors.white}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <PatientPickerModal
        visible={modalVisible}
        data={careUnit}
        onClose={() => setModalVisible(false)}
        onSelectPatient={patient => {
          setSelectedPatient(patient);
          setModalVisible(false);
        }}
      />
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
