// // Exporting
// export default memo(TextInput);
import { memo, useState } from 'react';
import { Pressable, TextInput as RNTextInput, View } from 'react-native';
import styles from './styles';
import Eyeclose from '../../../assets/icons/svg/Eyeclose.svg';
import EyeOpen from '../../../assets/icons/svg/EyeOpen.svg';
import Colors from '../../../constants/Colors';
import { CustomText } from '../../global/CustomComponents';
import { STANDARD_VECTOR_ICON_SIZE } from '../../../constants/Constants';

const TextInput = ({
  label,
  textContentType,
  labelColor,
  placeholder,
  backgroundColor,
  textInputValueColor,
  placeholderTextColor,
  leftIcon,
  countrycode,
  countrylabelColor,
  rightIcon,
  numberOfLines,
  value,
  styleInput,
  textInputWrapper,
  onChangeText,
  onBlur,
  keyboardType, // Pass secureTextEntry directly
  secureTextEntry,
  isshow,
  autoCapitalize,
  editable,
  errors,
  leftIconstyle,
  maxLength,
  multiline = false,
  errorsSuccess,
  marginTop,
  onSubmitEditing,
  autoFocus = false,
  onContentSizeChange,
  autoComplete,
  refText,
  returnKeyType = 'next',
  onFocus,
  borderWidth,
  borderColor,
  borderLeftWidth,
  borderLeftColor,
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <>
      {label && (
        <CustomText
          style={[
            styles.label,
            {
              color: labelColor,
              marginTop: marginTop,
              //  textAlign: language == 'SA' ? 'right' : 'left'
            },
          ]}
        >
          {label}
        </CustomText>
      )}
      <View
        style={[
          styles.textInputWrapper,
          textInputWrapper,
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || Colors.inputBorderColor,
            borderLeftWidth: borderLeftWidth || borderWidth || 0,
            borderLeftColor: borderLeftColor || borderLeftColor || Colors.inputBorderColor,
          },
        ]}
      >
        {leftIcon && (
          <View style={[styles.textInputIconWrapper, leftIconstyle]}>
            {leftIcon}
          </View>
        )}
        {countrycode && (
          <View style={styles.textCountryWrapper}>
            <CustomText
              style={[styles.Countrylabel, { color: countrylabelColor }]}
            >
              {countrycode}
            </CustomText>
          </View>
        )}

        <RNTextInput
          ref={refText}
          allowFontScaling={false}
          placeholder={placeholder}
          style={{
            ...{
              ...styles.textInput,
              ...{
                color: textInputValueColor,
              },
            },
            ...styleInput,
          }}
          autoFocus={autoFocus}
          textContentType={textContentType}
          autoComplete={autoComplete}
          placeholderTextColor={placeholderTextColor}
          value={value}
          keyboardType={keyboardType}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          onContentSizeChange={onContentSizeChange}
          onBlur={onBlur}
          selectionColor={Colors.primary}
          autoCapitalize={autoCapitalize}
          editable={editable}
          secureTextEntry={hidePassword}
          maxLength={maxLength}
          onFocus={onFocus}
          returnKeyType={returnKeyType}
          multiline={multiline}
          onSubmitEditing={onSubmitEditing}
        />
        {rightIcon && (
          <View style={styles.textInputIconWrapperRight}>{rightIcon}</View>
        )}
        {secureTextEntry && ( // Conditionally render the eye icons based on secureTextEntry
          <Pressable
            onPress={() => {
              // console.log('hidePassword', hidePassword);
              setHidePassword(!hidePassword);
            }}
          >
            <View style={styles.textInputIconWrapper}>
              {hidePassword ? (
                <Eyeclose
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              ) : (
                <EyeOpen
                  width={STANDARD_VECTOR_ICON_SIZE}
                  height={STANDARD_VECTOR_ICON_SIZE}
                />
              )}
            </View>
          </Pressable>
        )}
      </View>
      {(errors || errorsSuccess) && (
        <View style={styles.errorContainer}>
          {errors && (
            <CustomText style={[styles.errorText]}>{errors}</CustomText>
          )}
          {errorsSuccess && (
            <CustomText style={[styles.errorTextSucess]}>
              {errorsSuccess}
            </CustomText>
          )}
        </View>
      )}
    </>
  );
};

export default memo(TextInput);
