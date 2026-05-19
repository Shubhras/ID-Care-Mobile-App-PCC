import React from 'react';
import { FlatList, View } from 'react-native';
import PractitionerItemCard from '../../components/cards/PractitionerItemCard';
import Colors from '../../constants/Colors';
import styles from './styles';

const practitioner = [
  {
    id: '1',
    name: 'Anuj Sejra',
    gender: 'M',
    phone: '(973) 971-4497',
    email: 'anuj.sejra@atlantichealth.org',
    providerType: 'Nurse Practitioner',
    relation: 'Primary',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
  {
    id: '2',
    name: 'JACQUELIN HOLUBKA',
    gender: 'F',
    phone: '(973) 525-8926',
    email: 'anuj.sejra@atlantichealth.org',
    providerType: 'Attending Physician',
    relation: 'Primary',
    createdBy: 'carmenes',
    createdDate: '03/13/2026',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Jason Prager',
    gender: 'M',
    phone: '(973) 971-4497',
    email: 'anuj.sejra@atlantichealth.org',
    providerType: 'Attending Physician',
    relation: 'Primary',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Jeremy Davis',
    gender: 'M',
    phone: '(201) 450-6635',
    email: 'anuj.sejra@atlantichealth.org',
    providerType: 'Nurse Practitioner',
    relation: '',
    createdBy: 'mariannaf',
    createdDate: '03/14/2026',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Kledia Blloshmi',
    gender: 'F',
    phone: '(862) 881-3434',
    email: 'KLEDIA@GMAIL.COM',
    providerType: 'Attending Physician',
    relation: 'Primary',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
  {
    id: '6',
    name: 'Lauren Pampinella',
    gender: 'F',
    phone: '',
    email: '',
    providerType: 'Nurse Practitioner',
    relation: '',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
  {
    id: '7',
    name: 'Shilpa Shroff',
    gender: 'F',
    phone: '(973) 971-4497',
    email: 'shilpa.shroff@atlantichealt.org',
    providerType: 'Attending Physician',
    relation: '',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
  {
    id: '8',
    name: 'Stephen Williams',
    gender: 'M',
    phone: '',
    email: '',
    providerType: 'Attending Physician',
    relation: '',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
  {
    id: '9',
    name: 'Sushilkumar Gupta',
    gender: 'M',
    phone: '2673681169',
    email: '',
    providerType: 'Attending Physician',
    relation: '',
    createdBy: 'helynec',
    createdDate: '03/12/2026',
    status: 'Active',
  },
];

const PractitionersScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.listViewItemCardComponentWrapper,
          index === 0 && styles.listViewItemCardComponentWrapperWithMarginTop,
        ]}
      >
        <PractitionerItemCard
          cardBackgroundColor={Colors.white}
          iconBackgroundColor={Colors.lightPurple}
          itemName={item.name}
          itemNameColor={Colors.textHighContrast}
          itemEmail={item.email}
          itemEmailColor={Colors.textHighContrast}
          itemPhone={item.phone}
          itemPhoneColor={Colors.textLowContrast}
          itemGender={item.gender}
          itemGenderColor={Colors.boysenberry}
          genderBackgroundColor={Colors.lightPurple}
          itemProviderType={item.providerType}
          itemCreatedDate={item.createdDate}
          itemCreatedBy={item.createdBy}
          itemRelation={item.relation}
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
        data={practitioner}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      />
    </View>
  );
};

export default PractitionersScreen;
