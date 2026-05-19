import { StyleSheet } from 'react-native';
import { STANDARD_FLEX, STANDARD_SPACING } from '../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewWrapper: {
    flexGrow: STANDARD_FLEX,
    paddingBottom: STANDARD_SPACING * 3,
  },
  listViewItemCardComponentWrapper: {
    marginBottom: STANDARD_SPACING * 3,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  listViewItemCardComponentWrapperWithMarginTop: {
    marginTop: STANDARD_SPACING * 3,
  },
});
