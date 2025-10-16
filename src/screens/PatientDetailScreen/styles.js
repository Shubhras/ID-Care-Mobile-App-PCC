import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_MD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_FLEX,
  STANDARD_SPACING,
  STANDARD_TEXT_INPUT_HEIGHT,
} from '../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainWrapper: {
    flex: STANDARD_FLEX,
    backgroundColor: Colors.white,
  },
  iconImageHome: {
    tintColor: Colors.boysenberry,
    width: scale(20),
    height: scale(23),
    resizeMode: 'contain',
    marginLeft: scale(18),
  },
  editButtonWrapper: {
    marginHorizontal: SCREEN_WIDTH * 0.04,
    alignItems: 'flex-end',
    marginTop: scale(5),
  },

  scrollView: {
    flex: STANDARD_FLEX,
  },
  listContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: STANDARD_SPACING * 4,
    paddingVertical: SCREEN_HEIGHT * 0.03,
  },
  rowWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.inputBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    columnGap: STANDARD_SPACING,
  },
  titleText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
  },
  valueText: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: Colors.boysenberry,
  },
  hedingWrapper: {
    paddingHorizontal: STANDARD_SPACING,
    marginTop: STANDARD_SPACING * 3,
  },
  hedingText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
  },
  buttonWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.bluishPurple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    columnGap: STANDARD_SPACING,
  },
  rowStatusWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    flexDirection: 'row',
  },
  statusButton: {
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
    borderTopLeftRadius: STANDARD_BORDER_RADIUS,
    borderBottomLeftRadius: STANDARD_BORDER_RADIUS,
  },
  statusButtonRight: {
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
    borderTopRightRadius: STANDARD_BORDER_RADIUS,
    borderBottomRightRadius: STANDARD_BORDER_RADIUS,
  },
});
