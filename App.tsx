/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/utils/theme";
import Navigation from "@/navigation/index.tsx";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
