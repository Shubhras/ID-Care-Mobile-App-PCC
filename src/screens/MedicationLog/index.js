import React from 'react';
import { FlatList, View } from 'react-native';
import MedicationLogItemCard from '../../components/cards/MedicationLogItemCard';
import Colors from '../../constants/Colors';
import styles from './styles';

const medicationLogs = [
  {
    id: '1',
    code: 'E46',
    description: 'UNSPECIFIED PROTEIN-CALORIE MALNUTRITION',
    date: '03/12/2026',
    rank: 'Secondary 14',
    status: 'Active',
    createdDate: '03/17/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '2',
    code: 'E78.5',
    description: 'HYPERLIPIDEMIA, UNSPECIFIED',
    date: '03/12/2026',
    rank: 'Secondary 11',
    status: 'Active',
    createdDate: '03/13/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '3',
    code: 'I10',
    description: 'ESSENTIAL (PRIMARY) HYPERTENSION',
    date: '03/30/2021',
    rank: 'Secondary test',
    status: 'Active',
    createdDate: '04/12/2021',
    createdBy: 'rizzamayp',
  },
  {
    id: '4',
    code: 'I25.10',
    description:
      'ATHEROSCLEROTIC HEART DISEASE OF NATIVE CORONARY ARTERY WITHOUT ANGINA PECTORIS',
    date: '03/12/2026',
    rank: 'Secondary 8',
    status: 'Active',
    createdDate: '03/17/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '5',
    code: 'I48.20',
    description: 'CHRONIC ATRIAL FIBRILLATION, UNSPECIFIED',
    date: '03/12/2026',
    rank: 'Secondary 9',
    status: 'Active',
    createdDate: '03/17/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '6',
    code: 'I50.32',
    description: 'CHRONIC DIASTOLIC (CONGESTIVE) HEART FAILURE',
    date: '03/12/2026',
    rank: 'Secondary 7',
    status: 'Active',
    createdDate: '03/17/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '7',
    code: 'I95.1',
    description: 'ORTHOSTATIC HYPOTENSION',
    date: '03/12/2026',
    rank: 'Secondary 10',
    status: 'Active',
    createdDate: '03/13/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '8',
    code: 'M54.59',
    description: 'OTHER LOW BACK PAIN',
    date: '03/12/2026',
    rank: 'Secondary 6',
    status: 'Active',
    createdDate: '03/17/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '9',
    code: 'M62.81',
    description: 'MUSCLE WEAKNESS (GENERALIZED)',
    date: '03/12/2026',
    rank: 'Secondary 2',
    status: 'Active',
    createdDate: '03/13/2026',
    createdBy: 'rizzamayp',
  },
  {
    id: '10',
    code: 'N18.30',
    description: 'CHRONIC KIDNEY DISEASE, STAGE 3 UNSPECIFIED',
    date: '03/30/2021',
    rank: 'Secondary 12',
    status: 'Active',
    createdDate: '03/31/2021',
    createdBy: 'rizzamayp',
  },
];

const MedicationLog = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.listViewItemCardComponentWrapper,
          index === 0 && styles.listViewItemCardComponentWrapperWithMarginTop,
        ]}
      >
        <MedicationLogItemCard
          cardBackgroundColor={Colors.white}
          iconBackgroundColor={Colors.lightPurple}
          itemCode={item.code}
          itemCodeColor={Colors.textHighContrast}
          itemRank={item.rank}
          itemRankColor={Colors.textHighContrast}
          status={item.status}
          statusColor={item.status === 'Active' ? Colors.success : Colors.error}
          statusBackgroundColor={
            item.status === 'Active' ? Colors.lightGreen : Colors.redLightest
          }
          itemDescription={item.description}
          itemDate={item.date}
          itemCreatedDate={item.createdDate}
          itemCreatedBy={item.createdBy}
          itemLableColor={Colors.textHighContrast}
          itemValueColor={Colors.textLowContrast}
        />
      </View>
    );
  };

  return (
    <View style={[styles.mainWrapper, { backgroundColor: Colors.secondary }]}>
      <FlatList
        bounces={false}
        overScrollMode="never"
        data={medicationLogs}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      />
    </View>
  );
};

export default MedicationLog;
