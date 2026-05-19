import React, { memo } from 'react';
import { View } from 'react-native';
import Calendar from '../../../assets/icons/svg/BlankCalendar.svg';
import DoctorIcon from '../../../assets/icons/svg/Doctor.svg';
import GenderFemale from '../../../assets/icons/svg/GenderFemale.svg';
import GenderMale from '../../../assets/icons/svg/GenderMale.svg';
import MedicineDoc from '../../../assets/icons/svg/MedicineDoc.svg';
import Relation from '../../../assets/icons/svg/Relation.svg';
import User from '../../../assets/icons/svg/User.svg';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import ButtonCircled from '../../buttons/ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import styles from './styles';

const PractitionerItemCard = ({
  cardBackgroundColor,
  iconBackgroundColor,
  itemName,
  itemNameColor,
  itemEmail,
  itemEmailColor,
  itemPhone,
  itemPhoneColor,
  itemGender,
  itemGenderColor,
  genderBackgroundColor,
  itemProviderType,
  itemCreatedDate,
  itemCreatedBy,
  itemRelation,
  itemLableColor,
  itemValueColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
      <View style={styles.itemDetailsWrapper}>
        //
        {/* HEADER */}
        <View style={styles.allergyAndStatusWrapper}>
          {/* LEFT */}
          <View style={styles.allergyAndCaterogyWrapper}>
            <ButtonCircled
              height={42}
              backgroundColor={iconBackgroundColor}
              icon={
                <DoctorIcon
                  width={STANDARD_VECTOR_ICON_SIZE * 1.2}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.2}
                />
              }
            />
            <View style={styles.titleContainer}>
              <CustomText
                numberOfLines={2}
                style={[styles.itemName, { color: itemNameColor }]}
              >
                {itemName}
              </CustomText>
              <CustomText style={[styles.itemEmail, { color: itemEmailColor }]}>
                Email: {itemEmail}
              </CustomText>
              <CustomText style={[styles.itemPhone, { color: itemPhoneColor }]}>
                Phone: {itemPhone}
              </CustomText>
            </View>
          </View>

          {/* RIGHT */}
          <View style={styles.rightContainer}>
            <View
              style={[
                styles.genderWrapper,
                { backgroundColor: genderBackgroundColor },
              ]}
            >
              {itemGender === 'M' ? (
                <GenderMale
                  width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                />
              ) : (
                <GenderFemale
                  width={STANDARD_VECTOR_ICON_SIZE * 0.75}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.75}
                />
              )}
              <CustomText style={[styles.gender, { color: itemGenderColor }]}>
                {itemGender}
              </CustomText>
            </View>
          </View>
        </View>
        //
        <View style={styles.directionsWrapper}>
          <MedicineDoc
            width={STANDARD_VECTOR_ICON_SIZE * 0.85}
            height={STANDARD_VECTOR_ICON_SIZE * 0.85}
          />
          <View style={styles.directionsDetails}>
            <CustomText style={[styles.label, { color: itemLableColor }]}>
              Provider Type
            </CustomText>
            <CustomText style={[styles.value, { color: itemValueColor }]}>
              {itemProviderType ? itemProviderType : 'N/A'}
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
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemCreatedBy}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
            <ButtonCircled
              height={25}
              icon={
                <Relation
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={iconBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Relation
              </CustomText>
              <CustomText
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[styles.value, { color: itemValueColor }]}
              >
                {itemRelation}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(PractitionerItemCard);
