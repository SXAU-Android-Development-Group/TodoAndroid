import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesStackParamList } from "./types";
import React from "react";
import CategoriesScreen from "@/screens/categories-screen";
import CategoryScreen from "@/screens/category-screen";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();
const CategoriesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="CreateCategory" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};
export default CategoriesNavigator;
