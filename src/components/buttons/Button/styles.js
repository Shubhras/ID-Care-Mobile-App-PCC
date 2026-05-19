import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  FONT_SIZE_MD,
  OPEN_SANS_MEDIUM,
  STANDARD_BUTTON_HEIGHT
} from '../../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  label: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: STANDARD_BUTTON_HEIGHT,
    borderRadius: STANDARD_BUTTON_HEIGHT * 0.2,
    paddingHorizontal: moderateScale(15),
  },
  loadingWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});
