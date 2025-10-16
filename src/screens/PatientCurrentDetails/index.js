import { Alert, Image, Pressable, ScrollView, View } from "react-native"
import styles from './styles';
import Colors from "../../constants/Colors";
import Header from '../../components/Header/Header'
import Icons from "../../components/Icons/Icons";
import { scale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomText } from '../../components/global/CustomComponents'
import { useState } from "react";
import PatientPickerModal from "../../components/modls/PatientPickerModal";
import EmailModles from '../../components/modls/EmailModles'
import TextInput from "../../components/inputs/TextInput";
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView";
const data = [
    { "id": 1, "name": "Ashbrook Care and Rehabilitation Center" },
    { "id": 2, "name": "Bloomingdale Rehab Center" },
    { "id": 3, "name": "Care One Madison" },
    { "id": 4, "name": "Care One Wayne" },
    { "id": 5, "name": "Cornell Care and Rehabilitation Center" },
    { "id": 6, "name": "Del Boca long term" },
    { "id": 7, "name": "Del Boca Vista Rehab" },
    { "id": 8, "name": "Florham Park Rehabilitation Center" },
    { "id": 9, "name": "Inglemoor" },
    { "id": 10, "name": "Inglemoor Days Saved" },
    { "id": 11, "name": "Livia" },
    { "id": 12, "name": "Merwick care and rehab" },
    { "id": 13, "name": "Morris View" },
    { "id": 14, "name": "Florham Park Rehabilitation Center" },
    { "id": 15, "name": "Inglemoor" },
    { "id": 16, "name": "Inglemoor Days Saved" },
    { "id": 17, "name": "Livia" },
    { "id": 18, "name": "Merwick care and rehab" },
    { "id": 19, "name": "Morris View" }
]

const PatientCurrentDetails = ({ navigation,route }) => {
    const { detail } = route.params;
 console.log('detail333',detail);
 
    const [selected, setSelected] = useState(null);
    const [additionalModalVisible, setAdditionalModalVisible] = useState(false);
    const [selectedAdditional, setSelectedAdditional] = useState(null);
    const [isEdit, setEdit] = useState(true);
    const [initialDxModalVisible, setInitialDxModalVisible] = useState(false);
    const [selectedInitialDx, setSelectedInitialDx] = useState(null);
    const [initialRxModalVisible, setInitialRxModalVisible] = useState(false);
    const [selectedInitialRx, setSelectedInitialRx] = useState(null);
    const [count, setCount] = useState(3); // default value
    const [mailModalVisible, setMailModalVisible] = useState(false);


    const increment = () => setCount(prev => prev + 1);
    const decrement = () => {
        if (count > 0) setCount(prev => prev - 1);
    };
    const options = [
        { key: 'agree', label: 'Agree' },
        { key: 'modify', label: 'Modify' },
        { key: 'neutral', label: 'Neutral' },
        { key: 'disagree', label: 'Disagree' },
    ];

    return (
        <CustomSafeAreaView
        statusBarBackgroundColor="transparent"
        barStyle="dark-content"
     >
            <View style={[styles.mainWrapper, { backgroundColor: Colors.boysenberry }]}>

                <View style={{ backgroundColor: Colors.white }}>
                    <Header
                        back
                        title={'Patient Current Details'}
                        fontSize={scale(14)}
                        iconColor={Colors.textSecondary}
                        right={
                            <Image
                                style={styles.iconImageHome}
                                source={require('../../assets/images/Home _white.png')}
                            />
                        }
                        onRightPress={() => { navigation.navigate('HomeScreen') }}
                        rightLogout={
                            <View style={styles.statusView}>
                                <CustomText style={styles.statusText}>
                                    {detail?.symptom_onset=="Facility"&& 'F'}
                                    {detail?.symptom_onset=="Hospital"&& 'H'}
                                </CustomText>
                            </View>
                        }

                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                    bounces={false}
                    bouncesZoom={false}
                    contentContainerStyle={styles.contentContainerStyle}>
                    <View style={[styles.cardContainer, { backgroundColor: Colors.white }]}>
                        <View style={styles.listContainer}>
                            <View style={styles.rowWrapper}>
                                <CustomText style={styles.titleText}>Patient's ID :</CustomText>
                                <CustomText style={[styles.valueText, { color: Colors.bluishPurple }]} numberOfLines={1}>{detail?.patient_id}</CustomText>
                            </View>
                            <View style={styles.row}>
                                <CustomText style={styles.titleText}>Care Unit Name :</CustomText>
                                <CustomText style={styles.valueText} numberOfLines={1}>{detail?.care_unit_name}</CustomText>
                            </View>

                            <View style={styles.optionContainer}>
                                {options.map((option) => (
                                    <View key={option.key} style={styles.optionWrapper}>
                                        <Pressable
                                            style={styles.option}
                                            onPress={() => setSelected(option.key)}
                                        >
                                            {selected === option.key ? (
                                                <Icons name="check-circle" size={24} color={Colors.deepPurple} iconType="FontAwesome"
                                                />
                                            ) : (
                                                <Icons name="circle-thin" size={24} color={Colors.deepPurple} iconType="FontAwesome" />
                                            )}
                                            <CustomText style={styles.label}>{option.label}</CustomText>
                                        </Pressable>
                                    </View>
                                ))}
                            </View>
                            <View style={styles.rowWrapper}>
                                <CustomText style={styles.title}>Initial Dx</CustomText>
                                <CustomText style={styles.valueText} numberOfLines={1}>{detail?.initial_dx_name}</CustomText>
                            </View>
                            <View style={styles.rowWrapper}>
                                <CustomText style={styles.title}>Initial Rx</CustomText>
                                <CustomText style={styles.valueText} numberOfLines={1}>{detail?.initial_rx_name}</CustomText>
                            </View>
                            <View style={styles.rowWrapper}>
                                <CustomText style={styles.title}>Provider MD</CustomText>
                                <CustomText style={styles.valueText} numberOfLines={1}>{detail?.doctor_name}</CustomText>
                            </View>
                            <View style={styles.rowWrapper}>
                                <CustomText style={styles.title}>Initial Dot</CustomText>
                                <CustomText style={styles.valueText} numberOfLines={1}>{detail?.initial_dot}</CustomText>
                            </View>

                        </View>
                    </View>
                    <View style={styles.bottomWrapper}>
                        <CustomText style={[styles.textBottomTitle, { color: Colors.white }]}>MD Steward Recommendation</CustomText>
                        {/* <View style={styles.editButton}> */}
                        <Pressable style={styles.editButton} onPress={() => setEdit(prev => !prev)}>
                            <CustomText style={styles.labelText}>{isEdit ? 'Edit' : 'Cancel'}</CustomText>
                        </Pressable>
                        {/* </View> */}
                    </View>
                    {!isEdit && <View style={styles.editRow}>
                        <CustomText style={styles.newTtitle}>Current Dx</CustomText>
                        <View style={[styles.newTtitleValueWrapper, { backgroundColor: Colors.greyLightest }]}>
                            <CustomText style={[styles.newTtitleValue, { color: Colors.textLowContrast }]}>*CAUTI-NHSN</CustomText>
                        </View>
                    </View>}
                    <View style={styles.editRow}>
                        <CustomText style={styles.newTtitle}>New Dx</CustomText>
                        <Pressable style={styles.newTtitleValueWrapper} onPress={!isEdit ? () => setInitialDxModalVisible(true) : undefined}>
                            <CustomText style={[styles.newTtitleValue, { color: Colors.textLowContrast }]}>
                                {selectedInitialDx ? selectedInitialDx : '*CAUTI-NHSN'}</CustomText>
                            {!isEdit && <View style={styles.icon}>
                                <Icons iconType={'FontAwesome'} name={'sort-down'} color={Colors.textLowContrast} size={scale(25)} />
                            </View>}
                        </Pressable>
                    </View>
                    {!isEdit && <View style={styles.editRow}>
                        <CustomText style={styles.newTtitle}>Current Rx</CustomText>
                        <View style={[styles.newTtitleValueWrapper, { backgroundColor: Colors.greyLightest }]}>
                            <CustomText style={[styles.newTtitleValue, { color: Colors.textLowContrast }]}>Cephalexin</CustomText>
                        </View>
                    </View>}
                    <View style={styles.editRow}>
                        <CustomText style={styles.newTtitle}>New Rx</CustomText>
                        <Pressable style={styles.newTtitleValueWrapper} onPress={!isEdit ? () => setInitialRxModalVisible(true) : undefined}>
                            <CustomText style={[styles.newTtitleValue, { color: Colors.textLowContrast }]}>
                                {selectedInitialRx ? selectedInitialRx : 'Cephalexin'}</CustomText>
                            {!isEdit && <View style={styles.icon}>
                                <Icons iconType={'FontAwesome'} name={'sort-down'} color={Colors.textLowContrast} size={scale(25)} />
                            </View>}
                        </Pressable>
                    </View>
                    <View style={styles.editRow}>
                        <CustomText style={styles.newTtitle}>New Dot</CustomText>
                        <View style={styles.newTtitleValueWrapper}>
                            {isEdit && <CustomText style={[styles.newTtitleValue, { color: Colors.textLowContrast }]}>{count}</CustomText>}
                            {!isEdit && (
                                <View style={styles.counterButtonView}>
                                    <Pressable style={styles.counterButton} onPress={decrement}>
                                        <Icons name={'minus'} iconType={'AntDesign'} color={Colors.white} size={scale(16)} />

                                    </Pressable>

                                    <CustomText style={[styles.newTtitleValue, { color: Colors.black }]}>
                                        {count}
                                    </CustomText>

                                    <Pressable style={styles.counterButton} onPress={increment}>
                                        <Icons name={'plus'} iconType={'AntDesign'} color={Colors.white} size={scale(16)} />

                                    </Pressable>
                                </View>
                            )}

                        </View>
                    </View>

                    <View style={styles.additionalWrapper}>
                        <CustomText style={styles.newTtitleSub}>Additional Comment</CustomText>
                        <Pressable style={styles.selectOptionInput} onPress={!isEdit ? () => setAdditionalModalVisible(true) : undefined}>
                            <CustomText style={[styles.mailButtonText, { color: Colors.textLowContrast }]} numberOfLines={1} >
                                {selectedAdditional ? selectedAdditional.name : 'No options selected'}
                            </CustomText>
                            {!isEdit && <View style={styles.icon}>
                                <Icons iconType={'FontAwesome'} name={'sort-down'} color={Colors.textLowContrast} size={scale(25)} />
                            </View>}
                        </Pressable>
                        {!isEdit && <TextInput
                            textInputWrapper={styles.textInputWrapper}
                            placeholder={'Enter Comment'}
                            backgroundColor={Colors.inputBackgroundColor}
                            styleInput={styles.textInput}
                        />}
                        {isEdit ?
                            <Pressable style={styles.mailButton} onPress={() => setMailModalVisible(true)}>
                                <CustomText style={styles.mailButtonText}>
                                    Send Patient Details on Mail
                                </CustomText>
                            </Pressable> :
                            <Pressable style={styles.mailButton} onPress={() => { }}>
                                <CustomText style={styles.mailButtonText}>
                                    Save Recommendation
                                </CustomText>
                            </Pressable>}
                    </View>
                </ScrollView>
                <PatientPickerModal
                    visible={additionalModalVisible}
                    data={data}
                    onClose={() => setAdditionalModalVisible(false)}
                    onSelectPatient={(patient) => {
                        setSelectedAdditional(patient);
                        setAdditionalModalVisible(false);
                    }}
                />
                {/* Initial Dx Modal */}
                <PatientPickerModal
                    visible={initialDxModalVisible}
                    data={data}
                    onClose={() => setInitialDxModalVisible(false)}
                    onSelectPatient={(patient) => {
                        setSelectedInitialDx(patient);
                        setInitialDxModalVisible(false);
                    }}
                />
                {/* Initial Rx Modal */}
                <PatientPickerModal
                    visible={initialRxModalVisible}
                    data={data}
                    onClose={() => setInitialRxModalVisible(false)}
                    onSelectPatient={(patient) => {
                        setSelectedInitialRx(patient);
                        setInitialRxModalVisible(false);
                    }}
                />
                <EmailModles
                    visible={mailModalVisible}
                    onClose={() => setMailModalVisible(false)}
                />
            </View>
        </CustomSafeAreaView >
    )
}

export default PatientCurrentDetails


