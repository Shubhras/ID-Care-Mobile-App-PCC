import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_MD,
  MONTSERRAT_SEMIBOLD,
  OPEN_SANS_MEDIUM,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  searchbarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: STANDARD_SPACING,
    marginHorizontal: STANDARD_SPACING * 2,
    // borderWidth:1
  },
  searchbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: '#ccc',
    height: scale(40),
    width: '75%',
    borderRadius: STANDARD_BORDER_RADIUS,
    paddingHorizontal: STANDARD_SPACING,
  },
  searchBar: {
    width: SCREEN_WIDTH * 0.74,
    fontSize: scale(14),
    marginLeft: scale(2),
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  languageComponentWrapper: {
    marginBottom: STANDARD_SPACING * 3,
    marginHorizontal: STANDARD_SPACING * 3,
  },
  languageComponentWrapperWithMarginTop: {
    marginTop: STANDARD_SPACING * 3,
  },
  noResultsWrapper: {
    height: SCREEN_HEIGHT * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: scale(16),
    fontFamily: MONTSERRAT_SEMIBOLD,
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    height: scale(50),
    justifyContent: 'center',
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  optionText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
  },
});
