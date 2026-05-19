import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  OPEN_SANS_BOLD,
  OPEN_SANS_SEMIBOLD,
  SCREEN_WIDTH,
  STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_TEXT_INPUT_HEIGHT,
} from '../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewWrapper:{
    flexGrow: STANDARD_FLEX,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(160),
    marginTop: moderateScale(50),
    marginBottom: moderateScale(100),
  },
  logoImage: {
    flex: 1,
    height: null,
    width: null,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  loginContainer: {
    // alignItems: 'center',
    rowGap: STANDARD_SPACING * 2,
  },
  textInputWrapper: {
    marginHorizontal: SCREEN_WIDTH * 0.06,
    // backgroundColor: Colors.boysenberry,
    // borderRadius: STANDARD_TEXT_INPUT_HEIGHT * 0.2,
    // borderTopLeftRadius: STANDARD_SPACING * 1,
    // borderBottomLeftRadius: STANDARD_SPACING * 1,
    // height: STANDARD_TEXT_INPUT_HEIGHT,
    // borderWidth: moderateScale(1.4),
    // borderColor: Colors.error,
  },
  textInput:{
    overflow: 'hidden',
    borderRadius: STANDARD_TEXT_INPUT_HEIGHT * 0.15,
  },
    leftIconStyle: {
    width: moderateScale(30),
    paddingLeft: STANDARD_SPACING,
  },
  labelText: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
    color: Colors.boysenberry,
  },
  labelTextWrapper: {
    // width: wp('88%'),
    marginHorizontal: SCREEN_WIDTH * 0.06,
    // alignSelf: 'center',
    paddingBottom: STANDARD_SPACING * 1.5,
  },
  linkWrapper: {
    // width: wp('88%'),
    marginHorizontal: SCREEN_WIDTH * 0.06,
    alignItems: 'flex-end',
  },
  changeLoginWrapper: {
    // width: wp('88%'),
    marginHorizontal: SCREEN_WIDTH * 0.06,
    flexDirection: 'row',
    columnGap: moderateScale(4),
  },
  changeText: {
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  buttonWrapper: {
    marginTop: moderateScale(5),
    marginHorizontal: SCREEN_WIDTH * 0.06,
    // width: wp('88%'),
  },
});
