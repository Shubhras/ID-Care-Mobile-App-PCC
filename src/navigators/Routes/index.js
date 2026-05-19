import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import EditPatientDetail from '../../screens/EditPatientDetail/index';
import HomeScreen from '../../screens/HomeScreen/index';
import Notifications from '../../screens/Notifications/index';
import PatientCurrentDetails from '../../screens/PatientCurrentDetails/index';
import PatientDetailScreen from '../../screens/PatientDetailScreen/index';
import PatientHistoryScreen from '../../screens/PatientHistoryScreen/index';
import PatientsListScreen from '../../screens/PatientsListScreen/index';
import TopTabNavigator from '../../navigators/TopTab/TopTabNavigator';
import AuthStack from '../stacks/AuthStack';
const Stack = createNativeStackNavigator();

const Routes = () => {
  const login_session_key = useSelector(
    state => state?.users?.users?.login_session_key,
  );
  console.log('user77777', login_session_key);
  const initialRoute = login_session_key ? 'HomeScreen' : 'AuthStack';
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientsListScreen"
        component={PatientsListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientHistoryScreen"
        component={PatientHistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientDetailScreen"
        component={PatientDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPatientDetail"
        component={EditPatientDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientCurrentDetails"
        component={PatientCurrentDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
