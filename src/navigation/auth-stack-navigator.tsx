import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import React from "react";
import WelcomeScreen from "@/screens/welcome-screen";
import SignInScreen from "@/screens/sign-in-screen";
import SignOutScreen from "@/screens/sign-out-screen";
const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignOutScreen} />
    </Stack.Navigator>
  );
};
export default AuthStackNavigator;
