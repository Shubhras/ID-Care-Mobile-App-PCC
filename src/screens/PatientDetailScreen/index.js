import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native'; // Added ScrollView, ActivityIndicator
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { patientDetails } from '../../auth/auth';
import ButtonSquared from '../../components/buttons/ButtonSquared';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Icons from '../../components/Icons/Icons';
import Colors from '../../constants/Colors';
import { STANDARD_SPACING } from '../../constants/Constants';
import styles from './styles';

const PatientsDetailScreen = ({ navigation, route }) => {
  const user = useSelector(state => state?.users?.users);
  const { care_unit_id, patient_id } = route.params;
  console.log('patient_id666', patient_id);
  const [patientDetail, setPatientDetail] = useState(null);
  const [facility, setFacility] = useState('');

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
        setFacility(records.symptom_onset);
      } else {
        console.log('Get patient Details  failed:', response.message);
      }
    } catch (error) {
      console.log('Get patient Details error:', error);
    }
  };

  // const AddPatient = async () => {

  //     let formdata = new FormData();
  //     formdata.append('login_session_key', user.login_session_key);
  //     if (care_unit_id) {
  //         formdata.append('care_unit_id', care_unit_id);
  //     }
  //     if (patient_id) {
  //         formdata.append("patient_id", patient_id);
  //     }
  //     try {
  //         const response = await addPatient(formdata);
  //         console.log('AddPatient', response);

  //         if (response.status === 1) {
  //             const records = response.response;
  //             // setPatientHistory(records)

  //         } else {
  //             console.log('Add Patient Details  failed:', response.message);
  //         }
  //     } catch (error) {
  //         console.log('Add Patient Details error:', error);
  //     }
  // };
  useEffect(() => {
    getPatientDetails();
    // AddPatient()
  }, []);

  return (
    <CustomSafeAreaView
      statusBarBackgroundColor="transparent"
      barStyle="dark-content"
    >
      <View style={styles.mainWrapper}>
        <Header
          back
          title={'Patient Detail'}
          iconColor={Colors.textLowContrast} // Assuming Header title should be white for contrast
          backgroundColor={Colors.boysenberry} // Set Header background for consistency
          onRightLogout={() => {
            navigation.navigate('HomeScreen');
          }}
          // Updated the right icon to be the 'Home' icon as per previous screen pattern
          rightLogout={
            <Image
              style={styles.iconImageHome}
              source={require('../../assets/images/Home_white.png')}
            />
          }
        />
        <View style={styles.editButtonWrapper}>
          <ButtonSquared
            onPress={() => {
              navigation.navigate('EditPatientDetail', {
                care_unit_id: care_unit_id,
                patient_id: patient_id,
              });
            }}
            height={scale(40)}
            backgroundColor={Colors.boysenberry}
            icon={
              <Icons
                name="pen"
                iconType="FontAwesome5"
                color={Colors.white}
                size={scale(20)}
              />
            }
          />
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listContainer}>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.titleText}>Patient's ID :</CustomText>
              <CustomText style={styles.valueText}>
                {patientDetail?.patient_id}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Infection Onset</CustomText>
            </View>
            <View style={styles.rowStatusWrapper}>
              <View
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
              </View>
              <View
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
              </View>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Care Unit Name</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.care_unit_name}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Initial Dx</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.initial_dx_name}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Initial Rx</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.initial_rx_name}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Initial DOT</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.initial_dot}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Abx Checklist</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.infection_surveillance_checklist}
              </CustomText>
            </View>

            {patientDetail?.criteria_met !== null && (
              <View
                style={[styles.rowWrapper, { marginTop: STANDARD_SPACING * 4 }]}
              >
                <CustomText style={styles.hedingText}>
                  Criteria Met :{' '}
                </CustomText>
                <View style={{ flexDirection: 'row', columnGap: scale(5) }}>
                  <View style={{ flexDirection: 'row', columnGap: scale(5) }}>
                    <Icons
                      name={
                        patientDetail?.criteria_met == 'Yes'
                          ? 'check-circle'
                          : 'circle-thin'
                      }
                      size={24}
                      color={Colors.deepPurple}
                      iconType="FontAwesome"
                    />
                    <CustomText
                      style={[
                        styles.valueText,
                        { color: Colors.textLowContrast },
                      ]}
                    >
                      Yes
                    </CustomText>
                  </View>
                  <View style={{ flexDirection: 'row', columnGap: scale(5) }}>
                    <Icons
                      name={
                        patientDetail?.criteria_met == 'No'
                          ? 'check-circle'
                          : 'circle-thin'
                      }
                      size={24}
                      color={Colors.deepPurple}
                      iconType="FontAwesome"
                    />
                    <CustomText
                      style={[
                        styles.valueText,
                        { color: Colors.textLowContrast },
                      ]}
                    >
                      No
                    </CustomText>
                  </View>
                </View>
              </View>
            )}

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Organism</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.organism}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Precautions</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.precautions}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Culture Source</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.culture_source}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>Provider MD</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                AA Doctor Costanza
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>MD Steward</CustomText>
            </View>
            <View style={styles.rowWrapper}>
              <CustomText style={styles.valueText}>
                {patientDetail?.doctor_name}
              </CustomText>
            </View>

            <View style={styles.hedingWrapper}>
              <CustomText style={styles.hedingText}>
                Date of Starting ABX
              </CustomText>
            </View>
            <View
              style={[
                styles.rowWrapper,
                { marginBottom: STANDARD_SPACING * 1.5 },
              ]}
            >
              <CustomText style={styles.valueText}>
                {patientDetail?.date_of_start_abx}
              </CustomText>
            </View>
            <View
              style={[
                styles.rowWrapper,
                { marginBottom: STANDARD_SPACING * 1.5 },
              ]}
            >
              <CustomText style={styles.hedingText}>
                MD Steward Consult
              </CustomText>
              {patientDetail?.md_stayward_consult == 'Yes' && (
                <CustomText style={[styles.valueText, { color: 'green' }]}>
                  {patientDetail?.md_stayward_consult}
                </CustomText>
              )}
              {patientDetail?.md_stayward_consult == 'No' && (
                <CustomText style={styles.valueText}>
                  {patientDetail?.md_stayward_consult}
                </CustomText>
              )}
            </View>

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
              onPress={() => {
                navigation.navigate('PatientCurrentDetails', {
                  detail: patientDetail,
                });
              }}
            >
              <CustomText style={[styles.hedingText, { color: Colors.white }]}>
                MD Steward Recommendations
              </CustomText>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </CustomSafeAreaView>
  );
};

export default PatientsDetailScreen;
