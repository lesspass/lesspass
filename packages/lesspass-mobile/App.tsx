import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import { persistor, store } from "./src/store";
import { getTheme } from "./src/ui/Theme";
import AppContainer from "./src/AppContainer";
import { useColorScheme } from "react-native";
import i18n from "./src/i18n";

export default function App() {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <I18nextProvider i18n={i18n}>
          <PaperProvider theme={theme}>
            <AppContainer />
          </PaperProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
