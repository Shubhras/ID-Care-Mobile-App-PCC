import { StyleSheet } from 'react-native';
import { FONT_SIZE_LG, FONT_SIZE_MD, FONT_SIZE_SM, FONT_SIZE_XL, FONT_SIZE_XS, FONT_SIZE_XXS, OPEN_SANS_BOLD, OPEN_SANS_MEDIUM, OPEN_SANS_REGULAR, OPEN_SANS_SEMIBOLD, SCREEN_HEIGHT, SCREEN_WIDTH, STANDARD_BORDER_RADIUS, STANDARD_BORDER_WIDTH, STANDARD_CARD_MIN_HEIGHT, STANDARD_CATEGORY_IMAGE_WRAPPER_SIZE, STANDARD_FLEX, STANDARD_PRODUCT_IMAGE_WRAPPER_SIZE, STANDARD_SPACING, STANDARD_TEXT_INPUT_HEIGHT } from '../../constants/Constants';
import { scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';

// Exporting style
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    mainWrapper: {
        flex: STANDARD_FLEX,
        backgroundColor: Colors.white
    },
    cardContainer: {
        height: hp('80%'),
        borderBottomLeftRadius: STANDARD_BORDER_RADIUS * 3,
        borderBottomRightRadius: STANDARD_BORDER_RADIUS * 3,
    },
    iconImage: {
        tintColor: Colors.boysenberry,
        width: scale(18),
        height: scale(20),
        resizeMode: 'contain',
    },
    iconImageLogout: {
        width: scale(20),
        height: scale(23),
        resizeMode: 'contain',
        marginLeft: scale(18)
    },
    headerWrapper: {
        backgroundColor: Colors.boysenberry,
        height: SCREEN_HEIGHT * 0.10,
        paddingTop: SCREEN_HEIGHT * 0.03,
        borderBottomRightRadius: scale(18),
        borderBottomLeftRadius: scale(18)
    },
    notificationCard: {
        backgroundColor: Colors.grey,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
        minHeight: STANDARD_CARD_MIN_HEIGHT * 0.6,
        justifyContent: 'center',
        rowGap: STANDARD_SPACING * 1.5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    idText: {
        fontFamily: OPEN_SANS_MEDIUM,
        fontSize: FONT_SIZE_XS,
        color: Colors.black
    },
    textReview: {
        fontFamily: OPEN_SANS_SEMIBOLD,
        fontSize: FONT_SIZE_SM,
        textDecorationLine: 'underline',
        color: Colors.boysenberry
    },
    statusText: {
        fontFamily: OPEN_SANS_MEDIUM,
        fontSize: FONT_SIZE_MD,
        color: Colors.black,
        width:'60%',
     },
    closeButton: {
        height: scale(20),
        width: scale(20),
        borderWidth: scale(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        borderColor: Colors.boysenberry
    },
    contentContainerStyle:{
        rowGap:scale(2),
        paddingVertical:STANDARD_SPACING
    }

});