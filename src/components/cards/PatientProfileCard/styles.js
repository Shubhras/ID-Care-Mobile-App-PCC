import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_MD,
  FONT_SIZE_XXS,
  OPEN_SANS_BOLD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
} from '../../../constants/Constants';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    minHeight: 'auto',
    padding: STANDARD_SPACING * 3,
    borderRadius: STANDARD_BORDER_RADIUS * 2.8,
    backgroundColor: Colors.white,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: '#E7E7E7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  itemDetailsWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    marginRight: moderateScale(14),
  },
  avatar: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: STANDARD_SPACING,
  },
  nameText: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_MD,
    color: Colors.textHighContrast,
    maxWidth: '45%',
  },
  nameSuffixText: {
    marginLeft: STANDARD_SPACING * 0.5,
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
    color: Colors.textHighContrast,
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: STANDARD_SPACING,
    flexWrap: 'wrap',
  },
  label: {
    marginLeft: STANDARD_SPACING,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.textHighContrast,
  },
  statusText: {
    marginLeft: STANDARD_SPACING * 0.5,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.boysenberry,
    flexShrink: 1,
  },
  infoInlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  genderDobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  inlineText: {
    marginLeft: STANDARD_SPACING * 0.5,
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_XXS,
    color: Colors.textLowContrast,
    flexShrink: 1,
  },
  verticalDivider: {
    color: Colors.textLowContrast,
    marginHorizontal: STANDARD_SPACING,
  },
  divider: {
    height: STANDARD_BORDER_WIDTH * 0.5,
    backgroundColor: Colors.textLowContrast,
    marginTop: STANDARD_SPACING * 2.5,
    marginBottom: STANDARD_SPACING * 1.5,
  },
  bottomContainer: {
    gap: STANDARD_SPACING * 1.8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap',
  },
  infoText: {
    fontFamily: OPEN_SANS_REGULAR,
    fontSize: FONT_SIZE_XXS,
    color: Colors.textLowContrast,
    marginLeft: STANDARD_SPACING * 0.5,
    flexShrink: 1,
  },
});