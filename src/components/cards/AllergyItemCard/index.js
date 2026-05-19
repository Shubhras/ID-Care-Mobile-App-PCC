import React, { memo } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Calendar from '../../../assets/icons/svg/BlankCalendar.svg';
import User from '../../../assets/icons/svg/User.svg';
import Virus from '../../../assets/icons/svg/Virus.svg';
import Warning from '../../../assets/icons/svg/Warning.svg';
import Colors from '../../../constants/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import BadgePill from '../../badges/BadgePill';
import ButtonCircled from '../../buttons/ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import Icons from '../../Icons/Icons';
import styles from './styles';

const AllergyItemCard = ({
  cardBackgroundColor,
  allergyBackgroundColor,
  allergyLabel,
  allergylabelColor,
  categoryLable,
  categoryLableColor,
  status,
  statusColor,
  statusBackgroundColor,
  itemSeverity,
  itemOnsetDate,
  itemCreatedBy,
  itemLableColor,
  itemValueColor,
  createdDateLableColor,
  itemCreatedDate,
  itemCreatedDateLColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
      <View style={styles.itemDetailsWrapper}>
        <View style={styles.allergyAndStatusWrapper}>
          <View style={styles.allergyAndCaterogyWrapper}>
            <ButtonCircled
              height={45}
              icon={
                <Virus
                  width={STANDARD_VECTOR_ICON_SIZE * 1.5}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.5}
                />
              }
              backgroundColor={allergyBackgroundColor}
            />
            <View style={styles.allergyAndCaterogyContainer}>
              <CustomText
                style={[styles.allergyLabel, { color: allergylabelColor }]}
              >
                {allergyLabel}
              </CustomText>
              <View style={styles.categoryWrapper}>
                 <BadgePill
                label={categoryLable}
                fontSize={RFValue(9)}
                labelColor={categoryLableColor}
                backgroundColor={Colors.boysenberry}
              />
              </View>
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
        <View style={styles.itemLableAndValueWrapper}>
          <View style={[styles.itemIconAndValueContainer, {flex: 1}]}>
            <ButtonCircled
              height={25}
              icon={
                <Warning
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={allergyBackgroundColor}
            />

            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Severity
              </CustomText>
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemSeverity}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, {flex: 1.1}]}>
            <ButtonCircled
              height={25}
              icon={
                <Calendar
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={allergyBackgroundColor}
            />
            <View style={styles.itemLableAndValueContainer}>
              <CustomText style={[styles.label, { color: itemLableColor }]}>
                Onset Date
              </CustomText>
              <CustomText style={[styles.value, { color: itemValueColor }]}>
                {itemOnsetDate}
              </CustomText>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={[styles.itemIconAndValueContainer, {flex: 1.4}]}>
            <ButtonCircled
              height={25}
              icon={
                <User
                  width={STANDARD_VECTOR_ICON_SIZE * 0.85}
                  height={STANDARD_VECTOR_ICON_SIZE * 0.85}
                />
              }
              backgroundColor={allergyBackgroundColor}
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
        //
        <View style={styles.itemCreatedDateWrapper}>
          <View style={styles.itemCreatedDateContainer}>
            <Calendar
              width={STANDARD_VECTOR_ICON_SIZE * 0.85}
              height={STANDARD_VECTOR_ICON_SIZE * 0.85}
            />
            <CustomText
              style={[
                styles.createdDateLable,
                { color: createdDateLableColor },
              ]}
            >
              Created Date
            </CustomText>
            <CustomText
              style={[styles.itemCreatedDate, { color: itemCreatedDateLColor }]}
            >
              {itemCreatedDate}
            </CustomText>
          </View>
          <Icons
            iconType={'Feather'}
            name={'chevron-right'}
            color={Colors.black}
            size={STANDARD_VECTOR_ICON_SIZE * 0.85}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(AllergyItemCard);
