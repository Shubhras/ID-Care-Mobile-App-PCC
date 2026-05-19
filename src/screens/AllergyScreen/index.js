import React from 'react';
import { FlatList, View } from 'react-native';
import AllergyItemCard from '../../components/cards/AllergyItemCard';
import Colors from '../../constants/Colors';
import styles from './styles';

const allergiesData = [
  {
    id: '1',
    allergen: 'Penicillin',
    category: 'Drug',
    clinicalStatus: 'Active',
    severity: 'High',
    onsetDate: '01/12/2025',
    createdBy: 'Dr. Sarah Wilson',
    createdDate: '01/13/2025',
    iconType: 'lab',
  },
  {
    id: '2',
    allergen: 'Peanuts',
    category: 'Food',
    clinicalStatus: 'Active',
    severity: 'Severe',
    onsetDate: '03/05/2024',
    createdBy: 'Dr. John Miller',
    createdDate: '03/06/2024',
    iconType: 'food',
  },
  {
    id: '3',
    allergen: 'Dust Mites',
    category: 'Environment',
    clinicalStatus: 'Active',
    severity: 'Moderate',
    onsetDate: '08/19/2023',
    createdBy: 'Johanna Orellana',
    createdDate: '08/20/2023',
    iconType: 'environment',
  },
  {
    id: '4',
    allergen: 'Lipitor',
    category: 'Drug',
    clinicalStatus: 'Inactive',
    severity: 'Unknown',
    onsetDate: '04/24/2026',
    createdBy: 'Johanna Orellana',
    createdDate: '04/25/2026',
    iconType: 'capsule',
  },
  {
    id: '5',
    allergen: 'Milk',
    category: 'Food',
    clinicalStatus: 'Active',
    severity: 'Low',
    onsetDate: '11/02/2022',
    createdBy: 'Dr. Emily Clark',
    createdDate: '11/03/2022',
    iconType: 'milk',
  },
];

const AllergyScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.listViewItemCardComponentWrapper,
          index === 0 && styles.listViewItemCardComponentWrapperWithMarginTop,
        ]}
      >
        <AllergyItemCard
          cardBackgroundColor={Colors.white}
          allergyBackgroundColor={Colors.lightPurple}
          allergyLabel={item.allergen}
          allergylabelColor={Colors.textHighContrast}
          categoryLable={item.category}
          categoryLableColor={Colors.white}
          status={item.clinicalStatus}
          statusColor={
            item.clinicalStatus === 'Active' ? Colors.success : Colors.error
          }
          statusBackgroundColor={
            item.clinicalStatus === 'Active'
              ? Colors.lightGreen
              : Colors.redLightest
          }
          itemSeverity={item.severity}
          itemOnsetDate={item.onsetDate}
          itemCreatedBy={item.createdBy}
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
        overScrollMode='never'
        data={allergiesData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      />
    </View>
  );
};

export default AllergyScreen;
