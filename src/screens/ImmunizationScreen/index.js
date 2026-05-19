import React from 'react';
import { FlatList, View } from 'react-native';
import ImmunizationItemCard from '../../components/cards/ImmunizationItemCard';
import Colors from '../../constants/Colors';
import styles from './styles';

const immunization = [
  {
    id: '1',
    immunization:'2025-2026 Influenza, Fluad Trivalent PFS 0.5ml',
    status: 'Historical',
    consentBy: '',
    consentDate: '',
    administered: 'Yes',
    administeredBy: '',
    location: '',
    lotNumber: '',
    manufacturer: '',
    route: '',
  },
  {
    id: '2',
    immunization:'Pfizer Comirnaty COVID 19 Vaccine (2025-2026 Formula)',
    status: 'Historical',
    consentBy: '',
    consentDate: '',
    administered: 'Yes',
    administeredBy: '',
    location: '',
    lotNumber: '',
    manufacturer: '',
    route: '',
  },
  {
    id: '3',
    immunization: 'Pneumonia Vaccine',
    status: 'Historical',
    consentBy: '',
    consentDate: '',
    administered: 'Yes',
    administeredBy: '',
    location: '',
    lotNumber: '',
    manufacturer: '',
    route: '',
  },
  {
    id: '4',
    immunization: 'TB 2 Step Mantoux Skin Test',
    status: 'Consented',
    consentBy: 'elenam',
    consentDate: '04/25/2026',
    administered: 'Yes',
    administeredBy: 'Elena Maskayev',
    location: 'Right Forearm',
    lotNumber: '93695',
    manufacturer: 'endo',
    route: 'intradermally',
  },
  {
    id: '5',
    immunization: 'TB 2 Step Mantoux Skin Test',
    status: 'Consented',
    consentBy: 'elenam',
    consentDate: '04/25/2026',
    administered: 'No',
    administeredBy: '',
    location: '',
    lotNumber: '',
    manufacturer: '',
    route: '',
  },
];

const ImmunizationScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.listViewItemCardComponentWrapper,
          index === 0 && styles.listViewItemCardComponentWrapperWithMarginTop,
        ]}
      >
        <ImmunizationItemCard
          cardBackgroundColor={Colors.white}
          immunizationBackgroundColor={Colors.lightPurple}
          immunizationLabel={item.immunization}
          immunizationlabelColor={Colors.textHighContrast}
          status={item.status}
          statusColor={
            item.status === 'Historical' ? Colors.success : Colors.error
          }
          statusBackgroundColor={
            item.status === 'Historical'
              ? Colors.lightGreen
              : Colors.redLightest
          }
          itemLotNumber={item.lotNumber}
          itemContentBy={item.consentBy}
          itemConsentDate={item.consentDate}
          itemAdministered={item.administered}
          itemLocation={item.location}
          itemRoute={item.route}
          itemManufacturer={item.manufacturer}
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
        overScrollMode='never'
        data={immunization}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewWrapper}
      />
    </View>
  );
};

export default ImmunizationScreen;
