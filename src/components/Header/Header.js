import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import { OPEN_SANS_BOLD, SCREEN_WIDTH } from '../../constants/Constants';
import Icons from '../Icons/Icons';
import { CustomText } from '../global/CustomComponents';

const IconSize = 24;

const Header = ({
  style,
  menu,
  back,
  fontSize,
  title,
  right,
  rightIconType,
  rightBadge,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  rightComponent,
  headerBg,
  iconColor,
  iconColorHeart,
  titleAlight,
  optionalBadge,
  onRightTextPress,
  rightText,
  titleRight,
  rightHeartIcon,
  onRightPressHeart,
  rightIconTypeHeart,
  rightHeart,
  onPress,
  onRightLogout,
  rightLogout,
}) => {
  const navigation = useNavigation();
  const LeftView = () => (
    <View
      style={[
        styles.view,
        { width: rightText ? SCREEN_WIDTH * 0.18 : SCREEN_WIDTH * 0.1 },
      ]}
    >
      {menu && (
        <TouchableOpacity onPress={() => {}}>
          <Feather name="menu" size={IconSize} color={iconColor} />
        </TouchableOpacity>
      )}
      {back && (
        <TouchableOpacity
          style={{ width: SCREEN_WIDTH * 0.1 }}
          onPress={() => {
            navigation.goBack(), onPress?.();
          }}
        >
          {/* <BackIcon  width={scale(18)} height={scale(18)} fill={iconColor}/> */}
          <Icons
            iconType={'Ionicons'}
            name="arrow-back-outline"
            size={scale(25)}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
  const RightView = () =>
    rightComponent ? (
      rightComponent
    ) : (
      <View
        style={[
          styles.view,
          styles.rightView,
          {
            width: rightText ? SCREEN_WIDTH * 0.18 : SCREEN_WIDTH * 0.1,
            gap: scale(10),
          },
        ]}
      >
        {optionalBtn && (
          <>
            <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
              <Feather name={optionalBtn} size={IconSize} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
              <Feather name={optionalBtn} size={IconSize} color={iconColor} />
            </TouchableOpacity>
          </>
        )}
        {rightHeartIcon && (
          <TouchableOpacity onPress={onRightPressHeart}>
            <Icons
              iconType={rightIconTypeHeart}
              name={rightHeart}
              size={scale(23)}
              color={iconColorHeart}
            />
          </TouchableOpacity>
        )}
        {right && (
          <TouchableOpacity onPress={onRightPress}>{right}</TouchableOpacity>
        )}
        {rightLogout && (
          <TouchableOpacity onPress={onRightLogout}>
            {rightLogout}
          </TouchableOpacity>
        )}
        {rightText && (
          <TouchableOpacity onPress={onRightTextPress}>
            <CustomText
              style={[
                styles.titletext,
                {
                  color: iconColor,
                  textAlign: titleAlight,
                  fontSize: scale(14),
                },
              ]}
            >
              {titleRight}
            </CustomText>
          </TouchableOpacity>
        )}
      </View>
    );
  const TitleView = () => (
    <View
      style={[
        styles.titleView,
        {
          width: rightText ? '50%' : '60%',
        },
      ]}
    >
      <CustomText
        style={[
          styles.titletext,
          {
            color: iconColor,
            textAlign: titleAlight,
            fontSize: fontSize ? fontSize : scale(18),
          },
        ]}
      >
        {title}
      </CustomText>
    </View>
  );
  return (
    <View style={[styles.header, style, { backgroundColor: headerBg }]}>
      <LeftView />
      <TitleView />
      <RightView />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: scale(50),
    elevation: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.black,
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.1,
  },
  titleView: {
    // flex: 1,
    // maxWidth: scale(200),

    // alignSelf: 'center',
    alignItems: 'center',
    // textAlign: 'justify',
  },
  titletext: {
    fontSize: scale(18),
    fontFamily: OPEN_SANS_BOLD,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});
