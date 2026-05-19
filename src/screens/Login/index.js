import { Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { LoginAPI } from '../../auth/auth.js';
import { showToast } from '../../components/alerts/Toast/ToastManager';
import Button from '../../components/buttons/Button';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Icons from '../../components/Icons/Icons';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import Colors from '../../constants/Colors';
import { loginUser } from '../../redux/slices/SessionUser';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import Message from '../../../src/assets/icons/svg/Message.svg';
import Lock from '../../../src/assets/icons/svg/Lock.svg';
import { isTablet, STANDARD_VECTOR_ICON_SIZE } from '../../constants/Constants.js';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users);
  const [loading, setLoading] = useState(false);

  console.log('user', user);

  const loginUserButton = async values => {
    let formdata = new FormData();
    formdata.append('email', values.email);
    formdata.append('password', values.password);
    formdata.append('signup_type', 'APP');
    formdata.append(
      'device_token',
      '23E1CBEF7AB5DD39FA0029FAB64E7FE6D2CD6A532EC1FA78096A8D3F27A94FDA',
    );
    formdata.append('device_id', 'E7E5C2B6-C411-45B5-8D1F-383B59FD88E9');
    formdata.append('device_type', 'ANDROID');
    setLoading(true);
    LoginAPI(formdata)
      .then(response => {
        console.log('response', response);
        if (response.status === 1) {
          setLoading(false);
          dispatch(loginUser(response?.response));
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          });
        } else {
          setLoading(false);
          showToast({
            text: response?.message || 'Login failed. Please try again.',
            duration: 2000,
            type: 'error',
          });
          console.log('Login Failed:', response?.message);
        }
      })
      .catch(error => {
        setLoading(false);
        showToast({
          text: 'An error occurred while processing your request. Please try again later.',
          duration: 2000,
          type: 'error',
        });
        console.log('response error', error);
      });
  };

  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    AvoidSoftInput.setEnabled(true);
    AvoidSoftInput.setAvoidOffset(isTablet ? 150 : 100);
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setDefaultAppSoftInputMode();
      AvoidSoftInput.setAvoidOffset(0); // Default value
    };
  }, []);

  useFocusEffect(onFocusEffect);

  return (
    <CustomSafeAreaView
      statusBarBackgroundColor={Colors.white}
      barStyle="dark-content"
      edges={['top', 'bottom', 'left', 'right']}
    >
      <ScrollView
        bounces={false}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewWrapper}
        style={styles.mainWrapper}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logoImage}
              source={require('../../assets/images/logo.png')}
            />
          </View>
        </View>

        <View style={styles.labelTextWrapper}>
          <CustomText style={styles.labelText}>Login To Continue</CustomText>
        </View>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={loginUserButton}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.loginContainer}>
              <View style={styles.textInputWrapper}>
                <TextInput
                  placeholder="Enter email"
                  placeholderTextColor={Colors.textLowContrast}
                  backgroundColor={Colors.white}
                  textInputValueColor={Colors.textHighContrast}
                  textInputWrapper={styles.textInput}
                  leftIcon={
                    <Message
                      width={STANDARD_VECTOR_ICON_SIZE}
                      height={STANDARD_VECTOR_ICON_SIZE}
                    />
                  }
                  leftIconstyle={styles.leftIconStyle}
                  borderWidth={moderateScale(0.5)}
                  borderColor={Colors.boysenberry}
                  borderLeftWidth={moderateScale(5)}
                  borderLeftColor={Colors.boysenberry}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  errors={touched.email && errors.email ? errors.email : ''}
                />
              </View>

              <View
                style={[
                  styles.textInputWrapper,
                  { marginTop: moderateScale(10) },
                ]}
              >
                <TextInput
                  placeholder="Enter password"
                  placeholderTextColor={Colors.textLowContrast}
                  backgroundColor={Colors.white}
                  textInputValueColor={Colors.textHighContrast}
                  textInputWrapper={styles.textInput}
                  leftIconstyle={styles.leftIconStyle}
                  leftIcon={
                    <Lock
                      width={STANDARD_VECTOR_ICON_SIZE}
                      height={STANDARD_VECTOR_ICON_SIZE}
                    />
                  }
                  borderWidth={moderateScale(0.5)}
                  borderColor={Colors.boysenberry}
                  borderLeftWidth={moderateScale(5)}
                   borderLeftColor={Colors.boysenberry}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  errors={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
              </View>

              <View style={styles.linkWrapper}>
                <Link
                  onPress={() => {}}
                  label="Forgot Password?"
                  labelColor={Colors.boysenberry}
                  underline
                />
              </View>

              <View style={styles.buttonWrapper}>
                <Button
                  isLoading={loading}
                  label="Login"
                  labelColor={Colors.white}
                  backgroundColor={Colors.boysenberry}
                  onPress={handleSubmit} // ✅ Formik handles validation and submits
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default Login;
