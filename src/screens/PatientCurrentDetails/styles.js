import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  OPEN_SANS_BOLD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  OPEN_SANS_SEMIBOLD,
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
  },
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  cardContainer: {
    height: hp('50%'),
    borderBottomLeftRadius: STANDARD_BORDER_RADIUS * 3,
    borderBottomRightRadius: STANDARD_BORDER_RADIUS * 3,
  },
  iconImage: {
    tintColor: Colors.boysenberry,
    width: scale(18),
    height: scale(20),
    resizeMode: 'contain',
  },
  iconImageHome: {
    tintColor: Colors.boysenberry,
    width: scale(20),
    height: scale(23),
    resizeMode: 'contain',
    marginLeft: scale(18),
  },
  statusView: {
    backgroundColor: Colors.bluishPurple,
    width: scale(24),
    height: scale(24),
    borderRadius: scale(5),
    marginLeft: scale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: Colors.white,
  },
  listContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingBottom: STANDARD_SPACING * 4,
  },
  rowWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.inputBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    columnGap: STANDARD_SPACING,
    marginVertical: scale(4),
  },
  row: {
    paddingTop: STANDARD_TEXT_INPUT_HEIGHT * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: STANDARD_SPACING,
  },
  titleText: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
  },
  valueText: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.boysenberry,
    width: '50%',
  },
  title: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
    width: '50%',
  },
  bottomWrapper: {
    flex: STANDARD_FLEX,
    padding: STANDARD_SPACING * 3,
  },
  textBottomTitle: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.buttonBackgroundColor,
    textAlign: 'center',
  },
  contentContainerStyle: {
    paddingBottom: STANDARD_SPACING * 2,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // allows items to move to next line
    justifyContent: 'space-between', // space between items in row
    paddingHorizontal: scale(25),
  },
  optionWrapper: {
    width: '40%',
    marginVertical: scale(5),
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: scale(5),
  },
  label: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.black,
  },
  editButton: {
    alignSelf: 'flex-end',
    marginTop: scale(8),
    backgroundColor: Colors.bluishPurple,
    alignItems: 'center',
    paddingHorizontal: STANDARD_SPACING * 3,
    paddingVertical: STANDARD_SPACING * 1.8,
    borderRadius: STANDARD_BORDER_RADIUS,
  },
  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: STANDARD_SPACING * 2,
  },
  additionalWrapper: {
    marginHorizontal: STANDARD_SPACING * 2,
  },
  newTtitle: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_LG,
    color: Colors.white,
    width: SCREEN_WIDTH * 0.32,
  },
  newTtitleValue: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
  },
  newTtitleValueWrapper: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.75,
    borderRadius: STANDARD_BORDER_RADIUS,
    justifyContent: 'center',
    paddingHorizontal: STANDARD_SPACING * 2,
    backgroundColor: Colors.white,
    width: '60%',
  },
  newTtitleSub: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_LG,
    color: Colors.white,
  },
  selectOptionInput: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS,
    backgroundColor: Colors.inputBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: STANDARD_SPACING * 2,
    columnGap: STANDARD_SPACING,
    marginVertical: scale(4),
  },
  mailButton: {
    height: STANDARD_TEXT_INPUT_HEIGHT * 0.9,
    borderRadius: STANDARD_BORDER_RADIUS * 2,
    backgroundColor: Colors.bluishPurple,
    marginVertical: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 3,
  },
  mailButtonText: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.white,
  },
  labelText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: scale(15),
    color: Colors.white,
  },
  textInputWrapper: {
    height: scale(40),
    alignSelf: 'center',
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
    borderRadius: STANDARD_BORDER_RADIUS,
  },
  counterButtonView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    columnGap: STANDARD_SPACING * 1,
  },
  counterButton: {
    height: scale(25),
    width: scale(25),
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.boysenberry,
  },
  titleHeader: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: scale(12),
  },
});
