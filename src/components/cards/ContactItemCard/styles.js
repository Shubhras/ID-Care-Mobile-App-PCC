import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  OPEN_SANS_BOLD,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING
} from '../../../constants/Constants';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    minHeight: moderateScale(120),
    paddingVertical: STANDARD_SPACING * 2,
    borderBottomWidth: STANDARD_BORDER_WIDTH,
    borderBottomColor: Colors.inputBorderColor,
  },
  userIconWrapper: {
    width: moderateScale(55),
    height: moderateScale(55),
    marginTop: moderateScale(5),
    marginLeft: moderateScale(15),
    marginRight: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  itemDetailsWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingRight: moderateScale(15),
  },
  itemNameAndRelationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(8),
    // borderWidth: 1,
  },
  itemName: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: FONT_SIZE_XS,
  },
  itemRelationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(25),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(8),
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: Colors.darkPurple,
  },
  itemRelation: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XXS,
  },
  itemNumberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemNumber: {
    marginLeft: STANDARD_SPACING,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_MEDIUM,
  },
  itemRoleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemEmailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemEmail: {
    marginLeft: STANDARD_SPACING,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_MEDIUM,
  },
  itemRole: {
     marginLeft: STANDARD_SPACING,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_MEDIUM,
  },
});

export default styles;
