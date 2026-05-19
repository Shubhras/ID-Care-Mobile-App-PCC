import { memo } from 'react';
import { Pressable, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Building from '../../../assets/icons/svg/Building.svg';
import Calendar from '../../../assets/icons/svg/Calendar.svg';
import Capsule from '../../../assets/icons/svg/Capsule.svg';
import Door from '../../../assets/icons/svg/Door.svg';
import IdCard from '../../../assets/icons/svg/IdCard.svg';
import { CustomText } from '../../global/CustomComponents';
import styles from './styles';

const PatientsItemCard = ({
  cardBackgroundColor,
  patientName,
  patientNameColor,
  gender,
  genderColor,
  dividerColor,
  dob,
  mrn,
  antibiotic,
  careUnit,
  room,
  infoTextColor,
  labelColor,
  buttonBackgroundColor,
  buttonLabelColor,
  buttonLabel,
  onViewHistory,
  onPress,
}) => {
  const renderInfoRow = (IconComponent, label, value) => {
    return (
      <View style={styles.infoRow}>
        <View style={styles.iconWrapper}>
          <IconComponent width={moderateScale(18)} height={moderateScale(18)} />
        </View>

        <CustomText style={[styles.infoText, { color: infoTextColor }]}>
          <CustomText style={[styles.label, { color: labelColor }]}>
            {label}
          </CustomText>
          {value}
        </CustomText>
      </View>
    );
  };

  return (
    <Pressable
      style={[
        styles.card,
        {
          backgroundColor: cardBackgroundColor,
        },
      ]}
      onPress={onPress}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <CustomText
          numberOfLines={1}
          style={[
            styles.patientName,
            {
              color: patientNameColor,
            },
          ]}
        >
          {patientName}
        </CustomText>

        <CustomText
          style={[
            styles.genderText,
            {
              color: genderColor,
            },
          ]}
        >
          {gender}
        </CustomText>
      </View>

      {/* Divider */}
      <View
        style={[
          styles.divider,
          {
            backgroundColor: dividerColor,
          },
        ]}
      />

      {/* Info */}
      {renderInfoRow(Calendar, 'DOB: ', dob)}
      {renderInfoRow(IdCard, 'MRN: ', mrn)}
      {renderInfoRow(Capsule, 'Antibiotic: ', antibiotic)}
      {renderInfoRow(Building, 'Care Unit: ', careUnit)}
      {renderInfoRow(Door, 'Room: ', room)}

      {/* Button */}
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: buttonBackgroundColor,
          },
        ]}
        onPress={onViewHistory}
      >
        <CustomText
          style={[
            styles.buttonLabel,
            {
              color: buttonLabelColor,
            },
          ]}
        >
          {buttonLabel}
        </CustomText>
      </Pressable>
    </Pressable>
  );
};

export default memo(PatientsItemCard);
