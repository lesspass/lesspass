import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import routes from "../routes";

const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={routes.SIGN_IN} component={SignInScreen} />
      <AuthStack.Screen name={routes.SIGN_UP} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
