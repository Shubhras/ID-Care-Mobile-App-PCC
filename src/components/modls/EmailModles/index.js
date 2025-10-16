import React, { useState, useCallback, memo } from 'react';
import {
    View,
    Modal,
    Pressable,
    Text,
    FlatList,
} from 'react-native';
import styles from './styles';
import { scale } from 'react-native-size-matters';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import Icons from '../../Icons/Icons';
import Colors from '../../../constants/Colors';
import TextInput from '../../inputs/TextInput';
import Button from '../../buttons/Button';




const EmailModles = ({ visible, onClose }) => {

    const [search, setSearch] = useState('');
    //   const [patientData, setPatientData] = useState([]);
    //   const [selectedPatientId, setSelectedPatientId] = useState(null);

    //   const handleSelectPatient = useCallback(
    //     (index) => {
    //       const selected = patientData[index];
    //       setSelectedPatientId(selected.id);
    //       onSelectPatient(selected); // return full patient object
    //     },
    //     [patientData, onSelectPatient]
    //   );

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = dummyPatients.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setPatientData(filtered);
    };

    return (
        <Modal animationType="fade" transparent={true}
            visible={visible} onRequestClose={onClose}>
            <View style={[styles.mainWrapper, {
                backgroundColor: 'transparent'
            }]}>
                <View style={[styles.card, { backgroundColor: Colors.white }]}>
                    <View style={styles.iconWrapper}>
                        <Pressable
                            onPress={onClose}
                        >
                            <Icons
                                iconType={'Ionicons'}
                                name={'close'}
                                size={STANDARD_VECTOR_ICON_SIZE * 1.2}
                                color={Colors.black}
                            />
                        </Pressable>
                    </View>
                    <TextInput placeholder={'Enter patient email'}
                        textInputWrapper={styles.textInputWrappe}
                        placeholderTextColor={Colors.greyDark}
                        backgroundColor={Colors.inputBackgroundColor}
                        textInputValueColor={Colors.black}
                    />
                    <View style={styles.textInputWrappe}>
                        <Button label={'Send email'}
                            labelText={styles.labelText}
                            labelColor={Colors.white}
                            backgroundColor={Colors.boysenberry}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default memo(EmailModles);
