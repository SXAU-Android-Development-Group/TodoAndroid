import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { AuthScreenNavigationType } from "@/navigation/types";
import { Box } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaWrapper>
      <Box>
        <Button title="Navigate to sign in" onPress={navigateToSignInScreen} />
        <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};
export default WelcomeScreen;
