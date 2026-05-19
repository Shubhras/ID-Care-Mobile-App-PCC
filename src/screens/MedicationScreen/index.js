import React from 'react';
import { FlatList, View } from 'react-native';
import MedicationItemCard from '../../components/cards/MedicationItemCard';
import Colors from '../../constants/Colors';
import styles from './styles';

const medication = [
  {
    id: '1',
    residentName: 'RICARDO GERALD',
    description: 'Cyanocobalamin Tablet 1000 MCG',
    dosage: '1000 MCG',
    directions:
      'Give 2 tablet by mouth one time a day for supplement 2 tablet = 2000mcg give with 500mcg tab for total dose 2500mcg',
    generic: '-',
    startDate: '04/25/2026',
    endDate: '-',
    physician: '-',
    status: 'Active',
    iconType: 'tablet',
    accentColor: '#FFB8C6',
  },
  {
    id: '2',
    residentName: 'RICARDO GERALD',
    description: 'Cyanocobalamin Tablet 500 MCG',
    dosage: '500 MCG',
    directions:
      'Give 1 tablet by mouth one time a day for supplement give with two 1000mcg tab for total dose of 2500mcg',
    generic: '-',
    startDate: '04/25/2026',
    endDate: '-',
    physician: '-',
    status: 'Active',
    iconType: 'tablet',
    accentColor: '#FFB8C6',
  },
  {
    id: '3',
    residentName: 'RICARDO GERALD',
    description: 'Mirtazapine Oral Tablet 15 MG',
    dosage: '15 MG',
    directions: 'Give 1 tablet by mouth at bedtime for depression',
    generic: 'Mirtazapine',
    startDate: '04/25/2026',
    endDate: '-',
    physician: '-',
    status: 'Active',
    iconType: 'capsule',
    accentColor: '#C9A7FF',
  },
  {
    id: '4',
    residentName: 'RICARDO GERALD',
    description: 'Lidocaine External Patch 4 %',
    dosage: '4 %',
    directions:
      'Apply to lower back topically one time a day for pain relief Apply 1 patch in am, and remove at hs; maximum 1 patch/day and remove per schedule',
    generic: 'Lidocaine',
    startDate: '04/25/2026',
    endDate: '-',
    physician: '-',
    status: 'Active',
    iconType: 'patch',
    accentColor: '#8BC5FF',
  },
  {
    id: '5',
    residentName: 'RICARDO GERALD',
    description: 'Farxiga Oral Tablet 10 MG',
    dosage: '10 MG',
    directions: 'Give 1 tablet by mouth one time a day for DM',
    generic: 'Dapagliflozin Propanediol ssss sssssss ssssss',
    startDate: '04/25/2026',
    endDate: '-',
    physician: '-',
    status: 'Active',
    iconType: 'tablet',
    accentColor: '#FFB8C6',
  },
];

const MedicationScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.listViewItemCardComponentWrapper,
          index === 0 && styles.listViewItemCardComponentWrapperWithMarginTop,
        ]}
      >
        <MedicationItemCard
          cardBackgroundColor={Colors.white}
          medicationBackgroundColor={Colors.lightPurple}
          residentLabel={item.residentName}
          residentlabelColor={Colors.textHighContrast}
          descriptionLabel={item.description}
          descriptionLabelColor={Colors.textHighContrast}
          genericLable={item.generic}
          genericLableColor={Colors.textLowContrast}
          status={item.status}
          statusColor={
            item.status === 'Active' ? Colors.success : Colors.error
          }
          statusBackgroundColor={
            item.status === 'Active'
              ? Colors.lightGreen
              : Colors.redLightest
          }
          directions={item.directions}
          itemStartDate={item.startDate}
          itemEndDate={item.endDate}
          itemPhysican={item.physician}
          itemLableColor={Colors.textHighContrast}
          itemValueColor={Colors.textLowContrast}
          createdDateLableColor={Colors.textHighContrast}
          itemCreatedDate={item.createdDate}
          itemCreatedDateLColor={Colors.textLowContrast}
        />
      </View>
    );
  };

  return (
    <View style={[styles.mainWrapper, { backgroundColor: Colors.secondary }]}>
      <FlatList
        bounces={false}
        overScrollMode="never"
        data={medication}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      />
    </View>
  );
};

export default MedicationScreen;
