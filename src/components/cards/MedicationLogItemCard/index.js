import React, { memo } from 'react';
import { View } from 'react-native';
import MedicalPrescription from '../../../assets/icons/svg/MedicalPrescription.svg';
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

const MedicationLogItemCard = ({
  cardBackgroundColor,
  iconBackgroundColor,
  itemCode,
  itemCodeColor,
  itemRank,
  itemRankColor,
  status,
  statusColor,
  statusBackgroundColor,
  itemDescription,
  itemDate,
  itemCreatedDate,
  itemCreatedBy,
  itemLableColor,
  itemValueColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
      <View style={styles.itemDetailsWrapper}>
        {/* HEADER */}
        <View style={styles.allergyAndStatusWrapper}>
          {/* LEFT */}
          <View style={styles.allergyAndCaterogyWrapper}>
            <ButtonCircled
              height={36}
              backgroundColor={iconBackgroundColor}
              icon={
                <MedicalPrescription
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              }
            />
            <View style={styles.titleContainer}>
              <CustomText
                numberOfLines={2}
                style={[styles.itemCode, { color: itemCodeColor }]}
              >
                Code: {itemCode}
              </CustomText>
              <CustomText style={[styles.itemRank, { color: itemRankColor }]}>
                Rank: {itemRank}
              </CustomText>
            </View>
          </View>

          {/* RIGHT */}
          <View style={styles.rightContainer}>
            <View
              style={[
                styles.statusWrapper,
                { backgroundColor: statusBackgroundColor },
              ]}
            >
              <View
                style={[
                  styles.statusIndicator,
                  { backgroundColor: statusColor },
                ]}
              />
              <CustomText style={[styles.Status, { color: statusColor }]}>
                {status}
              </CustomText>
            </View>
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
              Description
            </CustomText>
            <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[styles.value, { color: itemValueColor }]}
            >
              {itemDescription}
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
              backgroundColor={iconBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Date
              </CustomText>
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemDate}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
            <ButtonCircled
              height={25}
              icon={
                <Calendar
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={iconBackgroundColor}
            />
            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Created Date
              </CustomText>
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemCreatedDate}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
            <ButtonCircled
              height={25}
              icon={
                <User
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={iconBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Created By
              </CustomText>
              <CustomText
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[styles.value, { color: itemValueColor }]}
              >
                {itemCreatedBy}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(MedicationLogItemCard);
