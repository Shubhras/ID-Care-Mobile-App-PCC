import React, { useState, useCallback, memo, useEffect } from 'react';
import {
  View,
  TextInput,
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




const PatientPickerModal = ({ visible, onClose, onSelectPatient, data }) => {

  const [search, setSearch] = useState('');
  const [patientData, setPatientData] = useState(data);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  useEffect(() => {
    setPatientData(data);
  }, [data])
  const handleSelectPatient = useCallback(
    (index) => {
      const selected = patientData[index];
      setSelectedPatientId(selected.id);
      onSelectPatient(selected);
    },
    [patientData, onSelectPatient]
  );
 
  
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setPatientData(filtered);
  };

  return (
    <Modal animationType="slide" transparent={true}
      visible={visible} onRequestClose={onClose}>
      <View style={[styles.mainWrapper, { backgroundColor: Colors.white }]}>
        {/* Search Bar */}
        <View style={styles.searchbarWrapper}>
          <Pressable
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            onPress={onClose}
          >
            <Icons
              iconType={'Feather'}
              name="arrow-left"
              size={STANDARD_VECTOR_ICON_SIZE * 1.2}
              color={Colors.black}
            />
          </Pressable>

          <View style={styles.searchbarContainer}>
            <TextInput
              style={[styles.searchBar, { color: Colors.textLowContrast }]}
              placeholder="Search..."
              placeholderTextColor={Colors.textLowContrast}
              value={search}
              onChangeText={handleSearch}
            />

          </View>
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

        {/* Patient List */}
        <FlatList
          data={patientData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: scale(30) }}
          bounces={false}
          renderItem={({ item, index }) => (
            <Pressable
              style={[
                index === 0 && styles.languageComponentWrapperWithMarginTop,
                styles.option,

                // selectedPatientId === item.id && { backgroundColor: Colors.green }
              ]}
              onPress={() => handleSelectPatient(index)}
            >
              <Text style={styles.optionText}>
                {item.name}
              </Text>
            </Pressable>
          )}
          ListEmptyComponent={
            <View style={styles.noResultsWrapper}>
              <Text style={[styles.noResultsText, { color: Colors.textLowContrast }]}>
                No patients found
              </Text>
            </View>
          }
        />
      </View>
    </Modal>
  );
};

export default memo(PatientPickerModal);
