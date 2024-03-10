import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import React from "react";
import HomeScreen from "@/screens/home-screen";
import EditTaskScreen from "@/screens/edit-task-screen";
const Stack = createNativeStackNavigator<HomeStackParamList>();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
