import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../screens/Login';

// Creating stack navigator
const Stack = createNativeStackNavigator();

// Auth stack
const AuthStack = () => {
  // Returning
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Exporting
export default AuthStack;
