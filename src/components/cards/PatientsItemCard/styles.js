import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
    FONT_SIZE_SM,
    FONT_SIZE_XS,
    FONT_SIZE_XXS,
    OPEN_SANS_BOLD,
    OPEN_SANS_MEDIUM,
    OPEN_SANS_SEMIBOLD,
    STANDARD_BORDER_WIDTH,
    STANDARD_SPACING
} from '../../../constants/Constants';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: Colors.inputBorderColor,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
  },
  // ───────────────── HEADER ─────────────────
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(8),
  },
  patientName: {
    flex: 1,
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_SM,
    color: Colors.textHighContrast,
    marginRight: moderateScale(10),
    textTransform: 'uppercase',
  },
  genderText: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
  divider: {
    height: moderateScale(0.5),
    backgroundColor: Colors.lightPurple,
    marginBottom: moderateScale(10),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: STANDARD_SPACING,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1.25,
  },
  infoText: {
    flex: 1,
    marginLeft: STANDARD_SPACING, 
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XXS,
    color: Colors.textHighContrast,
  },
  label: {
    marginLeft: STANDARD_SPACING * 2,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  button: {
    minHeight: moderateScale(40),
    marginTop: STANDARD_SPACING,
    borderRadius: moderateScale(6),
    backgroundColor: Colors.boysenberry,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XS,
  },
});