import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  cardContainer: {
    height: hp('80%'),
    borderBottomLeftRadius: STANDARD_BORDER_RADIUS * 3,
    borderBottomRightRadius: STANDARD_BORDER_RADIUS * 3,
  },
  iconImage: {
    tintColor: Colors.boysenberry,
    width: scale(18),
    height: scale(20),
    resizeMode: 'contain',
  },
  iconImageLogout: {
    tintColor: Colors.boysenberry,
    width: scale(20),
    height: scale(23),
    resizeMode: 'contain',
    marginLeft: scale(18),
  },
  buttonWrapper: {
    flexDirection: 'row',
    rowGap: STANDARD_SPACING * 10,
  },
  notificatonDot: {
    position: 'absolute',
    zIndex: 1,
    height: scale(20),
    width: scale(20),
    backgroundColor: Colors.boysenberry,
    alignItems: 'center',
    borderRadius: scale(20),
    top: -11,
    right: -14.4,
  },
  notificatonText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    color: Colors.white,
  },
  mailText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    textAlign: 'center',
    color: Colors.textLowContrast,
  },

  logoWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    height: STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE * 1.5,
    width: SCREEN_WIDTH * 1,
    marginVertical: STANDARD_SPACING * 3,
  },
  logoImage: {
    height: '100%',
    width: '75%',
    resizeMode: 'contain',
  },
  listTitle: {
    // textAlign: 'center',
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
  },
  CareUnitButton: {
    // width: SCREEN_WIDTH * 0.9,
    height: scale(40),
    // alignSelf: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.inputBackgroundColor,
    marginTop: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SCREEN_WIDTH * 0.06,
  },
  careUnitButtonText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
    width: SCREEN_WIDTH * 0.8,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 3,
  },
  linkView: {
    // width: SCREEN_WIDTH * 0.9,
    marginHorizontal: SCREEN_WIDTH * 0.06,

    // alignSelf: 'center',
    alignItems: 'flex-end',
    paddingVertical: scale(10),
    borderBottomWidth: scale(1),
    borderColor: Colors.boysenberry,
    marginBottom: scale(8),
  },
  linkText: {
    textDecorationLine: 'underline',
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_SM,
    color: Colors.boysenberry,
  },
  textView: {
    // width:'90%',
    marginHorizontal: SCREEN_WIDTH * 0.06,
    // alignSelf: 'center',
    marginBottom: scale(5),
  },
  textInputWrapper: {
    // width: SCREEN_WIDTH * 0.9,
    marginHorizontal: SCREEN_WIDTH * 0.06,

    height: scale(40),
    // alignSelf: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.inputBackgroundColor,
    marginTop: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
  },
  button: {
    marginTop: scale(10),
    // width: SCREEN_WIDTH * 0.9,
    marginHorizontal: SCREEN_WIDTH * 0.06,
    // alignSelf: 'center'
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SCREEN_HEIGHT * 0.04,
    paddingHorizontal: SCREEN_WIDTH * 0.1,
  },
  textBottom: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_LG,
    color: Colors.buttonBackgroundColor,
  },
});
