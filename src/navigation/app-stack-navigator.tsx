import React from "react";
import BottomTabNavigator from "./bottom-tab-navigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
export default AppStackNavigator;
