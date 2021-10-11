import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import routes from "../routes";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={routes.SIGN_IN} component={SignInScreen} />
    <AuthStack.Screen name={routes.SIGN_UP} component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
