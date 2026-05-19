import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XL,
  FONT_SIZE_XS,
  MONTSERRAT_SEMIBOLD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_SEMIBOLD,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_LANGUAGE_FLAG_SIZE,
  STANDARD_LANGUAGE_RADIO_CHECKBOX_SIZE,
  STANDARD_LANGUAGE_RADIO_WRAPPER_HEIGHT,
  STANDARD_SPACING,
} from '../../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: STANDARD_SPACING * 3,
    paddingTop: STANDARD_SPACING * 1.5,
    paddingBottom: STANDARD_SPACING * 1.5,
    marginBottom: STANDARD_SPACING,
    backgroundColor: Colors.boysenberry,
  },
  headerContainer:{
    width: '85%',
    alignItems: 'center',
  },
  headerLabel: {
    alignItems: 'center',
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_SM,
  },
  searchbarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: STANDARD_SPACING,
    marginHorizontal: STANDARD_SPACING * 3,
    // borderWidth:1
  },
  searchbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: Colors.inputBorderColor,
    height: moderateScale(40),
    width: '100%',
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    paddingHorizontal: STANDARD_SPACING,
  },
  searchBar: {
    // borderWidth:1,
    width: SCREEN_WIDTH * 0.8,
    fontSize: RFValue(14),
    marginLeft: moderateScale(2),
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  clearSerachWrapper:{
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: STANDARD_SPACING * 1.5,
  },
  languageComponentWrapper: {
    marginBottom: STANDARD_SPACING * 1.5,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  languageComponentWrapperWithMarginTop: {
    marginTop: STANDARD_SPACING * 3,
  },
  noResultsWrapper: {
    height: SCREEN_HEIGHT * 0.78,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  option: {
    borderWidth: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.grey,
    height: moderateScale(50),
    justifyContent: 'center',
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  optionText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    height: moderateScale(45),
    borderWidth: STANDARD_BORDER_WIDTH,
    borderRadius: STANDARD_LANGUAGE_RADIO_WRAPPER_HEIGHT * 0.2,
  },
  flagImageAndLanguageLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageLabel: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  radioCheckBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: STANDARD_LANGUAGE_RADIO_CHECKBOX_SIZE * 1.2,
    aspectRatio: 1,
    borderRadius: STANDARD_LANGUAGE_RADIO_CHECKBOX_SIZE * 2,
  },
});
