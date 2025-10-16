import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { LoginAPI } from '../../auth/auth.js';
import Button from '../../components/buttons/Button';
import CustomToast from '../../components/CustomToast/index.js';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Icons from '../../components/Icons/Icons';
import TextInput from '../../components/inputs/TextInput';
import Link from '../../components/links/Link';
import Colors from '../../constants/Colors';
import { loginUser } from '../../redux/slices/SessionUser';
import styles from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users);
  const [showToast, setShowToast] = useState(false);
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

    try {
      const response = await LoginAPI(formdata);
      console.log('response', response);

      if (response.status === 1) {
        dispatch(loginUser(response?.response));
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      } else {
        setShowToast(true);
        console.log('Login Failed:', response.message);
      }
    } catch (error) {
      console.log('response error', error);
    }
  };

  return (
    <CustomSafeAreaView
      statusBarBackgroundColor="transparent"
      barStyle="dark-content"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/images/logo1.png')}
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
                    placeholderTextColor={Colors.greyDark}
                    backgroundColor={Colors.inputBackgroundColor}
                    textInputValueColor={Colors.black}
                    leftIcon={
                      <Icons
                        name="home"
                        iconType="FontAwesome"
                        color={Colors.black}
                        size={scale(28)}
                      />
                    }
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    errors={touched.email && errors.email ? errors.email : ''}
                  />
                </View>

                <View
                  style={[styles.textInputWrapper, { marginTop: scale(10) }]}
                >
                  <TextInput
                    placeholder="Enter password"
                    placeholderTextColor={Colors.greyDark}
                    backgroundColor={Colors.inputBackgroundColor}
                    textInputValueColor={Colors.black}
                    leftIcon={
                      <Icons
                        name="lock"
                        iconType="FontAwesome"
                        color={Colors.black}
                        size={scale(28)}
                      />
                    }
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

                <View style={styles.changeLoginWrapper}>
                  <CustomText style={styles.changeText}>
                    You are trying to login as MD Steward.
                  </CustomText>
                  <Link
                    onPress={() => {}}
                    label="Click here to change"
                    labelColor={Colors.boysenberry}
                    underline
                    fontSize={scale(10)}
                  />
                </View>

                <View style={styles.buttonWrapper}>
                  <Button
                    label="Login"
                    labelColor={Colors.white}
                    backgroundColor={Colors.boysenberry}
                    onPress={handleSubmit} // ✅ Formik handles validation and submits
                  />
                </View>
              </View>
            )}
          </Formik>

          <CustomToast
            colorText={Colors?.white}
            colorIcon={Colors?.black}
            backgroundColor={Colors?.black}
            visible={showToast}
            message={'Invalid Email-id or Password'}
            onHide={() => setShowToast(false)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
};

export default Login;
