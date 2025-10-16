import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  STANDARD_BUTTON_HEIGHT,
  OPEN_SANS_MEDIUM,
  FONT_SIZE_LG,
} from '../../../constants/Constants'

// Exporting style
export default StyleSheet.create({
  label: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_LG,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: STANDARD_BUTTON_HEIGHT,
    borderRadius: STANDARD_BUTTON_HEIGHT * 0.2,
    paddingHorizontal: scale(15),
  },
});
