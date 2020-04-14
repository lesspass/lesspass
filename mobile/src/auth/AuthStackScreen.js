import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
