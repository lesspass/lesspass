import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "./src/store";
import ForgotPasswordScreen from "./src/ForgotPasswordScreen";
import HelpScreen from "./src/HelpScreen";
import PasswordGeneratorScreen from "./src/PasswordGeneratorScreen";
import SettingsScreen from "./src/SettingsScreen";
import SignInScreen from "./src/SignInScreen";
import SignUpScreen from "./src/SignUpScreen";
import Theme from "./src/Theme";
const AuthStack = createStackNavigator(
  {
    ForgotPassword: ForgotPasswordScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none"
  }
);

const AppNavigator = createMaterialBottomTabNavigator(
  {
    PasswordGenerator: {
      screen: PasswordGeneratorScreen,
      navigationOptions: {
        title: "LessPass",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name="user-secret" style={{ color: tintColor }} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name="cogs" style={{ color: tintColor }} />
        )
      }
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: {
        title: "Help",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name="question" style={{ color: tintColor }} />
        )
      }
    }
    /* 
    SignIn: {
      screen: AuthStack,
      navigationOptions: {
        title: "Log In",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={25} name="account-circle" style={{ color: tintColor }} />
        )
      }
    }
    */
  },
  {
    initialRouteName: "PasswordGenerator",
    activeTintColor: Theme.colors.white,
    inactiveTintColor: Theme.colors.lightBlue,
    barStyle: { backgroundColor: Theme.colors.primary }
  }
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={Theme}>
            <AppNavigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
