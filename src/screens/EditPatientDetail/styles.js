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
    justifyContent: 'space-between',
  },
  rowWrapperOption: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS,
    paddingHorizontal: STANDARD_SPACING * 2,
    flexDirection: 'row',
  },
  optionRow: {
    flexDirection: 'row',
    columnGap: scale(5),
    width: SCREEN_HEIGHT * 0.1,
  },
  rowIdWrapper: {
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
    color: Colors.textLowContrast,
    width: '90%',
  },
  valueTextDot: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
    width: '30%',
  },
  numberDotText: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
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
    backgroundColor: Colors.boysenberry,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    columnGap: STANDARD_SPACING,
  },
  formButtonWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.boysenberry,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    marginVertical: STANDARD_SPACING * 2,
  },
  rowStatusWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    backgroundColor: Colors.inputBackgroundColor,
    flexDirection: 'row',
  },
  statusButton: {
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
    borderBottomLeftRadius: STANDARD_BORDER_RADIUS,
    borderTopLeftRadius: STANDARD_BORDER_RADIUS,
  },
  statusButtonRight: {
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
    borderBottomRightRadius: STANDARD_BORDER_RADIUS,
    borderTopRightRadius: STANDARD_BORDER_RADIUS,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 3,
  },

  counterButtonView: {
    flexDirection: 'row',
    columnGap: STANDARD_SPACING * 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '40%',
  },
  counterButton: {
    height: scale(25),
    width: scale(25),
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.boysenberry,
  },
  rowStatusWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    flexDirection: 'row',
  },
});
