import { Image, View, Text, FlatList, TouchableOpacity } from "react-native" // Added Text, FlatList, TouchableOpacity
import Header from "../../components/Header/Header"
import Colors from "../../constants/Colors"
import TextInput from "../../components/inputs/TextInput"
import Icons from "../../components/Icons/Icons"
import { scale } from "react-native-size-matters"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from './styles'
import { CustomText } from '../../components/global/CustomComponents'
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView"
import { patientListExisting } from "../../auth/auth"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


 
const PatientHistoryScreen = ({ navigation, route }) => {
    const user = useSelector(state => state?.users?.users)
    const { care_unit_id, patient_id } = route.params;
     console.log('patient_id666',patient_id)
     
    const [patientHistory, setPatientHistory] = useState([])


    const GetPatientListExisting = async () => {

        let formdata = new FormData();
        formdata.append('login_session_key', user.login_session_key);

        if (user.login_role == 'Md Steward') {
            formdata.append('md_steward_id', user.user_id);
        }
        if (care_unit_id) {
            formdata.append('care_unit_id', care_unit_id);
        }
        if (patient_id) {
            formdata.append("patient_id", patient_id);
        }
        try {
            const response = await patientListExisting(formdata);
            console.log('GetPatientListExisting', response.response);

            if (response.status === 1) {
                const records = response.response;
                setPatientHistory(records)

            } else {
                console.log('Get PatientList Existing failed:', response.message);
            }
        } catch (error) {
            console.log('Get Patient ListExisting error:', error);
        }
    };
    useEffect(() => {
        GetPatientListExisting();
    }, [])

    // Function to render each item in the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.patientRow}>
            <CustomText style={styles.rowIdText}>{item?.date_of_start_abx}</CustomText>
            <CustomText style={styles.rowDiagnosisText}>{item?.initial_dx_name}</CustomText>
            {item?.md_patient_status == 'Pending' ?
                <TouchableOpacity onPress={() => { navigation.navigate('PatientDetailScreen',{ care_unit_id:care_unit_id, patient_id:item?.pid })}}>
                    <CustomText style={styles.rowActionText}>View</CustomText>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => { navigation.navigate('PatientDetailScreen',{ care_unit_id:care_unit_id, patient_id:item?.pid })  }}>
                    <CustomText style={styles.rowActionText}>Reviewed</CustomText>
                </TouchableOpacity>}
        </View>
    );

    // Render the table header row
    const ListHeaderComponent = () => (
        <View style={styles.tableHeaderRow}>
            <CustomText style={styles.headerIdText}>Date of Abx</CustomText>
            <CustomText style={styles.headerDiagnosisText}>Diagnosis</CustomText>
            <CustomText style={styles.headerrowActionText}>Action</CustomText>
        </View>
    );

    return (
        <CustomSafeAreaView
            statusBarBackgroundColor="transparent"
            barStyle="dark-content"
        >            <View style={styles.mainWrapper}>
                <View style={styles.headerWrapper}>
                    <Header
                        back
                        title={'Patient History'}
                        iconColor={Colors.white}
                        onRightLogout={() => {
                            navigation.navigate('HomeScreen')
                        }}
                        rightLogout={<Image
                            style={styles.iconImageHome}
                            source={require('../../assets/images/Home _white.png')}
                        />}
                    />
                    
                    <View style={styles.textInputWrapper}>
                        <CustomText style={[styles.idText,{color:Colors.black}]}>Patient ID : {patient_id}</CustomText>
                    </View>
                </View>
                {/* Patient List Section */}
                <View style={styles.listContainer}>
                    <FlatList
                        data={patientHistory}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={ListHeaderComponent}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContent}
                    />
                </View>
            </View>
        </CustomSafeAreaView>
    )
}

export default PatientHistoryScreen