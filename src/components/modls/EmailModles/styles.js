import { StyleSheet } from 'react-native';
import {
  FONT_SIZE_MD,
  OPEN_SANS_MEDIUM,
  SCREEN_WIDTH,
  STANDARD_BORDER_RADIUS,
  STANDARD_CARD_MIN_HEIGHT,
  STANDARD_FLEX,
  STANDARD_SPACING,
} from '../../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
    justifyContent: 'center',
  },
  card: {
    height: STANDARD_CARD_MIN_HEIGHT * 1.3,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    borderRadius: STANDARD_BORDER_RADIUS * 2,
    padding: STANDARD_SPACING,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Android shadow
    elevation: 5,
    backgroundColor: 'white', // required for shadow to show properly
  },

  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: STANDARD_SPACING,
    marginHorizontal: STANDARD_SPACING * 2,
  },
  textInputWrappe: {
    marginHorizontal: SCREEN_WIDTH * 0.05,
    borderRadius: STANDARD_BORDER_RADIUS,
    marginTop: STANDARD_SPACING * 2,
  },
  labelText: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_MD,
  },
});
