import React, { memo } from 'react';
import { View } from 'react-native';
import Calendar from '../../../assets/icons/svg/BlankCalendar.svg';
import MedicineDoc from '../../../assets/icons/svg/MedicineDoc.svg';
import NutritionIcon from '../../../assets/icons/svg/Nutrition.svg';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import ButtonCircled from '../../buttons/ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import styles from './styles';

const MedicationItemCard = ({
  cardBackgroundColor,
  medicationBackgroundColor,
  dietTypeLabel,
  dietTypeLabelColor,
  textureLabel,
  textureLabelColor,
  fluidConsistency,
  fluidConsistencyColor,
  itemId,
  status,
  statusColor,
  statusBackgroundColor,
  directions,
  itemStartDate,
  itemEndDate,
  itemOrderDate,
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
              backgroundColor={medicationBackgroundColor}
              icon={
                <NutritionIcon
                  width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                />
              }
            />
            <View style={styles.titleContainer}>
              <CustomText
                numberOfLines={2}
                style={[
                  styles.immunizationLabel,
                  { color: dietTypeLabelColor },
                ]}
              >
                {dietTypeLabel}
              </CustomText>
              <CustomText
                style={[
                  styles.descriptionLabel,
                  { color: textureLabelColor },
                ]}
              >
                Texture: {textureLabel}
              </CustomText>
              <CustomText
                style={[styles.genericLable, { color: fluidConsistencyColor }]}
              >
               Fluid Consistency: {fluidConsistency}
              </CustomText>
            </View>
          </View>

          {/* RIGHT */}
          <View style={styles.rightContainer}>
            {itemId && (
              <CustomText style={styles.lotText}>
                ID
                <CustomText style={styles.lotNumber}> #{itemId}</CustomText>
              </CustomText>
            )}
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
            width={STANDARD_VECTOR_ICON_SIZE * 0.85}
            height={STANDARD_VECTOR_ICON_SIZE * 0.85}
          />
          <View style={styles.directionsDetails}>
            <CustomText style={[styles.label, { color: itemLableColor }]}>
              Directions
            </CustomText>
            <CustomText style={[styles.value, { color: itemValueColor }]}>
              {directions ? directions : 'N/A'}
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
                <Calendar
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={medicationBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Order Date
              </CustomText>
              <CustomText
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[styles.value, { color: itemValueColor }]}
              >
                {itemOrderDate}
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(MedicationItemCard);
