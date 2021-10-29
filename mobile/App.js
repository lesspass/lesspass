import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./src/store";
import { getTheme } from "./src/ui/Theme";
import AppContainer from "./src/AppContainer";
import { useColorScheme } from "react-native";

export default function App() {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
