/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme, { Text } from "./src/utils/theme";
import Button from "./src/components/button.tsx";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="text3Xl">Header</Text>
        <Button />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
