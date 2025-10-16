import { useEffect, useState } from 'react';
import { Alert, Image, Pressable, ScrollView, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import {
  CareUnit,
  LogoutAPI,
  Notification,
  patientListExisting,
} from '../../auth/auth';
import Button from '../../components/buttons/Button';
import ButtonSquared from '../../components/buttons/ButtonSquared';
import CustomToast from '../../components/CustomToast/index';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Icons from '../../components/Icons/Icons';
import TextInput from '../../components/inputs/TextInput';
import PatientPickerModal from '../../components/modls/PatientPickerModal';
import Colors from '../../constants/Colors';
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
      statusBarBackgroundColor="transparent"
      barStyle="dark-content"
    >
      <View
        style={[styles.mainWrapper, { backgroundColor: Colors.boysenberry }]}
      >
        <ScrollView
          bounces={false}
          alwaysBounceVertical={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[styles.cardContainer, { backgroundColor: Colors.white }]}
          >
            <Header
              title={'Home'}
              iconColor={Colors.textSecondary}
              right={
                <View>
                  {notificationCount > 0 && (
                    <View style={styles.notificatonDot}>
                      <CustomText style={styles.notificatonText}>
                        {notificationCount}
                      </CustomText>
                    </View>
                  )}
                  <Image
                    style={styles.iconImage}
                    source={require('../../assets/images/notification33.png')}
                  />
                </View>
              }
              onRightPress={() => {
                navigation.navigate('Notifications');
              }}
              onRightLogout={() => {
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
              rightLogout={
                <Image
                  style={styles.iconImageLogout}
                  source={require('../../assets/images/logout.png')}
                />
              }
            />
            <CustomText style={styles.mailText}>
              Logged in as {user?.email}
            </CustomText>
            <View style={styles.logoWrapper}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/images/search_.png')}
              />
            </View>
            <View style={styles.textView}>
              <CustomText style={styles.listTitle}>
                Select Care Unit First To List Patients
              </CustomText>
            </View>

            <Pressable
              style={styles.CareUnitButton}
              onPress={() => setModalVisible(true)}
            >
              <CustomText numberOfLines={1} style={styles.careUnitButtonText}>
                {selectedPatient ? selectedPatient.name : 'Select Care Unit'}
              </CustomText>
              <View style={styles.icon}>
                <Icons
                  iconType={'FontAwesome'}
                  name={'sort-down'}
                  color={Colors.textLowContrast}
                  size={scale(25)}
                />
              </View>
            </Pressable>
            <View style={styles.linkView}>
              <Pressable onPress={handlePatientList}>
                <CustomText style={styles.linkText}>List Patients</CustomText>
              </Pressable>
            </View>

            <View style={styles.textView}>
              <CustomText style={styles.listTitle}>
                Search Existing Patient
              </CustomText>
            </View>
            <TextInput
              textInputWrapper={styles.textInputWrapper}
              placeholder={'Enter Patient Unique ID'}
              backgroundColor={Colors.inputBackgroundColor}
              rightIcon={
                <Icons
                  name="search"
                  iconType="Feather"
                  color={Colors.textLowContrast}
                  size={scale(20)}
                />
              }
              styleInput={styles.textInput}
              value={patientID}
              onChangeText={setPatientID}
            />
            <View style={styles.button}>
              <Button
                label={'Search'}
                labelColor={Colors.white}
                backgroundColor={Colors.boysenberry}
                onPress={searchExistingPatient}
              />
            </View>
          </View>

          <View style={styles.bottomWrapper}>
            <View>
              <CustomText style={styles.textBottom}>Register</CustomText>
              <CustomText style={styles.textBottom}>A New Patient</CustomText>
            </View>
            <ButtonSquared
              onPress={() => {}}
              height={scale(40)}
              backgroundColor={Colors.buttonBackgroundColor}
              icon={
                <Icons
                  name="plus"
                  iconType="Entypo"
                  color={Colors.black}
                  size={scale(20)}
                />
              }
            />
          </View>
        </ScrollView>
        <PatientPickerModal
          visible={modalVisible}
          data={careUnit}
          onClose={() => setModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedPatient(patient);
            setModalVisible(false);
          }}
        />
      </View>
      <CustomToast
        colorText={Colors?.white}
        colorIcon={Colors?.black}
        backgroundColor={Colors?.black}
        visible={showToast}
        message={'Please select a care unit.'}
        onHide={() => setShowToast(false)}
      />
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
