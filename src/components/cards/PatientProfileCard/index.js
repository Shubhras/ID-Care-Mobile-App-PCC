// import { Image, View } from 'react-native';
// import { moderateScale } from 'react-native-size-matters';
// import Calendar from '../../../assets/icons/svg/Calendar.svg';
// import IdCard from '../../../assets/icons/svg/IdCard.svg';
// import Language from '../../../assets/icons/svg/Language.svg';
// import Colors from '../../../constants/Colors';
// import { Images } from '../../../constants/images';
// import { CustomText } from '../../global/CustomComponents';
// import styles from './styles';

// const PatientProfileCard = () => {
//   return (
//     <View style={styles.card}>
//       {/* Top Section */}
//       <View style={styles.topContainer}>
//         {/* Avatar */}
//         <View style={styles.avatarWrapper}>
//           <Image source={Images.userAvatar} style={styles.avatar} />
//         </View>

//         {/* Patient Details */}
//         <View style={styles.detailsContainer}>
//           <CustomText style={styles.nameText}>
//             HORNE,{' '}
//             <CustomText style={styles.nameSuffixText}>WILLIAM</CustomText>
//           </CustomText>

//           <View style={styles.statusRow}>
//             <CustomText style={styles.label}>Status: </CustomText>

//             <CustomText style={styles.dischargeText}>Discharged</CustomText>
//           </View>

//           <View style={styles.infoInlineRow}>
//             <CustomText style={styles.inlineText}>
//               <CustomText style={styles.label}>Gender:</CustomText> Male
//             </CustomText>

//             <View style={styles.verticalDivider} />

//             <CustomText style={styles.inlineText}>
//               <CustomText style={styles.label}>DOB:</CustomText> 09/14/1938
//             </CustomText>
//           </View>
//         </View>
//       </View>

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Bottom Info */}
//       <View style={styles.bottomContainer}>
//         {/* Admission */}
//         <View style={styles.infoRow}>
//           <Calendar
//             width={moderateScale(16)}
//             height={moderateScale(16)}
//             fill={Colors.textHighContrast}
//           />

//           <CustomText style={styles.infoText}>
//             <CustomText style={styles.label}>Admission:</CustomText> 03/12/2026
//             09:56 PM
//           </CustomText>
//         </View>

//         {/* Citizenship */}
//         <View style={styles.infoRow}>
//           <IdCard
//             width={moderateScale(16)}
//             height={moderateScale(16)}
//             fill={Colors.textHighContrast}
//           />

//           <View style={styles.flexRow}>
//             <CustomText style={styles.infoText}>
//               <CustomText style={styles.label}>Citizenship:</CustomText> N/A
//             </CustomText>

//             <View style={styles.dot} />

//             <CustomText style={styles.infoText}>
//               <CustomText style={styles.label}>Marital Status:</CustomText>{' '}
//               Married
//             </CustomText>
//           </View>
//         </View>

//         {/* Language */}
//         <View style={styles.infoRow}>
//           <Language
//             width={moderateScale(16)}
//             height={moderateScale(16)}
//             fill={Colors.textHighContrast}
//           />

//           <CustomText style={styles.infoText}>
//             <CustomText style={styles.label}>Language:</CustomText> English
//           </CustomText>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default PatientProfileCard;

// PatientProfileCard/index.js

import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Calendar from '../../../assets/icons/svg/Calendar.svg';
import IdCard from '../../../assets/icons/svg/IdCard.svg';
import Language from '../../../assets/icons/svg/Language.svg';
import Colors from '../../../constants/Colors';
import {Images} from '../../../constants/images';
import {CustomText} from '../../global/CustomComponents';
import styles from './styles';

const PatientProfileCard = ({
  profileImage,
  firstName = '',
  lastName = '',
  status = '',
  gender = '',
  dob = '',
  admissionDate = '',
  citizenship = '',
  maritalStatus = '',
  language = '',
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.itemDetailsWrapper}>
        {/* Top Section */}
        <View style={styles.topContainer}>
          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <Image
              source={
                profileImage
                  ? {uri: profileImage}
                  : Images.userAvatar
              }
              style={styles.avatar}
            />
          </View>

          {/* Details */}
          <View style={styles.detailsContainer}>
            {/* Name */}
            <View style={styles.nameRow}>
              <CustomText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.nameText}>
                {firstName},
              </CustomText>

              <CustomText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.nameSuffixText}>
                {lastName}
              </CustomText>
            </View>

            {/* Status */}
            <View style={styles.statusRow}>
              <CustomText style={styles.label}>
                Status:
              </CustomText>

              <CustomText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.statusText}>
                {status}
              </CustomText>
            </View>

            {/* Gender + DOB */}
            <View style={styles.infoInlineRow}>
              <View style={styles.genderDobRow}>
                <CustomText style={styles.label}>
                  Gender:
                </CustomText>

                <CustomText
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.inlineText}>
                  {gender}
                </CustomText>
              </View>

              <CustomText style={styles.verticalDivider}>
                |
              </CustomText>

              <View style={styles.genderDobRow}>
                <CustomText style={styles.label}>
                  DOB:
                </CustomText>

                <CustomText
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.inlineText}>
                  {dob}
                </CustomText>
              </View>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          {/* Admission */}
          <View style={styles.infoRow}>
            <Calendar
              width={moderateScale(15)}
              height={moderateScale(15)}
              fill={Colors.textHighContrast}
            />

            <CustomText style={styles.label}>
              Admission:
            </CustomText>

            <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.infoText}>
              {admissionDate}
            </CustomText>
          </View>

          {/* Citizenship + Marital Status */}
          <View style={styles.infoRow}>
            <IdCard
              width={moderateScale(15)}
              height={moderateScale(15)}
              fill={Colors.textHighContrast}
            />

            <View style={styles.flexRow}>
              <CustomText style={styles.label}>
                Citizenship:
              </CustomText>

              <CustomText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.infoText}>
                {citizenship}
              </CustomText>

              <CustomText style={styles.verticalDivider}>
                |
              </CustomText>

              <CustomText
                style={[
                  styles.label,
                  {marginLeft: 0},
                ]}>
                Marital Status:
              </CustomText>

              <CustomText
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.infoText}>
                {maritalStatus}
              </CustomText>
            </View>
          </View>

          {/* Language */}
          <View style={styles.infoRow}>
            <Language
              width={moderateScale(15)}
              height={moderateScale(15)}
              fill={Colors.textHighContrast}
            />

            <CustomText style={styles.label}>
              Language:
            </CustomText>

            <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.infoText}>
              {language}
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(PatientProfileCard);
