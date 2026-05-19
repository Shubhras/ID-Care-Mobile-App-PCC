// ContactCard/index.js

import { memo } from 'react';
import { View } from 'react-native';
import MailIcon from '../../../assets/icons/svg/Mail.svg';
import PhoneIcon from '../../../assets/icons/svg/Phone.svg';
import UserIcon from '../../../assets/icons/svg/Profile.svg';
import UserGear from '../../../assets/icons/svg/UserGear.svg';
import Colors from '../../../constants/Colors';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import ButtonCircled from '../../buttons/ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import styles from './styles';

const ContactItemCard = ({
  itemName,
  itemNameColor,
  itemNumber,
  itemNumberColor,
  itemEmail,
  itemEmailColor,
  itemRelation,
  itemRelationColor,
  relationBackgroundColor,
  itemRole,
  itemRoleColor,
}) => {
  return (
    <View style={styles.card}>
      {/* Item image wrapper */}

      {/* User Icon */}
      <View style={styles.userIconWrapper}>
        <ButtonCircled
          height={55}
          icon={
            <UserIcon
              width={STANDARD_VECTOR_ICON_SIZE * 1.65}
              height={STANDARD_VECTOR_ICON_SIZE * 1.65}
            />
          }
          backgroundColor={Colors.lightPurple}
        />
      </View>
      <View style={styles.itemDetailsWrapper}>
        <View>
          <View style={styles.itemNameAndRelationWrapper}>
            <CustomText
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[styles.itemName, { color: itemNameColor }]}
            >
              {itemName}
            </CustomText>
            <View
              style={[
                styles.itemRelationWrapper,
                { backgroundColor: relationBackgroundColor },
              ]}
            >
              <CustomText
                ellipsizeMode="tail"
                numberOfLines={1}
                style={[styles.itemRelation, { color: itemRelationColor }]}
              >
                {itemRelation}
              </CustomText>
            </View>
          </View>

          <View style={styles.itemNumberWrapper}>
            <PhoneIcon
              width={STANDARD_VECTOR_ICON_SIZE * 0.75}
              height={STANDARD_VECTOR_ICON_SIZE * 0.75}
            />
            <CustomText style={[styles.itemNumber, { color: itemNumberColor }]}>
              {itemNumber}
            </CustomText>
          </View>
        </View>

        <View style={styles.itemRoleWrapper}>
          <UserGear
            width={STANDARD_VECTOR_ICON_SIZE * 0.75}
            height={STANDARD_VECTOR_ICON_SIZE * 0.75}
          />
          <CustomText style={[styles.itemRole, { color: itemRoleColor }]}>
            {itemRole}
          </CustomText>
        </View>

        <View style={styles.itemEmailWrapper}>
          <MailIcon
            width={STANDARD_VECTOR_ICON_SIZE * 0.75}
            height={STANDARD_VECTOR_ICON_SIZE * 0.75}
          />
          <CustomText style={[styles.itemEmail, { color: itemEmailColor }]}>
            {itemEmail}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default memo(ContactItemCard);
