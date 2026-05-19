// import { StyleSheet } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { moderateScale } from 'react-native-size-matters';
// import Colors from '../../../constants/Colors';
// import {
//   OPEN_SANS_MEDIUM,
//   OPEN_SANS_SEMIBOLD,
//   STANDARD_BORDER_RADIUS,
//   STANDARD_BORDER_WIDTH,
//   STANDARD_SPACING
// } from '../../../constants/Constants';

// // Exporting style
// export default StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     minHeight: moderateScale(150),
//     borderRadius: moderateScale(15),
//     borderWidth: STANDARD_BORDER_WIDTH,
//     borderColor: '#E7E7E7',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.08,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   itemDetailsWrapper: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: moderateScale(10),
//   },
//   allergyAndStatusWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: STANDARD_SPACING * 2,
//   },
//   allergyAndCaterogyWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   immunizationLabel: {
//     flexShrink: 1,
//     fontSize: RFValue(8),
//     fontFamily: OPEN_SANS_SEMIBOLD,
//     marginBottom: STANDARD_SPACING * 0.5,
//   },
//   categoryWrapper:{
//     alignSelf: 'flex-start'
//   },
//   statusWrapper: {
//     height: moderateScale(20),
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: STANDARD_SPACING * 2,
//     borderRadius: moderateScale(30),
//     marginBottom: STANDARD_SPACING * 4,
//   },
//   statusIndicator: {
//     width: moderateScale(5),
//     height: moderateScale(5),
//     borderRadius: moderateScale(2.5),
//     marginRight: moderateScale(6),
//   },
//   Status: {
//     fontSize: RFValue(8),
//     fontFamily: OPEN_SANS_SEMIBOLD,
//   },
//   itemLableAndValueWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: STANDARD_BORDER_RADIUS,
//     borderWidth: STANDARD_BORDER_WIDTH * 0.5,
//     borderColor: Colors.inputBorderColor,
//     marginBottom: STANDARD_SPACING * 1.5,
//     overflow: 'hidden',
//   },
//   itemIconAndValueContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: STANDARD_SPACING * 1.2,
//     paddingHorizontal: STANDARD_SPACING,
//     // borderWidth: 1,
//   },
//   verticalDivider: {
//     width: STANDARD_BORDER_WIDTH * 0.5,
//     alignSelf: 'stretch',
//     backgroundColor: Colors.inputBorderColor,
//   },
//   itemLableAndValueContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     marginLeft: STANDARD_SPACING * 1.2,
//     paddingRight: STANDARD_SPACING * 0.5,
//   },
//   label: {
//     fontSize: RFValue(8),
//     fontFamily: OPEN_SANS_SEMIBOLD,
//     marginBottom: 2,
//   },
//   value: {
//     fontSize: RFValue(8),
//     fontFamily: OPEN_SANS_MEDIUM,
//     flexShrink: 1,
//   },
// });

import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
} from '../../../constants/Constants';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    minHeight: moderateScale(140),
    borderRadius: moderateScale(15),
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: '#E7E7E7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 2,
  },
  itemDetailsWrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: STANDARD_SPACING * 1.8,
  },
  allergyAndStatusWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: STANDARD_SPACING * 2,
  },
  allergyAndCaterogyWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: STANDARD_SPACING * 2,
  },
  titleContainer: {
    flex: 1,
    marginLeft: STANDARD_SPACING * 2,
  },
  immunizationLabel: {
    fontSize: RFValue(9),
    lineHeight: moderateScale(18),
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  statusWrapper: {
    height: moderateScale(22),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(11),
    borderRadius: moderateScale(30),
    marginBottom: moderateScale(4),
  },
  statusIndicator: {
    width: moderateScale(5),
    height: moderateScale(5),
    borderRadius: moderateScale(2.5),
    marginRight: moderateScale(5),
  },
  Status: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  lotText: {
    marginTop: moderateScale(2),
    fontSize: RFValue(7.5),
    color: Colors.textHighContrast,
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  lotNumber: {
    color: Colors.boysenberry,
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  gridWrapper: {
    borderRadius: STANDARD_BORDER_RADIUS * 2,
    borderWidth: STANDARD_BORDER_WIDTH * 0.5,
    borderColor: Colors.inputBorderColor,
    overflow: 'hidden',
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: STANDARD_SPACING * 1.6,
    paddingHorizontal: moderateScale(6),
  },
  gridTextContainer: {
    flex: 1,
    marginLeft: moderateScale(8),
    gap: moderateScale(1.5),
  },
  verticalDivider: {
    width: moderateScale(0.5),
    alignSelf: 'stretch',
    backgroundColor: Colors.inputBorderColor,
  },
  horizontalDivider: {
    height: moderateScale(0.5),
    backgroundColor: Colors.inputBorderColor,
  },
  label: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  value: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_MEDIUM,
    flexShrink: 1,
  },
});
