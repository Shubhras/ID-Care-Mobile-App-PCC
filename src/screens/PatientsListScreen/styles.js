import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_MD,
  OPEN_SANS_BOLD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
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
    backgroundColor: Colors.white,
  },
  iconImageHome: {
    width: scale(20),
    height: scale(23),
    resizeMode: 'contain',
    marginLeft: scale(18),
  },
  headerWrapper: {
    backgroundColor: Colors.boysenberry,
    height: SCREEN_HEIGHT * 0.16,
    borderBottomRightRadius: scale(18),
    borderBottomLeftRadius: scale(18),
  },
  textInputWrapper: {
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
    bottom: -40, // Positioned to overlap the main content view
  },
  textInput: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
  },

  // --- New Styles for the Patient List ---
  listContainer: {
    paddingTop: scale(25),
    paddingHorizontal: STANDARD_SPACING * 2,
  },
  flatListContent: {
    paddingBottom: STANDARD_SPACING * 20,
    // backgroundColor: 'red',
  },
  // Table Header Row Style
  tableHeaderRow: {
    flexDirection: 'row',
    padding: SCREEN_WIDTH * 0.05,
    marginBottom: STANDARD_SPACING,
    justifyContent: 'space-between',
  },
  headerIdText: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.black,
    width: SCREEN_WIDTH * 0.26,
  },
  headerDiagnosisText: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.black,
    width: SCREEN_WIDTH * 0.4,
  },
  headerrowActionText: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.black,
    width: SCREEN_WIDTH * 0.2,
  },

  // Patient Data Row Style
  patientRow: {
    flexDirection: 'row',
    paddingVertical: STANDARD_SPACING * 0.75,
    alignItems: 'center',
    marginBottom: STANDARD_SPACING * 2,
    justifyContent: 'space-between',
  },
  rowIdText: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
    width: SCREEN_WIDTH * 0.3,
    padding: STANDARD_SPACING * 2.2,
  },
  rowDiagnosisText: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_MD,
    color: Colors.textLowContrast,
    paddingRight: STANDARD_SPACING,
    width: SCREEN_WIDTH * 0.4,
  },
  rowActionText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.boysenberry,
    textDecorationLine: 'underline',
    width: SCREEN_WIDTH * 0.2,
  },
});
