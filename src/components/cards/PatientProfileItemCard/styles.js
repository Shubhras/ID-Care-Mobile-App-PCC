import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import {
  FONT_SIZE_XXS,
  OPEN_SANS_REGULAR,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
} from '../../../constants/Constants';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(12),
    borderBottomColor: Colors.inputBorderColor,
  },
  imageAndLabelWrapper: {
    width: '52%',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  image: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  label: {
    paddingLeft: moderateScale(10),
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XXS,
    flexShrink: 1,
  },
  valueWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  value: {
    flexWrap: 'wrap',
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_REGULAR,
    // lineHeight: moderateScale(20),
  },
});

export default styles;
