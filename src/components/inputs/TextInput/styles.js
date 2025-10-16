
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import {
  FONT_SIZE_XS,
  OPEN_SANS_BOLD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  OPEN_SANS_SEMIBOLD,
  STANDARD_SPACING,
  STANDARD_TEXT_INPUT_HEIGHT,
} from '../../../constants/Constants';
import Colors from '../../../constants/Colors';

// Exporting style
export default StyleSheet.create({
  label: {
    marginBottom: STANDARD_SPACING,
    paddingHorizontal: STANDARD_SPACING * 0.5,
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  textInputWrapper: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: STANDARD_TEXT_INPUT_HEIGHT,
    borderColor: Colors.gray,
  },
  textInput: {
    textAlignVertical: 'center',
    flex: 1,
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    paddingLeft: STANDARD_SPACING * 1,
  },
  textInputIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    width: STANDARD_TEXT_INPUT_HEIGHT,
    height: STANDARD_TEXT_INPUT_HEIGHT,
  },
  textInputIconWrapperRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: STANDARD_TEXT_INPUT_HEIGHT * 0.5,
    height: STANDARD_TEXT_INPUT_HEIGHT,
  },
  textCountryWrapper: {
    right: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
    width: STANDARD_TEXT_INPUT_HEIGHT * 0.75,
    height: STANDARD_TEXT_INPUT_HEIGHT,
  },
  Countrylabel: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  textInputIconWrapperWithRightZero: {
    right: 0,
  },
  errorContainer: {
    // height: scale(18),
    paddingLeft: STANDARD_SPACING * 0.5,

    marginTop: scale(3),
  },
  errorText: {
    color: Colors.red,
    fontSize: scale(10),
    fontFamily: OPEN_SANS_REGULAR,
   },
  errorTextSucess: {
    color: Colors.red,
    fontSize: scale(10),
    fontFamily: OPEN_SANS_REGULAR,
   },
});
