import React, { memo } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Calendar from '../../../assets/icons/svg/BlankCalendar.svg';
import MedicineDoc from '../../../assets/icons/svg/MedicineDoc.svg';
import User from '../../../assets/icons/svg/User.svg';
import Pills from '../../../assets/icons/svg/Pills.svg';
import Warning from '../../../assets/icons/svg/Warning.svg';
import Colors from '../../../constants/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import BadgePill from '../../badges/BadgePill';
import ButtonCircled from '../../buttons/ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import Icons from '../../Icons/Icons';
import styles from './styles';

const MedicationItemCard = ({
  cardBackgroundColor,
  medicationBackgroundColor,
  residentLabel,
  residentLabelColor,
  descriptionLabel,
  descriptionLabelColor,
  genericLable,
  genericLableColor,
  status,
  statusColor,
  statusBackgroundColor,
  directions,
  itemStartDate,
  itemEndDate,
  itemPhysican,
  itemLableColor,
  itemValueColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
      <View style={styles.itemDetailsWrapper}>
        <View style={styles.medicationAndStatusWrapper}>
          <View style={styles.medicationAndCaterogyWrapper}>
            <ButtonCircled
              height={45}
              icon={
                <Pills
                  width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                />
              }
              backgroundColor={medicationBackgroundColor}
            />
            <View style={styles.residentAndGenericContainer}>
              <CustomText
                style={[styles.residentLabel, { color: residentLabelColor }]}
              >
                {residentLabel}
              </CustomText>
              <CustomText
                style={[
                  styles.descriptionLabel,
                  { color: descriptionLabelColor },
                ]}
              >
                {descriptionLabel}
              </CustomText>
              <CustomText
                style={[styles.genericLable, { color: genericLableColor }]}
              >
                {genericLable}
              </CustomText>
            </View>
          </View>

          <View
            style={[
              styles.statusWrapper,
              { backgroundColor: statusBackgroundColor },
            ]}
          >
            <View
              style={[styles.statusIndicator, { backgroundColor: statusColor }]}
            />
            <CustomText style={[styles.Status, { color: statusColor }]}>
              {status}
            </CustomText>
          </View>
        </View>
        //
        <View style={styles.directionsWrapper}>
          <MedicineDoc
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
          <View style={styles.directionsDetails}>
            <CustomText style={[styles.label, { color: itemLableColor }]}>
              Directions
            </CustomText>
            <CustomText style={[styles.value, { color: itemValueColor }]}>
              {directions}
            </CustomText>
          </View>
        </View>
        <View style={styles.itemLableAndValueWrapper}>
          <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
            <ButtonCircled
              height={25}
              icon={
                <Calendar
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={medicationBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Start Date
              </CustomText>
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemStartDate}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, { flex: 1.1 }]}>
            <ButtonCircled
              height={25}
              icon={
                <Calendar
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={medicationBackgroundColor}
            />
            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                End Date
              </CustomText>
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemEndDate}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, { flex: 1.4 }]}>
            <ButtonCircled
              height={25}
              icon={
                <User
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={medicationBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Physician
              </CustomText>
              <CustomText
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[styles.value, { color: itemValueColor }]}
              >
                {itemPhysican}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(MedicationItemCard);
