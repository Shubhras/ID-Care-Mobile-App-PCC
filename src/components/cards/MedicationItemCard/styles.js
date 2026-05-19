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
    minHeight: moderateScale(150),
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
    padding: moderateScale(10),
  },
  medicationAndStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: STANDARD_SPACING * 2,
  },
  medicationAndCaterogyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  residentAndGenericContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: STANDARD_SPACING * 2,
  },
  residentLabel: {
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD,
    marginBottom: STANDARD_SPACING * 0.5,
  },
  descriptionLabel: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_MEDIUM,
  },
  genericLable: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_MEDIUM,
  },
  categoryWrapper: {
    alignSelf: 'flex-start',
  },
  statusWrapper: {
    height: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    borderRadius: moderateScale(30),
    marginBottom: STANDARD_SPACING * 4,
  },
  statusIndicator: {
    width: moderateScale(5),
    height: moderateScale(5),
    borderRadius: moderateScale(2.5),
    marginRight: moderateScale(6),
  },
  Status: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  directionsWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS,
    padding: STANDARD_SPACING * 1.5,
    backgroundColor: Colors.lightPurple,
  },
  directionsDetails: {
    flex: 1,
    marginLeft: STANDARD_SPACING * 2,
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
    paddingVertical: STANDARD_SPACING * 1.2,
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
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_SEMIBOLD,
    marginBottom: 2,
  },
  value: {
    fontSize: RFValue(8),
    fontFamily: OPEN_SANS_MEDIUM,
    flexShrink: 1,
  },
});
