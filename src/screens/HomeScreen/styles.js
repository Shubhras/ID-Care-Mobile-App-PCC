import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_SIZE_XXS,
  OPEN_SANS_MEDIUM,
  OPEN_SANS_REGULAR,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_RADIUS,
  STANDARD_BORDER_WIDTH,
  STANDARD_FLEX,
  STANDARD_SPACING
} from '../../constants/Constants';

// Exporting style
export default StyleSheet.create({
  mainWrapper: {
    flex: STANDARD_FLEX,
  },
  scrollViewWrapper: {
    flexGrow: STANDARD_FLEX,
    paddingBottom: STANDARD_SPACING * 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: STANDARD_SPACING * 3,
  },
  welcome: {
    fontSize: FONT_SIZE_SM,
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.textHighContrast,
  },
  user: {
    fontSize: RFValue(16),
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.boysenberry,
    textTransform: 'capitalize'
  },
  email: {
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_REGULAR,
    color: Colors.textLowContrast,
    marginTop: STANDARD_SPACING * 0.5,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: STANDARD_SPACING * 2,
  },
  hero: {
    flexDirection: 'row',
    paddingHorizontal: STANDARD_SPACING * 3,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: FONT_SIZE_SM,
    fontFamily: OPEN_SANS_MEDIUM,
    color: Colors.textHighContrast,
  },
  heroHighlight: {
    fontSize: FONT_SIZE_SM,
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.boysenberry,
  },
  heroSub: {
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_REGULAR,
    color: Colors.textLowContrast,
    marginTop: STANDARD_SPACING * 0.5,
  },
  heroImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(200),
  },
  heroImage: {
    width: moderateScale(200),
    height: moderateScale(120),
  },
  card: {
    minHeight: moderateScale(120),
    backgroundColor: Colors.white,
    margin: STANDARD_SPACING * 3,
    padding: STANDARD_SPACING * 3,
    borderRadius: STANDARD_BORDER_RADIUS * 2,
    shadowColor: '#000000',
    shadowOffset: { width: moderateScale(0), height: moderateScale(0) },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(5),
    elevation: moderateScale(7.5),
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: STANDARD_SPACING * 4,
  },
  CardDetailsWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginLeft: STANDARD_SPACING * 3,
  },
  cardTitle: {
    fontSize: FONT_SIZE_XS,
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.textHighContrast,
  },
  cardDesc: {
    flexShrink: 1,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_REGULAR,
    color: Colors.textLowContrast,
    marginTop: 4,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    minHeight: moderateScale(40),
    borderWidth: STANDARD_BORDER_WIDTH * 1.2,
    borderColor: Colors.boysenberry,
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    paddingVertical: STANDARD_SPACING * 1.5,
    paddingHorizontal: STANDARD_SPACING * 2.5,
    // marginBottom: STANDARD_SPACING
  },
  dropdownText: {
    fontSize: FONT_SIZE_XS,
    fontFamily: OPEN_SANS_SEMIBOLD,
    color: Colors.textHighContrast,
  },
  patientsListButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: moderateScale(35),
    paddingHorizontal: moderateScale(15),
    gap: STANDARD_SPACING,
    borderWidth: STANDARD_BORDER_WIDTH * 1.2,
    borderColor: Colors.darkPurple,
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    backgroundColor: Colors.lightPurple + '60',
  },
  patientsListButtonLable: {
    color: Colors.boysenberry,
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: FONT_SIZE_XXS,
  },
  horizontalDividerComponentWrapper: {
    flex: 1,
    marginVertical: STANDARD_SPACING * 3,
  },
   searchCardWrapper: {
    minHeight: moderateScale(150),
    backgroundColor: Colors.white,
    marginHorizontal: STANDARD_SPACING * 3,
    padding: STANDARD_SPACING * 3,
    borderRadius: STANDARD_BORDER_RADIUS * 2,
    shadowColor: '#000000',
    shadowOffset: { width: moderateScale(0), height: moderateScale(0) },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(5),
    elevation: moderateScale(7.5),
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(40),
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    marginBottom: STANDARD_SPACING * 3,
  },
  textInput: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_XS,
    color: Colors.textHighContrast,
  },
  searchTextInputIconStyl:{
    width: moderateScale(30),
    paddingLeft: STANDARD_SPACING,
  },
  searchButton: {
    height: moderateScale(40),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    paddingHorizontal: moderateScale(15),
  },
  searchButtonLable: {
    fontFamily: OPEN_SANS_MEDIUM,
    fontSize: FONT_SIZE_SM,
  },
  registerWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: STANDARD_SPACING * 3,
    backgroundColor: Colors.boysenberry,
    borderRadius: STANDARD_BORDER_RADIUS * 1.5,
    padding: STANDARD_SPACING * 2,
  },
  registerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIconWrapper:{
    position: 'absolute',
    padding: STANDARD_SPACING * 0.05,
    marginTop: STANDARD_SPACING * 3, 
    marginLeft: STANDARD_SPACING * 4.8,
    borderRadius: STANDARD_BORDER_RADIUS * 3,
    borderWidth: STANDARD_BORDER_WIDTH,
    borderColor: Colors.white
  },
  registerDetailsWrapper:{
    flex: 1,
    justifyContent: 'space-evenly',
    marginLeft: STANDARD_SPACING * 3,
    marginRight: STANDARD_SPACING * 3,
  },
  registerTitle: {
    color: Colors.white,
    fontSize: FONT_SIZE_XS,
    fontFamily: OPEN_SANS_SEMIBOLD,
  },
  registerDesc: {
    color: Colors.white,
    fontSize: FONT_SIZE_XXS,
    fontFamily: OPEN_SANS_REGULAR,
  },
});
