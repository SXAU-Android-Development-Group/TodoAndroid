import { AuthScreenNavigationType } from "@/navigation/types";
import { Box } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Box>
      <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />
    </Box>
  );
};
export default SignInScreen;
