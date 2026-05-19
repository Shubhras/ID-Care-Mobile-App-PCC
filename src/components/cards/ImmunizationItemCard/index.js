// import React, { memo } from 'react';
// import { View } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import Calendar from '../../../assets/icons/svg/BlankCalendar.svg';
// import User from '../../../assets/icons/svg/User.svg';
// import SyringeVaccine from '../../../assets/icons/svg/SyringeVaccine.svg';
// import ShieldCheck from '../../../assets/icons/svg/ShieldCheck.svg';
// import Location from '../../../assets/icons/svg/Location.svg';
// import Route from '../../../assets/icons/svg/Route.svg';
// import Building from '../../../assets/icons/svg/Buildings.svg';
// import Colors from '../../../constants/Colors';
// import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
// import BadgePill from '../../badges/BadgePill';
// import ButtonCircled from '../../buttons/ButtonCircled';
// import { CustomText } from '../../global/CustomComponents';
// import Icons from '../../Icons/Icons';
// import styles from './styles';

// const ImmunizationItemCard = ({
//   cardBackgroundColor,
//   immunizationBackgroundColor,
//   immunizationLabel,
//   immunizationLabelColor,
//   status,
//   statusColor,
//   statusBackgroundColor,
//   itemContentBy,
//   itemConsentDate,
//   itemAdministered,
//   itemLocation,
//   itemRoute,
//   itemManufacturer,
//   itemLableColor,
//   itemValueColor,
// }) => {
//   return (
//     <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
//       <View style={styles.itemDetailsWrapper}>
//         <View style={styles.allergyAndStatusWrapper}>
//           <View style={styles.allergyAndCaterogyWrapper}>
//             <ButtonCircled
//               height={45}
//               icon={
//                 <SyringeVaccine
//                   width={STANDARD_VECTOR_ICON_SIZE * 1.5}
//                   height={STANDARD_VECTOR_ICON_SIZE * 1.5}
//                 />
//               }
//               backgroundColor={immunizationBackgroundColor}
//             />
//             <CustomText
//               ellipsizeMode="tail"
//               numberOfLines={2}
//               style={[
//                 styles.immunizationLabel,
//                 { color: immunizationLabelColor },
//               ]}
//             >
//               {immunizationLabel}
//             </CustomText>
//           </View>

//           <View
//             style={[
//               styles.statusWrapper,
//               { backgroundColor: statusBackgroundColor },
//             ]}
//           >
//             <View
//               style={[styles.statusIndicator, { backgroundColor: statusColor }]}
//             />
//             <CustomText style={[styles.Status, { color: statusColor }]}>
//               {status}
//             </CustomText>
//           </View>
//         </View>
//         //
//         <View style={styles.itemLableAndValueWrapper}>
//           <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
//             <ButtonCircled
//               height={25}
//               icon={
//                 <User
//                   width={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                   height={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                 />

//               }
//               backgroundColor={immunizationBackgroundColor}
//             />

//             <View style={styles.itemLableAndValueContainer}>
//               <CustomText style={[styles.label, { color: itemLableColor }]}>
//                 Content By
//               </CustomText>
//               <CustomText style={[styles.value, { color: itemValueColor }]}>
//                 {itemContentBy}
//               </CustomText>
//             </View>
//           </View>

//           <View style={styles.verticalDivider} />

//           <View style={[styles.itemIconAndValueContainer, { flex: 1.1 }]}>
//             <ButtonCircled
//               height={25}
//               icon={
//                 <Calendar
//                   width={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                   height={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                 />
//               }
//               backgroundColor={immunizationBackgroundColor}
//             />
//             <View style={styles.itemLableAndValueContainer}>
//               <CustomText style={[styles.label, { color: itemLableColor }]}>
//                 Consent Date
//               </CustomText>
//               <CustomText style={[styles.value, { color: itemValueColor }]}>
//                 {itemConsentDate}
//               </CustomText>
//             </View>
//           </View>

//           <View style={styles.verticalDivider} />

//           <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
//             <ButtonCircled
//               height={25}
//               icon={
//                 <ShieldCheck
//                   width={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                   height={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                 />
//               }
//               backgroundColor={immunizationBackgroundColor}
//             />

//             <View style={styles.itemLableAndValueContainer}>
//               <CustomText style={[styles.label, { color: itemLableColor }]}>
//                 Administered
//               </CustomText>
//               <CustomText
//                 numberOfLines={2}
//                 ellipsizeMode="tail"
//                 style={[styles.value, { color: itemValueColor }]}
//               >
//                 {itemAdministered}
//               </CustomText>
//             </View>
//           </View>
//         </View>
//         //
//         <View style={styles.itemLableAndValueWrapper}>
//           <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
//             <ButtonCircled
//               height={25}
//               icon={
//                 <Location
//                   width={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                   height={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                 />

//               }
//               backgroundColor={immunizationBackgroundColor}
//             />

//             <View style={styles.itemLableAndValueContainer}>
//               <CustomText style={[styles.label, { color: itemLableColor }]}>
//                 Location
//               </CustomText>
//               <CustomText style={[styles.value, { color: itemValueColor }]}>
//                 {itemLocation}
//               </CustomText>
//             </View>
//           </View>

//           <View style={styles.verticalDivider} />

//           <View style={[styles.itemIconAndValueContainer, { flex: 1.1 }]}>
//             <ButtonCircled
//               height={25}
//               icon={
//                 <Route
//                   width={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                   height={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                 />
//               }
//               backgroundColor={immunizationBackgroundColor}
//             />
//             <View style={styles.itemLableAndValueContainer}>
//               <CustomText style={[styles.label, { color: itemLableColor }]}>
//                Route
//               </CustomText>
//               <CustomText style={[styles.value, { color: itemValueColor }]}>
//                 {itemRoute}
//               </CustomText>
//             </View>
//           </View>

//           <View style={styles.verticalDivider} />

//           <View style={[styles.itemIconAndValueContainer, { flex: 1 }]}>
//             <ButtonCircled
//               height={25}
//               icon={
//                 <Building
//                   width={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                   height={STANDARD_VECTOR_ICON_SIZE * 0.85}
//                 />
//               }
//               backgroundColor={immunizationBackgroundColor}
//             />

//             <View style={styles.itemLableAndValueContainer}>
//               <CustomText style={[styles.label, { color: itemLableColor }]}>
//                 Manufacturer
//               </CustomText>
//               <CustomText
//                 numberOfLines={2}
//                 ellipsizeMode="tail"
//                 style={[styles.value, { color: itemValueColor }]}
//               >
//                 {itemManufacturer}
//               </CustomText>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default memo(ImmunizationItemCard);

import React, { memo } from 'react';
import { View } from 'react-native';
import Calendar from '../../../assets/icons/svg/BlankCalendar.svg';
import User from '../../../assets/icons/svg/User.svg';
import SyringeVaccine from '../../../assets/icons/svg/SyringeVaccine.svg';
import ShieldCheck from '../../../assets/icons/svg/ShieldCheck.svg';
import Location from '../../../assets/icons/svg/Location.svg';
import Route from '../../../assets/icons/svg/Route.svg';
import Building from '../../../assets/icons/svg/Buildings.svg';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';
import ButtonCircled from '../../buttons/ButtonCircled';
import { CustomText } from '../../global/CustomComponents';
import styles from './styles';

const ImmunizationItemCard = ({
  cardBackgroundColor,
  immunizationBackgroundColor,
  immunizationLabel,
  immunizationLabelColor,
  status,
  statusColor,
  statusBackgroundColor,
  itemContentBy,
  itemConsentDate,
  itemAdministered,
  itemLocation,
  itemRoute,
  itemManufacturer,
  itemLotNumber,
  itemLableColor,
  itemValueColor,
}) => {
  const renderGridItem = (icon, label, value) => {
    return (
      <View style={styles.gridItem}>
        <ButtonCircled
          height={25}
          backgroundColor={immunizationBackgroundColor}
          icon={icon}
        />

        <View style={styles.gridTextContainer}>
          <CustomText
            numberOfLines={1}
            style={[styles.label, { color: itemLableColor }]}
          >
            {label}
          </CustomText>

          <CustomText
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.value, { color: itemValueColor }]}
          >
            {value}
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
      <View style={styles.itemDetailsWrapper}>
        {/* HEADER */}
        <View style={styles.allergyAndStatusWrapper}>
          {/* LEFT */}
          <View style={styles.allergyAndCaterogyWrapper}>
            <ButtonCircled
              height={42}
              backgroundColor={immunizationBackgroundColor}
              icon={
                <SyringeVaccine
                  width={STANDARD_VECTOR_ICON_SIZE * 1.2}
                  height={STANDARD_VECTOR_ICON_SIZE * 1.2}
                />
              }
            />
            <View style={styles.titleContainer}>
              <CustomText
                numberOfLines={2}
                style={[
                  styles.immunizationLabel,
                  { color: immunizationLabelColor },
                ]}
              >
                {immunizationLabel}
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
            {itemLotNumber && (
              <CustomText style={styles.lotText}>
                Lot
                <CustomText style={styles.lotNumber}>
                  {' '}
                  #{itemLotNumber}
                </CustomText>
              </CustomText>
            )}
          </View>
        </View>

        {/* GRID */}
        <View style={styles.gridWrapper}>
          {/* ROW 1 */}
          <View style={styles.gridRow}>
            {renderGridItem(
              <User
                width={STANDARD_VECTOR_ICON_SIZE * 0.82}
                height={STANDARD_VECTOR_ICON_SIZE * 0.82}
              />,
              'Content By',
              itemContentBy,
            )}

            <View style={styles.verticalDivider} />

            {renderGridItem(
              <Calendar
                width={STANDARD_VECTOR_ICON_SIZE * 0.82}
                height={STANDARD_VECTOR_ICON_SIZE * 0.82}
              />,
              'Consent Date',
              itemConsentDate,
            )}

            <View style={styles.verticalDivider} />

            {renderGridItem(
              <ShieldCheck
                width={STANDARD_VECTOR_ICON_SIZE * 0.82}
                height={STANDARD_VECTOR_ICON_SIZE * 0.82}
              />,
              'Administered',
              itemAdministered,
            )}
          </View>

          <View style={styles.horizontalDivider} />

          {/* ROW 2 */}
          <View style={styles.gridRow}>
            {renderGridItem(
              <Location
                width={STANDARD_VECTOR_ICON_SIZE * 0.82}
                height={STANDARD_VECTOR_ICON_SIZE * 0.82}
              />,
              'Location',
              itemLocation,
            )}

            <View style={styles.verticalDivider} />

            {renderGridItem(
              <Route
                width={STANDARD_VECTOR_ICON_SIZE * 0.82}
                height={STANDARD_VECTOR_ICON_SIZE * 0.82}
              />,
              'Route',
              itemRoute,
            )}

            <View style={styles.verticalDivider} />

            {renderGridItem(
              <Building
                width={STANDARD_VECTOR_ICON_SIZE * 0.82}
                height={STANDARD_VECTOR_ICON_SIZE * 0.82}
              />,
              'Manufacturer',
              itemManufacturer,
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(ImmunizationItemCard);
