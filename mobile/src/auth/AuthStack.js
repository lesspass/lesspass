import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none"
  }
);

export default AuthStack;
