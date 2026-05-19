import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {
  OPEN_SANS_BOLD,
  FONT_SIZE_XXS,
  STANDARD_BADGE_PILL_WIDTH,
  OPEN_SANS_SEMIBOLD,
  STANDARD_SPACING,
} from '../../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  badge: {
    width: 'auto',
    paddingHorizontal: STANDARD_SPACING * 2,
    // maxWidth: STANDARD_BADGE_PILL_WIDTH * 2,
    height: STANDARD_BADGE_PILL_WIDTH / 4,
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XXS,
  },
});
