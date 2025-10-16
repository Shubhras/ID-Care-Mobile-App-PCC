import { StyleSheet } from 'react-native';
import { FONT_SIZE_XS, FONT_SIZE_XXS, OPEN_SANS_BOLD, OPEN_SANS_MEDIUM, OPEN_SANS_REGULAR, OPEN_SANS_SEMIBOLD, SCREEN_WIDTH, STANDARD_BORDER_WIDTH, STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE, STANDARD_FLEX, STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE, STANDARD_SPACING, STANDARD_TEXT_INPUT_HEIGHT } from '../../constants/Constants';
import { scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,

  },
  logoContainer: {
    alignItems: 'center',

  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE * 3.2,
    width: STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE * 3,   // ✅ Add width
  },
  logoImage: {
    height: '40%',
    width: '75%',
    resizeMode: 'contain',
  },
  loginContainer: {
    // alignItems: 'center',
    rowGap: STANDARD_SPACING * 2
  },
  textInputWrapper: {
    paddingLeft: scale(5),
    // width: wp('88%'),
    marginHorizontal:SCREEN_WIDTH*0.06,
    backgroundColor: Colors.boysenberry,
    borderTopLeftRadius: STANDARD_SPACING * 1,
    borderBottomLeftRadius: STANDARD_SPACING * 1,
    height: STANDARD_TEXT_INPUT_HEIGHT,
    borderBottomWidth: scale(1.4),
    borderColor: Colors.greyLightest,
  },
  labelText: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
    color: Colors.boysenberry
  },
  labelTextWrapper: {
    // width: wp('88%'),
    marginHorizontal:SCREEN_WIDTH*0.06,

    // alignSelf: 'center',
    paddingBottom: STANDARD_SPACING * 1.5
  },
  linkWrapper: {
    // width: wp('88%'),
    marginHorizontal:SCREEN_WIDTH*0.06,
    alignItems: 'flex-end'
  },
  changeLoginWrapper: {
    // width: wp('88%'),
    marginHorizontal:SCREEN_WIDTH*0.06,
    flexDirection: 'row',
    columnGap: scale(4)
  },
  changeText: {
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD
  },
  buttonWrapper: {
    marginTop: scale(5),
    marginHorizontal:SCREEN_WIDTH*0.06,
    // width: wp('88%'),
  }
});