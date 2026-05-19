//import liraries
import React, { Component, useCallback, useMemo, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Colors from '../../constants/Colors';
import Icons from '../../components/Icons/Icons';
import {
  SCREEN_WIDTH,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
  isTablet,
} from '../../constants/Constants';
import TextInput from '../../components/inputs/TextInput';
import { moderateScale } from 'react-native-size-matters';
import PatientsItemCard from '../../components/cards/PatientsItemCard';
import { CustomText } from '../../components/global/CustomComponents';

const patientsData = [
  {
    id: '1',
    name: 'CLAUDE WALLACE',
    gender: 'Male',
    dob: '11/11/1947',
    mrn: '26124',
    antibiotic: 'Azithromycin',
    careUnit: 'Inglemoor Rehabilitation Care Center',
    room: '145',
  },
  {
    id: '2',
    name: 'GERALD RICARDO',
    gender: 'Male',
    dob: '04/03/1930',
    mrn: '26127',
    antibiotic: 'Cephalexin',
    careUnit: 'Inglemoor Rehabilitation Care Center',
    room: '136',
  },
  {
    id: '3',
    name: 'PHYLLIS BROWNSTEIN',
    gender: 'Female',
    dob: '03/23/1931',
    mrn: '26102',
    antibiotic: 'Lorazepam',
    careUnit: 'Inglemoor Rehabilitation Care Center',
    room: '124',
  },
  {
    id: '4',
    name: 'JUDI ULL',
    gender: 'Female',
    dob: '10/08/1948',
    mrn: '15205',
    antibiotic: 'Lorazepam',
    careUnit: 'Inglemoor Rehabilitation Care Center',
    room: '126',
  },
  {
    id: '5',
    name: 'RUTH SHAPIRO',
    gender: 'Female',
    dob: '01/30/1948',
    mrn: '26063',
    antibiotic: 'Lorazepam',
    careUnit: 'Inglemoor Rehabilitation Care Center',
    room: '118',
  },
];

const PatientsListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const renderItem = ({ item, index }) => {
    return (
      <View
        key={`${item.id}-${index}`}
        style={styles.listViewItemCardComponentWrapper}
      >
        <PatientsItemCard
          cardBackgroundColor={Colors.white}
          patientName={item.name}
          patientNameColor={Colors.textHighContrast}
          gender={item.gender}
          genderColor={Colors.boysenberry}
          dividerColor={Colors.darkPurple}
          dob={item.dob}
          mrn={item.mrn}
          antibiotic={item.antibiotic}
          careUnit={item.careUnit}
          room={item.room}
          infoTextColor={Colors.textLowContrast}
          labelColor={Colors.textHighContrast}
          buttonLabel={'View History'}
          buttonBackgroundColor={Colors.boysenberry}
          buttonLabelColor={Colors.white}
          onViewHistory={() => navigation.navigate('PatientDetailScreen')}
        />
      </View>
    );
  };

  return (
    <CustomSafeAreaView
      barStyle="light-content"
      statusBarBackgroundColor={Colors.boysenberry}
    >
      <View style={[styles.mainWrapper, { backgroundColor: Colors.white }]}>
        <Header
          back
          title={'Patients'}
          iconColor={Colors.white}
          headerBg={Colors.boysenberry}
          onRightLogout={() => {
            navigation.navigate('HomeScreen');
          }}
          rightLogout={
            <Icons
              iconType={'Ionicons'}
              name={'home'}
              size={STANDARD_VECTOR_ICON_SIZE}
              color={Colors.white}
            />
          }
        />
        <View style={styles.textInputWrapper}>
          <TextInput
            placeholder={'Enter ID'}
            backgroundColor={Colors.white}
            placeholderTextColor={Colors.textLowContrast}
            textInputValueColor={Colors.textHighContrast}
            // keyboardType={'numeric'}
            value={search}
            onChangeText={setSearch}
            leftIconstyle={styles.leftIconStyle}
            leftIcon={
              <Icons
                name="search"
                iconType="Feather"
                color={Colors.textLowContrast}
                size={moderateScale(20)}
              />
            }
            borderWidth={STANDARD_BORDER_WIDTH}
          />
        </View>

        <FlatList
          bounces={false}
          overScrollMode="never"
          data={patientsData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainerWrapper}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default PatientsListScreen;
