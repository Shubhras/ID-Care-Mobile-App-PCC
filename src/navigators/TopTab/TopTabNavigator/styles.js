import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_XS,
    OPEN_SANS_MEDIUM,
    STANDARD_FLEX,
    STANDARD_SPACING
} from '../../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewWrapper: {
    flexGrow: STANDARD_FLEX,
    paddingBottom: STANDARD_SPACING * 3,
  },
  lable:{
    fontSize: FONT_SIZE_XS,
    fontFamily: OPEN_SANS_MEDIUM
  }
});
