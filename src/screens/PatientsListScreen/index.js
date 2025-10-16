import { Image, View, Text, FlatList, TouchableOpacity } from "react-native" // Added Text, FlatList, TouchableOpacity
import Header from "../../components/Header/Header"
import Colors from "../../constants/Colors"
import TextInput from "../../components/inputs/TextInput"
import Icons from "../../components/Icons/Icons"
import { scale } from "react-native-size-matters"
import styles from './styles'
import { CustomText } from '../../components/global/CustomComponents'
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { PatiensList } from "../../auth/auth"
import CustomToast from "../../components/CustomToast"



const PatientsListScreen = ({ navigation, route }) => {
    const { care_unit_id } = route.params;
    const user = useSelector(state => state?.users?.users)
    const [patientRecords, setPatientRecords] = useState([])
    const [showToast, setShowToast] = useState(false)


    const [search, setSearch] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);

    useEffect(() => {
        if (search === '') {
            setFilteredRecords(patientRecords);
        } else {
            const text = search.toLowerCase();
            const filtered = patientRecords.filter(item =>
                item.patient_id.toLowerCase().includes(text)
            );
            setFilteredRecords(filtered);
        }
    }, [search, patientRecords]);

    console.log('patientRecords', patientRecords)
    const GetPatiensList = async () => {

        let formdata = new FormData();
        formdata.append('login_session_key', user.login_session_key);

        if (user.login_role == 'Md Steward') {
            formdata.append('md_steward_id', user.user_id);
        }
        if (care_unit_id) {
            formdata.append('care_unit_id', care_unit_id);
        }

        try {
            const response = await PatiensList(formdata);
            console.log('Get PatiensList response:', response);

            if (response.status === 1) {
                const records = response.response;
                setPatientRecords(records)

            } else {
                console.log('Get PatiensList failed:', response.message);
                setShowToast(true)
            }
        } catch (error) {
            console.log('Get PatiensList error:', error);
        }
    };
    useEffect(() => {
        GetPatiensList();
    }, [])

    // Function to render each item in the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.patientRow}>
            <CustomText style={styles.rowIdText}>{item?.patient_id}</CustomText>
            <CustomText style={styles.rowDiagnosisText}>{item?.initial_dx_name}</CustomText>
            <TouchableOpacity onPress={() => navigation.navigate('PatientHistoryScreen', { care_unit_id: care_unit_id, patient_id: item?.patient_id })}>
                <CustomText style={styles.rowActionText}>View</CustomText>
            </TouchableOpacity>
        </View>
    );

    // Render the table header row
    const ListHeaderComponent = () => (
        <View style={styles.tableHeaderRow}>
            <CustomText style={styles.headerIdText}>ID</CustomText>
            <CustomText style={styles.headerDiagnosisText}>Diagnosis</CustomText>
            <CustomText style={styles.headerrowActionText}>Action</CustomText>
        </View>
    );

    return (
        <CustomSafeAreaView
            statusBarBackgroundColor="transparent"
            barStyle="dark-content"
        >
            <View style={styles.mainWrapper}>
                <View style={styles.headerWrapper}>
                    <Header
                        back
                        title={'Patients'}
                        iconColor={Colors.white}
                        onRightLogout={() => {
                            navigation.navigate('HomeScreen')
                        }}
                        rightLogout={<Image
                            style={styles.iconImageHome}
                            source={require('../../assets/images/Home _white.png')}
                        />}
                    />
                    <TextInput
                        placeholder={'Enter ID'}
                        textInputWrapper={styles.textInputWrapper}
                        backgroundColor={Colors.inputBackgroundColor}
                        keyboardType={"numeric"}
                        value={search}
                        onChangeText={setSearch}
                        rightIcon={
                            <Icons
                                name="search"
                                iconType="Feather"
                                color={Colors.textLowContrast}
                                size={scale(20)}
                            />}
                        styleInput={styles.textInput}
                    />
                </View>
                {/* Patient List Section */}
                <View style={styles.listContainer}>
                    <FlatList
                        data={filteredRecords}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={ListHeaderComponent}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContent}
                    />
                </View>
            </View>
            <CustomToast
                colorText={Colors?.white}
                colorIcon={Colors?.black}
                backgroundColor={Colors?.black}
                visible={showToast}
                message={'Records not found'}
                onHide={() => setShowToast(false)}
            />
        </CustomSafeAreaView>
    )
}

export default PatientsListScreen