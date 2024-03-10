import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Box } from "@/utils/theme";
import React from "react";
import { Text } from "react-native";
const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Home Screen</Text>
      </Box>
    </SafeAreaWrapper>
  );
};
export default HomeScreen;
