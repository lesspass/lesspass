import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "./ui/Theme";
import PasswordGeneratorScreen from "./password/PasswordGeneratorScreen";
import SettingsScreen from "./settings/SettingsScreen";
import HelpScreen from "./help/HelpScreen";
import AuthStackScreen from "./auth/AuthStackScreen";
import SignOutScreen from "./auth/SignOutScreen";
import routes from "./routes";
import { getPasswordProfiles } from "./password/profilesActions";
import { refreshTokens, signOut } from "./auth/authActions";

const Tab = createBottomTabNavigator();

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(refreshTokens())
        .then(() => dispatch(getPasswordProfiles()))
        .catch(() => dispatch(signOut()));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Theme.colors.white,
          tabBarActiveBackgroundColor: Theme.colors.primary,
          tabBarInactiveTintColor: Theme.colors.lightBlue,
          tabBarInactiveBackgroundColor: Theme.colors.primary,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === routes.PASSWORD_GENERATOR) {
              iconName = "user-secret";
            } else if (route.name === routes.SETTINGS) {
              iconName = "cogs";
            } else if (route.name === routes.HELP) {
              iconName = "question";
            } else if (route.name === routes.AUTH_STACK) {
              iconName = "user";
            } else if (route.name === routes.SIGN_IN) {
              iconName = "user";
            } else if (route.name === routes.SIGN_OUT) {
              iconName = "user";
            }
            return (
              <Icon size={size} name={iconName} style={{ color: color }} />
            );
          },
        })}
      >
        <Tab.Screen
          name={routes.PASSWORD_GENERATOR}
          component={PasswordGeneratorScreen}
        />
        <Tab.Screen name={routes.SETTINGS} component={SettingsScreen} />
        <Tab.Screen name={routes.HELP} component={HelpScreen} />
        {isAuthenticated ? (
          <Tab.Screen name={routes.SIGN_OUT} component={SignOutScreen} />
        ) : (
          <Tab.Screen
            name={routes.AUTH_STACK}
            component={AuthStackScreen}
            options={{ title: "Sign In", headerShown: false }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
