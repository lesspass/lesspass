import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./src/store";
import Theme from "./src/ui/Theme";
import Header from "./src/header/Header";
import Errors from "./src/errors/Errors";
import AppContainer from "./src/AppContainer";
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#333333' }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={Theme}>
            <Header />
            <Errors />
            <AppContainer />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
