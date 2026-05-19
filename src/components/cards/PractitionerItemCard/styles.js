import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_XXS,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
} from '../../../constants/Constants';

// Exporting style
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
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1.5,
  },
  itemDetailsWrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: moderateScale(8),
  },
  allergyAndStatusWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: STANDARD_SPACING * 2,
  },
  allergyAndCaterogyWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    marginLeft: STANDARD_SPACING * 1.8,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: RFValue(9),
    lineHeight: moderateScale(18),
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  itemEmail: {
    fontSize: RFValue(7.8),
    fontFamily: OPEN_SANS_MEDIUM,
  },
  itemPhone: {
    fontSize: RFValue(7.5),
    fontFamily: OPEN_SANS_MEDIUM,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: moderateScale(4),
  },
  genderWrapper: {
    height: moderateScale(40),
    width: moderateScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(40 / 2),
    // gap: moderateScale(2),
  },
  gender: {
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  directionsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS,
    paddingVertical: STANDARD_SPACING,
    paddingHorizontal: STANDARD_SPACING * 1.5,
    backgroundColor: Colors.lightPurple,
  },
  directionsDetails: {
    flex: 1,
    marginLeft: STANDARD_SPACING * 1.5,
    marginRight: STANDARD_SPACING * 3,
  },
  itemLableAndValueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: STANDARD_BORDER_RADIUS,
    borderWidth: STANDARD_BORDER_WIDTH * 0.5,
    borderColor: Colors.inputBorderColor,
    overflow: 'hidden',
  },
  itemIconAndValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: STANDARD_SPACING,
    paddingHorizontal: STANDARD_SPACING,
    // borderWidth: 1,
  },
  verticalDivider: {
    width: STANDARD_BORDER_WIDTH * 0.5,
    alignSelf: 'stretch',
    backgroundColor: Colors.inputBorderColor,
  },
  itemLableAndValueContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: STANDARD_SPACING * 1.2,
    paddingRight: STANDARD_SPACING * 0.5,
  },
  label: {
    fontSize: RFValue(7.8),
    fontFamily: OPEN_SANS_SEMIBOLD,
    marginBottom: 2,
  },
  value: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_MEDIUM,
    flexShrink: 1,
  },
});
