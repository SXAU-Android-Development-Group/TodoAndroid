import { AuthScreenNavigationType } from "@/navigation/types";
import { Box } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
const SignOutScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <Box>
      <Button title="Navigate to sign in" onPress={navigateToSignUpScreen} />
    </Box>
  );
};
export default SignOutScreen;
