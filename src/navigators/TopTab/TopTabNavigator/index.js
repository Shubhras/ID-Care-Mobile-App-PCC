// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import AllergyIcon from '../../../assets/icons/svg/Allergy.svg';
// import InjectionIcon from '../../../assets/icons/svg/Injection.svg';
// import MedicationIcon from '../../../assets/icons/svg/Medication.svg';
// import MoreIcon from '../../../assets/icons/svg/More.svg';
// import NutritionIcon from '../../../assets/icons/svg/Nutrition.svg';
// import Colors from '../../../constants/Colors';
// import {
//   FONT_SIZE_XXS,
//   OPEN_SANS_SEMIBOLD,
//   STANDARD_SPACING,
//   STANDARD_VECTOR_ICON_SIZE,
// } from '../../../constants/Constants';
// import AllergyScreen from '../../../screens/AllergyScreen';
// import ImmunizationScreen from '../../../screens/ImmunizationScreen';
// import MedicationScreen from '../../../screens/MedicationScreen';
// import PractitionersScreen from '../../../screens/PractitionersScreen';
// import MedicationLog from '../../../screens/MedicationLog';
// import NutritionScreen from '../../../screens/NutritionScreen';
// import CustomSafeAreaView from '../../../components/global/CustomSafeAreaView';

// const Tab = createMaterialTopTabNavigator();

// const TopTabNavigator = () => {
//   return (
//     <CustomSafeAreaView>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarScrollEnabled: true,

//           tabBarStyle: {
//             backgroundColor: Colors.white,
//             // elevation: 0,
//             // shadowOpacity: 0,
//             // borderRadius: 12,
//             // borderWidth: 1,
//             // borderColor: '#E9E9EE',
//           },

//           // tabBarIndicatorStyle: {
//           //   backgroundColor: Colors.boysenberry,
//           //   // height: 3,
//           //   // borderRadius: 10,
//           // },

//           tabBarItemStyle: {
//             width: 'auto',
//             paddingHorizontal: STANDARD_SPACING,
//             justifyContent: 'center',
//             alignItems: 'center',
//             // borderWidth: 1,
//           },

//           tabBarLabelStyle: {
//             fontSize: FONT_SIZE_XXS,
//             fontFamily: OPEN_SANS_SEMIBOLD,
//             textTransform: 'none',
//             // marginTop: 5,
//           },
//           tabBarAllowFontScaling: false,
//           tabBarBounces: false,
//           tabBarAndroidRipple: false,
//           animationEnabled: true,
//           tabBarActiveTintColor: Colors.boysenberry,
//           tabBarInactiveTintColor: Colors.textLowContrast,
//           tabBarPressColor: 'transparent',
//         }}
//       >
//         <Tab.Screen
//           name="Allergies"
//           component={AllergyScreen}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <AllergyIcon
//                 width={STANDARD_VECTOR_ICON_SIZE}
//                 height={STANDARD_VECTOR_ICON_SIZE}
//                 fill={color}
//               />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Medications"
//           component={MedicationScreen}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <MedicationIcon
//                 width={STANDARD_VECTOR_ICON_SIZE}
//                 height={STANDARD_VECTOR_ICON_SIZE}
//                 fill={color}
//               />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Immunizations"
//           component={ImmunizationScreen}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <InjectionIcon
//                 width={STANDARD_VECTOR_ICON_SIZE}
//                 height={STANDARD_VECTOR_ICON_SIZE}
//                 fill={color}
//               />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Nutrition"
//           component={NutritionScreen}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <NutritionIcon
//                 width={STANDARD_VECTOR_ICON_SIZE}
//                 height={STANDARD_VECTOR_ICON_SIZE}
//                 fill={color}
//               />
//             ),
//           }}
//         />

//         <Tab.Screen
//           name="Practitioners"
//           component={PractitionersScreen}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <MoreIcon
//                 width={STANDARD_VECTOR_ICON_SIZE}
//                 height={STANDARD_VECTOR_ICON_SIZE}
//                 fill={color}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="MedicationLog"
//           component={MedicationLog}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <MoreIcon
//                 width={STANDARD_VECTOR_ICON_SIZE}
//                 height={STANDARD_VECTOR_ICON_SIZE}
//                 fill={color}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </CustomSafeAreaView>
//   );
// };

// export default TopTabNavigator;

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import AllergyIcon from '../../../assets/icons/svg/Allergy.svg';
import DoctorIcon from '../../../assets/icons/svg/Doctor.svg';
import InjectionIcon from '../../../assets/icons/svg/Injection.svg';
import MedicalPrescription from '../../../assets/icons/svg/MedicalPrescription.svg';
import MedicationIcon from '../../../assets/icons/svg/Medication.svg';
import NutritionIcon from '../../../assets/icons/svg/Nutrition.svg';
import { CustomText } from '../../../components/global/CustomComponents';
import CustomSafeAreaView from '../../../components/global/CustomSafeAreaView';
import Header from '../../../components/Header/Header';
import Colors from '../../../constants/Colors';
import {
  FONT_SIZE_XXS,
  OPEN_SANS_SEMIBOLD,
  STANDARD_BORDER_WIDTH,
  STANDARD_SPACING,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../../constants/Constants';
import AllergyScreen from '../../../screens/AllergyScreen';
import ImmunizationScreen from '../../../screens/ImmunizationScreen';
import MedicationLog from '../../../screens/MedicationLog';
import MedicationScreen from '../../../screens/MedicationScreen';
import NutritionScreen from '../../../screens/NutritionScreen';
import PractitionersScreen from '../../../screens/PractitionersScreen';

const Tab = createMaterialTopTabNavigator();

const TabItem = ({ focused, Icon, label }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <View
        style={{
          minWidth: moderateScale(85),
          height: moderateScale(70),
          paddingHorizontal: moderateScale(10),
          borderRadius: moderateScale(5),
          marginBottom: STANDARD_SPACING * 1.25,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: focused ? Colors.lightPurple : 'transparent',
        }}
      >
        <Icon
          width={STANDARD_VECTOR_ICON_SIZE * 1.25}
          height={STANDARD_VECTOR_ICON_SIZE * 1.25}
          fill={focused ? Colors.boysenberry : Colors.textLowContrast}
        />

        <CustomText
          numberOfLines={1}
          style={{
            fontSize: FONT_SIZE_XXS,
            fontFamily: OPEN_SANS_SEMIBOLD,
            color: focused ? Colors.boysenberry : Colors.textLowContrast,
          }}
        >
          {label}
        </CustomText>
      </View>

      {focused && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: moderateScale(2.5),
            borderRadius: moderateScale(20),
            backgroundColor: Colors.boysenberry,
          }}
        />
      )}
    </View>
  );
};

const TopTabNavigator = () => {
  return (
    <CustomSafeAreaView
      barStyle="dark-content"
      statusBarBackgroundColor={Colors.white}
    >
      <Header
        back={true}
        headerBg={Colors.white}
        iconColor={Colors.textHighContrast}
        title={'Medical Details'}
      />

      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          swipeEnabled: true,
          tabBarStyle: {
            backgroundColor: Colors.white,
            elevation: 0,
            shadowOpacity: 0,
            height: 'auto',
            borderBottomWidth: STANDARD_BORDER_WIDTH,
            borderBottomColor: Colors.inputBorderColor,
          },
          tabBarContentContainerStyle: {
            paddingLeft: STANDARD_SPACING * 2,
            paddingRight: STANDARD_SPACING * 2,
          },
          tabBarItemStyle: {
            width: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarBounces: false,
          tabBarShowLabel: false,
          tabBarAndroidRipple: false,
          animationEnabled: true,
          // tabBarGap: STANDARD_SPACING * 0.5,
          tabBarPressColor: 'transparent',
        }}
      >
        <Tab.Screen
          name="Allergy"
          component={AllergyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem focused={focused} Icon={AllergyIcon} label="Allergies" />
            ),
          }}
        />

        <Tab.Screen
          name="Medication"
          component={MedicationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem
                focused={focused}
                Icon={MedicationIcon}
                label="Medications"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Immunization"
          component={ImmunizationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem
                focused={focused}
                Icon={InjectionIcon}
                label="Immunizations"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Nutrition"
          component={NutritionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem
                focused={focused}
                Icon={NutritionIcon}
                label="Nutrition"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Practitioners"
          component={PractitionersScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem
                focused={focused}
                Icon={DoctorIcon}
                label="Practitioners"
              />
            ),
          }}
        />
        <Tab.Screen
          name="MedicationLog"
          component={MedicationLog}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabItem
                focused={focused}
                Icon={MedicalPrescription}
                label="Medication Log"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </CustomSafeAreaView>
  );
};

export default TopTabNavigator;
