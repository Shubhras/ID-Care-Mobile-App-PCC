import { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native'; // Added Text, FlatList, TouchableOpacity
import { useSelector } from 'react-redux';
import { patientListExisting } from '../../auth/auth';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Colors from '../../constants/Colors';
import styles from './styles';
import Icons from '../../components/Icons/Icons';
import { STANDARD_VECTOR_ICON_SIZE } from '../../constants/Constants';

const PatientHistoryScreen = ({ navigation }) => {


  return (
    <CustomSafeAreaView
      barStyle="dark-content"
      statusBarBackgroundColor={Colors.secondary}
    >
      <View style={[styles.mainWrapper, { backgroundColor: Colors.secondary }]}>
        <Header
          back
          title={'Patient History'}
          iconColor={Colors.textHighContrast}
          headerBg={Colors.secondary}
          onRightLogout={() => {
            navigation.navigate('HomeScreen');
          }}
          rightLogout={
            <Icons
              iconType={'Feather'}
              name={'more-vertical'}
              size={STANDARD_VECTOR_ICON_SIZE}
              color={Colors.textHighContrast}
            />
          }
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default PatientHistoryScreen;
