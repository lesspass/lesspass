import React from "react";
import { connect } from "react-redux";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import AuthStack from "./auth/AuthStack";
import PasswordGeneratorScreen from "./password/PasswordGeneratorScreen";
import SettingsScreen from "./settings/SettingsScreen";
import Theme from "./ui/Theme";

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
    SignIn: {
      screen: AuthStack,
      navigationOptions: {
        title: "Sign In",
        tabBarIcon: ({ tintColor, focused }) => (
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

export class Navigation extends Component {
render(){
    const {auth} = this.props
    console.log(auth)
    return 
}
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Navigation);
