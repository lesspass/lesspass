import React, { Component } from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { PersistGate } from "redux-persist/lib/integration/react";
import { createAppContainer } from "react-navigation";
import { persistor, store } from "./store";
import AuthStack from "./auth/AuthStack";
import PasswordGeneratorScreen from "./password/PasswordGeneratorScreen";
import SettingsScreen from "./settings/SettingsScreen";
import Theme from "./ui/Theme";
import Header from "./header/Header";
import Errors from "./errors/Errors";

const AppNavigator = createMaterialBottomTabNavigator(
  {
    PasswordGenerator: {
      screen: PasswordGeneratorScreen,
      navigationOptions: {
        title: "LessPass",
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="user-secret" style={{ color: tintColor }} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="cogs" style={{ color: tintColor }} />
        )
      }
    },
    SignIn: {
      screen: AuthStack,
      navigationOptions: {
        title: "Sign In",
        tabBarIcon: ({ tintColor }) => (
          <Icon size={20} name="user" style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: "PasswordGenerator",
    activeTintColor: Theme.colors.white,
    inactiveTintColor: Theme.colors.lightBlue,
    barStyle: { backgroundColor: Theme.colors.primary },
    labeled: true
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={Theme}>
            <Header />
            <AppContainer />
            <Errors />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
