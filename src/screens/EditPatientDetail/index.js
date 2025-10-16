import { useEffect, useState } from 'react';
import { Alert, Image, Pressable, ScrollView, View } from 'react-native'; // Added ScrollView, ActivityIndicator
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import {
  GetCultureSource,
  GetDoctors,
  GetInitialDx,
  GetInitialRx,
  GetmdSteward,
  Getorganism,
  GetPrecautions,
  GetUpdatePatientsDetails,
  patientDetails,
} from '../../auth/auth';
import CustomToast from '../../components/CustomToast';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Icons from '../../components/Icons/Icons';
import PatientPickerModal from '../../components/modls/PatientPickerModal';
import Colors from '../../constants/Colors';
import { STANDARD_SPACING } from '../../constants/Constants';
import styles from './styles';

const EditPatientDetail = ({ navigation, route }) => {
  const user = useSelector(state => state?.users?.users);
  const { care_unit_id, patient_id } = route.params;
  const [patientDetail, setPatientDetail] = useState(null);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');

  const [editAbxChecklist, setEditAbxChecklist] = useState(null);
  const [initialDxModalVisible, setInitialDxModalVisible] = useState(false);
  const [selectedInitialDx, setSelectedInitialDx] = useState(null);
  const [initialRxModalVisible, setInitialRxModalVisible] = useState(false);
  const [selectedInitialRx, setSelectedInitialRx] = useState(null);
  const [abxChecklistModalVisible, setAbxChecklistModalVisible] =
    useState(false);
  const [selectedAbxChecklist, setSelectedAbxChecklist] = useState({
    name: 'N/A',
  });
  const [organismModalVisible, setOrganismModalVisible] = useState(false);
  const [selectedOrganism, setSelectedOrganism] = useState(null);
  const [precautionsModalVisible, setPrecautionsModalVisible] = useState(false);
  const [selectedPrecautions, setSelectedPrecautions] = useState(null);
  const [cultureSourceModalVisible, setCultureSourceModalVisible] =
    useState(false);
  const [selectedCultureSource, setSelectedCultureSource] = useState(null);
  const [doctorModalVisible, setDoctorModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [mDStewardModalVisible, setMDStewardModalVisible] = useState(false);
  const [selectedMDSteward, setSelectedMDSteward] = useState(null);
  const [initialDotNumber, setInitialDotNumber] = useState(0);
  const [facility, setFacility] = useState('Hospital');
  const [initialDx, setInitialDx] = useState([]);
  const [initialRx, setInitialRx] = useState([]);
  const [organism, setorganism] = useState([]);
  const [precautions, setPrecautions] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [mdSteward, setMdSteward] = useState([]);
  const [cultureSource, setCultureSource] = useState([]);
  const [date, setDate] = useState(new Date());
  const [criteriaMetOption, setCriteriaMetOption] = useState(null);
  const [selectedFormUrl, setSelectedFormUrl] = useState({ formUrls: '' });
  const surveillancearr = [
    { id: 1, name: 'N/A', Value: 'N/A' },
    { id: 2, name: 'Loeb', Value: 'Loeb' },
    { id: 3, name: 'McGreer - UTI', Value: 'McGreer - UTI' },
    { id: 4, name: 'McGreer - RTI', Value: 'McGreer - RTI' },
    { id: 5, name: 'McGreer - GITI', Value: 'McGreer - GITI' },
    { id: 6, name: 'McGreer - SSTI', Value: 'McGreer - SSTI' },
  ];
  console.log('date66', date);

  const setFormUrl = type => {
    console.log('rrrrr', type);
    if (type === 'Loeb') {
      setSelectedFormUrl({
        formUrls:
          'https://idcaresteward.com/application/modules/patient/views/form1-mobile.html',
      });
    } else if (type === 'McGreer - UTI') {
      setSelectedFormUrl({
        formUrls:
          'https://idcaresteward.com/application/modules/patient/views/form2-mobile.html',
      });
    } else if (type === 'McGreer - RTI') {
      setSelectedFormUrl({
        formUrls:
          'https://idcaresteward.com/application/modules/patient/views/form3-mobile.html',
      });
    } else if (type === 'McGreer - GITI') {
      setSelectedFormUrl({
        formUrls:
          'https://idcaresteward.com/application/modules/patient/views/form4-mobile.html',
      });
    } else if (type === 'McGreer - SSTI') {
      setSelectedFormUrl({
        formUrls:
          'https://idcaresteward.com/application/modules/patient/views/form5-mobile.html',
      });
    } else {
      return;
    }
  };

  const openLink = async () => {
    try {
      console.log(
        'Opening form URL:iiiiiiiiiiiiiii',
        selectedFormUrl?.formUrls,
      );
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(selectedFormUrl?.formUrls, {
          // iOS properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#B22B57',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android properties
          showTitle: true,
          toolbarColor: '#B22B57',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          forceCloseOnRedirection: false,
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });

        Alert.alert('Result', JSON.stringify(result));
      } else {
        await Linking.openURL(selectedFormUrl?.formUrls);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleConfirm = selectedDate => {
    setDate(selectedDate.toISOString().split('T')[0]);
    setPickerVisible(false);
    console.log('Formatted:', selectedDate.toISOString());
  };

  const getPatientDetails = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    if (care_unit_id) {
      formdata.append('care_unit_id', care_unit_id);
    }
    if (patient_id) {
      formdata.append('patient_id', patient_id);
    }
    try {
      const response = await patientDetails(formdata);
      console.log('patientDetails', response.response);

      if (response.status === 1) {
        const records = response.response;
        setPatientDetail(records);
        setSelectedInitialDx({
          id: records?.initial_dx,
          name: records.initial_dx_name || '',
        });
        setSelectedInitialRx({
          id: records?.initial_rx,
          name: records.initial_rx_name || '',
        });
        setSelectedAbxChecklist({
          name: records?.infection_surveillance_checklist || 'N/A',
        });
        setInitialDotNumber(Number(records?.initial_dot) || 0);
        setSelectedOrganism({ name: records?.organism || '' });
        setSelectedPrecautions({ name: records?.precautions || '' });
        setSelectedCultureSource({ name: records?.culture_source || '' });
        setSelectedDoctor({
          id: records?.doctor_id,
          name: records?.doctor_name || '',
        });
        setSelectedMDSteward({
          id: records?.md_steward_id,
          name: records?.md_steward || '',
        });
        setDate(records?.date_of_start_abx);
        setFacility(records?.symptom_onset);
        setCriteriaMetOption(records?.criteria_met || null);
        console.log('records?.criteria_met666', records?.date_of_start_abx);
      } else {
        console.log('Get patient Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get patient Details error:', error);
    }
  };

  const getInitialDx = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await GetInitialDx(formdata);

      if (response.status === 1) {
        const records = response.response;
        setInitialDx(records);
      } else {
        console.log('Get InitialDx Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get InitialDx Details error:', error);
    }
  };

  const getInitialRx = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await GetInitialRx(formdata);
      if (response.status === 1) {
        const records = response.response;
        setInitialRx(records);
      } else {
        console.log('Get Initial Rx Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get InitialRx Details error:', error);
    }
  };
  const getorganism = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await Getorganism(formdata);
      if (response.status === 1) {
        const records = response.response;
        setorganism(records);
        console.log('Organismrecords', records);
      } else {
        console.log('Organism Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get Organism Details error:', error);
    }
  };

  const increment = () => setInitialDotNumber(prev => prev + 1);
  const decrement = () => {
    if (initialDotNumber > 0) setInitialDotNumber(prev => prev - 1);
  };

  const getPrecautions = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await GetPrecautions(formdata);
      if (response.status === 1) {
        const records = response.response;
        setPrecautions(records);
        console.log('precautionType', records);
      } else {
        console.log('Precautions Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get Precautions Details error:', error);
    }
  };
  const getDoctors = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await GetDoctors(formdata);
      if (response.status === 1) {
        const records = response.response;
        setDoctors(records);
      } else {
        console.log('Doctors Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get Doctors Details error:', error);
    }
  };

  const getMdSteward = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await GetmdSteward(formdata);
      if (response.status === 1) {
        const records = response.response;
        setMdSteward(records);
      } else {
        console.log('MdSteward Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get MdSteward Details error:', error);
    }
  };

  const getCultureSource = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    try {
      const response = await GetCultureSource(formdata);
      if (response.status === 1) {
        const records = response.response;
        setCultureSource(records);
        console.log('records444', records);
      } else {
        console.log('Culture Source Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get Culture Source Details error:', error);
    }
  };

  const updatePatientsDetails = async () => {
    try {
      let formdata = new FormData();
      formdata.append('login_session_key', user.login_session_key);
      formdata.append('patient_id', patient_id);
      formdata.append('care_unit_id', patientDetail?.care_unit_id);
      formdata.append('doctor_id', selectedDoctor?.id && selectedDoctor?.id);
      formdata.append('symptom_onset', facility); //Hospital,Facility
      formdata.append('md_steward_id', selectedMDSteward?.id);
      formdata.append('initial_dx', selectedInitialDx?.id);
      formdata.append('initial_rx', selectedInitialRx?.id);
      formdata.append('initial_dot', initialDotNumber);
      formdata.append('culture_source', selectedCultureSource?.name);
      formdata.append('precautions', selectedPrecautions?.name);
      formdata.append('organism', selectedOrganism?.name);
      formdata.append(
        'infection_surveillance_checklist',
        selectedAbxChecklist?.name,
      );
      formdata.append('date_of_start_abx', date);
      if (criteriaMetOption == 'Yes') {
        formdata.append('criteria_met', 'Yes');
      } else if (criteriaMetOption == 'No') {
        formdata.append('criteria_met', 'No');
      }
      const response = await GetUpdatePatientsDetails(formdata);
      if (response.status === 1) {
        const records = response.response;
        console.log('Patients details updated :', records);
        setShowToast(true);
        setMessage(response.message);
      } else {
        console.log('Update patients details  failed:', response.message);
        setShowToast(true);
        setMessage(response.message);
      }
    } catch (error) {
      console.log('Update patients details error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPatientDetails();
      await getInitialDx();
      await getInitialRx();
      await getorganism();
      await getPrecautions();
      await getDoctors();
      await getMdSteward();
      await getCultureSource();
    };
    fetchData();
  }, []);

  return (
    <CustomSafeAreaView
      statusBarBackgroundColor="transparent"
      barStyle="dark-content"
    >
      <View style={styles.mainWrapper}>
        <Header
          back
          title={'Edit Patient'}
          iconColor={Colors.textLowContrast} // Assuming Header title should be white for contrast
          backgroundColor={Colors.boysenberry} // Set Header background for consistency
          onRightLogout={() => {
            navigation.navigate('HomeScreen');
          }}
          // Updated the right icon to be the 'Home' icon as per previous screen pattern
          rightLogout={
            <Image
              style={styles.iconImageHome}
              source={require('../../assets/images/Home _white.png')}
            />
          }
        />

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listContainer}>
            <View style={styles.rowIdWrapper}>
              <CustomText style={styles.titleText}>Patient's ID :</CustomText>
              <CustomText
                style={[styles.valueText, { color: Colors.boysenberry }]}
              >
                {patient_id}
              </CustomText>
            </View>
            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Infection Onset</CustomText>
            </View>
            <View style={styles.rowStatusWrapper}>
              <Pressable
                onPress={() => {
                  setFacility('Hospital');
                }}
                style={[
                  styles.statusButton,
                  {
                    backgroundColor:
                      facility == 'Hospital'
                        ? Colors.boysenberry
                        : Colors.inputBackgroundColor,
                  },
                ]}
              >
                <CustomText
                  style={[
                    styles.titleText,
                    {
                      color:
                        facility == 'Hospital'
                          ? Colors.white
                          : Colors.textLowContrast,
                    },
                  ]}
                >
                  Hospital/CAI
                </CustomText>
              </Pressable>
              <Pressable
                onPress={() => {
                  setFacility('Facility');
                }}
                style={[
                  styles.statusButtonRight,
                  {
                    backgroundColor:
                      facility == 'Facility'
                        ? Colors.boysenberry
                        : Colors.inputBackgroundColor,
                  },
                ]}
              >
                <CustomText
                  style={[
                    styles.titleText,
                    {
                      color:
                        facility == 'Facility'
                          ? Colors.white
                          : Colors.textLowContrast,
                    },
                  ]}
                >
                  Facility/HAI
                </CustomText>
              </Pressable>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Care Unit Name</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText
                style={[styles.valueText, { color: Colors.boysenberry }]}
              >
                {patientDetail?.care_unit_name}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Initial Dx</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setInitialDxModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedInitialDx ? selectedInitialDx.name : 'Initial Dx'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Initial Rx</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setInitialRxModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedInitialRx ? selectedInitialRx.name : 'Cephalexin'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Initial DOT</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueTextDot}>Initial DOT</CustomText>
              <View style={styles.counterButtonView}>
                <Pressable style={styles.counterButton} onPress={decrement}>
                  <Icons
                    name={'minus'}
                    iconType={'AntDesign'}
                    color={Colors.white}
                    size={scale(16)}
                  />
                </Pressable>

                <CustomText
                  style={[styles.numberDotText, { color: Colors.black }]}
                >
                  {initialDotNumber}
                </CustomText>

                <Pressable style={styles.counterButton} onPress={increment}>
                  <Icons
                    name={'plus'}
                    iconType={'AntDesign'}
                    color={Colors.white}
                    size={scale(16)}
                  />
                </Pressable>
              </View>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Abx Checklist</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setAbxChecklistModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedAbxChecklist ? selectedAbxChecklist.name : 'Select...'}
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
            {selectedAbxChecklist?.name !== 'N/A' &&
              editAbxChecklist == 'search' && (
                <>
                  <Pressable
                    style={styles.formButtonWrapper}
                    onPress={openLink}
                  >
                    <CustomText
                      style={[styles.hedingText, { color: Colors.white }]}
                    >
                      Print Abx Checklist form
                    </CustomText>
                  </Pressable>
                  <View style={styles.rowWrapperOption}>
                    <CustomText style={styles.hedingText}>
                      Criteria Met :{' '}
                    </CustomText>
                    <Pressable
                      style={styles.optionRow}
                      onPress={() => {
                        setCriteriaMetOption('Yes');
                      }}
                    >
                      <Icons
                        name={
                          criteriaMetOption == 'Yes'
                            ? 'check-circle'
                            : 'circle-thin'
                        }
                        size={24}
                        color={Colors.deepPurple}
                        iconType="FontAwesome"
                      />
                      <CustomText
                        style={[styles.valueText, { color: Colors.black }]}
                      >
                        Yes
                      </CustomText>
                    </Pressable>
                    <Pressable
                      style={styles.optionRow}
                      onPress={() => {
                        setCriteriaMetOption('No');
                      }}
                    >
                      <Icons
                        name={
                          criteriaMetOption == 'No'
                            ? 'check-circle'
                            : 'circle-thin'
                        }
                        size={24}
                        color={Colors.deepPurple}
                        iconType="FontAwesome"
                      />
                      <CustomText
                        style={[styles.valueText, { color: Colors.black }]}
                      >
                        No
                      </CustomText>
                    </Pressable>
                  </View>
                </>
              )}

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Organism</CustomText>
            </View>

            <Pressable
              style={styles.rowWrapper}
              onPress={() => setOrganismModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedOrganism ? selectedOrganism.name : 'N/A'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Precautions</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setPrecautionsModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedPrecautions ? selectedPrecautions.name : 'N/A'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Culture Source</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setCultureSourceModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedCultureSource ? selectedCultureSource.name : 'Urine'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Doctor</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setDoctorModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedDoctor ? selectedDoctor.name : 'AA Doctor Costanza'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>MD Steward</CustomText>
            </View>
            <Pressable
              style={styles.rowWrapper}
              onPress={() => setMDStewardModalVisible(true)}
            >
              <CustomText style={styles.valueText} numberOfLines={1}>
                {selectedMDSteward ? selectedMDSteward.name : 'Shubhra'}
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

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>
                Date of Starting ABX
              </CustomText>
            </View>
            <Pressable
              style={[
                styles.rowWrapper,
                { marginBottom: STANDARD_SPACING * 1.5 },
              ]}
              onPress={() => setPickerVisible(true)}
            >
              <CustomText style={styles.valueText}>
                {date ? String(date) : 'Date Of Starting ABX'}
              </CustomText>
            </Pressable>
            <View
              style={[
                styles.rowWrapper,
                { marginBottom: STANDARD_SPACING * 1.5 },
              ]}
            >
              <CustomText style={styles.hedingText}>
                MD Steward Response
              </CustomText>
              {patientDetail?.md_stayward_response == 'Agree' && (
                <CustomText style={[styles.valueText, { color: 'green' }]}>
                  {patientDetail?.md_stayward_response}
                </CustomText>
              )}
              {patientDetail?.md_stayward_response == 'NoResponse' && (
                <CustomText style={[styles.valueText, { color: 'blue' }]}>
                  {patientDetail?.md_stayward_response}
                </CustomText>
              )}
              {patientDetail?.md_stayward_response == 'Disagree' && (
                <CustomText style={[styles.valueText, { color: 'red' }]}>
                  {patientDetail?.md_stayward_response}
                </CustomText>
              )}
              {patientDetail?.md_stayward_response == 'Modify' && (
                <CustomText style={[styles.valueText, { color: 'orange' }]}>
                  {patientDetail?.md_stayward_response}
                </CustomText>
              )}
            </View>
            <Pressable
              style={styles.buttonWrapper}
              onPress={updatePatientsDetails}
            >
              <CustomText style={[styles.hedingText, { color: Colors.white }]}>
                Submit
              </CustomText>
            </Pressable>
          </View>
        </ScrollView>
        {/* Initial Dx Modal */}
        <PatientPickerModal
          visible={initialDxModalVisible}
          data={initialDx}
          onClose={() => setInitialDxModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedInitialDx(patient);
            setInitialDxModalVisible(false);
          }}
        />
        {/* Initial Rx Modal */}
        <PatientPickerModal
          visible={initialRxModalVisible}
          data={initialRx}
          onClose={() => setInitialRxModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedInitialRx(patient);
            setInitialRxModalVisible(false);
          }}
        />
        {/* Abx Checklist */}
        <PatientPickerModal
          visible={abxChecklistModalVisible}
          data={surveillancearr}
          onClose={() => setAbxChecklistModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedAbxChecklist(patient);
            setFormUrl(patient?.name);
            setEditAbxChecklist('search');
            setAbxChecklistModalVisible(false);
          }}
        />
        {/* Organism */}
        <PatientPickerModal
          visible={organismModalVisible}
          data={organism}
          onClose={() => setOrganismModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedOrganism(patient);
            setOrganismModalVisible(false);
          }}
        />
        {/* Precautions */}
        <PatientPickerModal
          visible={precautionsModalVisible}
          data={precautions}
          onClose={() => setPrecautionsModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedPrecautions(patient);
            setPrecautionsModalVisible(false);
          }}
        />
        {/* Culture Source */}
        <PatientPickerModal
          visible={cultureSourceModalVisible}
          data={cultureSource}
          onClose={() => setCultureSourceModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedCultureSource(patient);
            setCultureSourceModalVisible(false);
          }}
        />
        {/* Doctor */}
        <PatientPickerModal
          visible={doctorModalVisible}
          data={doctors}
          onClose={() => setDoctorModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedDoctor(patient);
            console.log('selectedDoctor', selectedDoctor);
            setDoctorModalVisible(false);
          }}
        />
        {/* MD Steward */}
        <PatientPickerModal
          visible={mDStewardModalVisible}
          data={mdSteward}
          onClose={() => setMDStewardModalVisible(false)}
          onSelectPatient={patient => {
            setSelectedMDSteward(patient);
            setMDStewardModalVisible(false);
          }}
        />
        <DateTimePickerModal
          isVisible={isPickerVisible}
          mode="date"
          date={new Date(date)}
          onConfirm={handleConfirm}
          onCancel={() => setPickerVisible(false)}
        />
        <CustomToast
          colorText={Colors?.white}
          colorIcon={Colors?.black}
          backgroundColor={Colors?.black}
          visible={showToast}
          message={message}
          onHide={() => setShowToast(false)}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default EditPatientDetail;
