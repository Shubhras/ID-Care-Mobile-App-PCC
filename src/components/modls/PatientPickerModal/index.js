import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, StatusBar, View } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  STANDARD_BORDER_WIDTH,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../constants/Constants';
import { CustomText, CustomTextInput } from '../../global/CustomComponents';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Icons from '../../Icons/Icons';
import styles from './styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const PatientPickerModal = ({ visible, onClose, onSelectPatient, data }) => {
  const [search, setSearch] = useState('');
  const [patientData, setPatientData] = useState(data);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  useEffect(() => {
    setPatientData(data);
  }, [data]);
  console.log('datadata', data);

  const handleSelectPatient = useCallback(
    index => {
      const selected = patientData[index];
      setSelectedPatientId(selected.id);
      onSelectPatient(selected);
    },
    [patientData, onSelectPatient],
  );

  const handleSearch = text => {
    setSearch(text);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setPatientData(filtered);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <StatusBar
        backgroundColor={Colors.boysenberry}
        barStyle="light-content"
      />
      <SafeAreaProvider>
        <SafeAreaView
          edges={['bottom']}
          style={{ flex: 1, backgroundColor: Colors.white }}
        >
          <View style={{ backgroundColor: Colors.boysenberry }}>
            <SafeAreaView edges={['top']} />
          </View>
          <View style={[styles.mainWrapper, { backgroundColor: Colors.white }]}>
            {/* Header */}
            <View style={styles.header}>
              <Pressable
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                onPress={onClose}
              >
                <Icons
                  iconType={'Feather'}
                  name="arrow-left"
                  size={STANDARD_VECTOR_ICON_SIZE * 1.2}
                  color={Colors.white}
                />
              </Pressable>
              <View style={styles.headerContainer}>
                <CustomText
                  style={[styles.headerLabel, { color: Colors.white }]}
                >
                  Select Care Unit
                </CustomText>
              </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchbarWrapper}>
              {/* <Pressable
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                onPress={onClose}
              >
                <Icons
                  iconType={'Feather'}
                  name="arrow-left"
                  size={STANDARD_VECTOR_ICON_SIZE * 1.2}
                  color={Colors.black}
                />
              </Pressable> */}

              <View style={styles.searchbarContainer}>
                <CustomTextInput
                  style={[styles.searchBar, { color: Colors.black }]}
                  placeholder="Search..."
                  placeholderTextColor={Colors.textLowContrast}
                  value={search}
                  onChangeText={handleSearch}
                />
              </View>
              {search.length > 0 && (
                <Pressable
                  onPress={() => {
                    setSearch('');
                    setPatientData(data); // reset list
                  }}
                  style={styles.clearSerachWrapper}
                >
                  <Icons
                    iconType={'Ionicons'}
                    name={'close-circle-outline'}
                    size={STANDARD_VECTOR_ICON_SIZE}
                    color={Colors.error}
                  />
                </Pressable>
              )}
            </View>

            {/* Patient List */}
            <FlatList
              data={patientData}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: scale(30) }}
              bounces={false}
              renderItem={({ item, index }) => {
                const isSelected = selectedPatientId === item.id;
                return (
                  <View
                    key={item.id}
                    style={[
                      index === 0 &&
                        styles.languageComponentWrapperWithMarginTop,
                      styles.languageComponentWrapper,
                    ]}
                  >
                    <Pressable
                      style={[
                        styles.radioWrapper,
                        {
                          borderColor: isSelected
                            ? Colors.boysenberry
                            : Colors.inputBorderColor,
                        },
                      ]}
                      onPress={() => handleSelectPatient(index)}
                    >
                      <View style={styles.flagImageAndLanguageLabelWrapper}>
                        <CustomText
                          style={[
                            styles.languageLabel,
                            { color: Colors.textHighContrast },
                          ]}
                        >
                          {item.name}
                        </CustomText>
                      </View>
                      <View
                        style={[
                          styles.radioCheckBox,
                          {
                            backgroundColor: isSelected
                              ? Colors.boysenberry
                              : Colors.white,
                            borderWidth: isSelected
                              ? null
                              : STANDARD_BORDER_WIDTH,
                            borderColor: isSelected
                              ? Colors.boysenberry
                              : Colors.inputBorderColor,
                          },
                        ]}
                      >
                        {isSelected && (
                          <FeatherIcons
                            color={Colors.white}
                            name={'check-circle'}
                            size={moderateScale(14)}
                          />
                        )}
                      </View>
                    </Pressable>
                  </View>
                );
              }}
              ListEmptyComponent={
                <View style={styles.noResultsWrapper}>
                  <CustomText
                    style={[
                      styles.noResultsText,
                      { color: Colors.textLowContrast },
                    ]}
                  >
                    No care unit found for "{search}". Please try a different name.
                  </CustomText>
                </View>
              }
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

export default memo(PatientPickerModal);

// <Pressable
//   style={[
//     index === 0 && styles.languageComponentWrapperWithMarginTop,
//     styles.option,

//     // selectedPatientId === item.id && { backgroundColor: Colors.green }
//   ]}
//   onPress={() => handleSelectPatient(index)}
// >
//   <CustomText style={styles.optionText}>{item.name}</CustomText>
// </Pressable>
