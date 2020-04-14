import * as React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "./ui/Theme";
import LoadingScreen from "./ui/LoadingScreen";
import PasswordGeneratorScreen from "./password/PasswordGeneratorScreen";
import SettingsScreen from "./settings/SettingsScreen";
import HelpScreen from "./help/HelpScreen";
import AuthStackScreen from "./auth/AuthStackScreen";
import SignOutScreen from "./auth/SignOutScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();

function App() {
  const auth = useSelector((state) => state.auth);

  if (auth.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
            } else if (route.name === routes.SIGN_OUT) {
              iconName = "user";
            }
            return (
              <Icon size={size} name={iconName} style={{ color: color }} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: Theme.colors.white,
          activeBackgroundColor: Theme.colors.primary,
          inactiveTintColor: Theme.colors.lightBlue,
          inactiveBackgroundColor: Theme.colors.primary,
        }}
      >
        <Tab.Screen
          name={routes.PASSWORD_GENERATOR}
          component={PasswordGeneratorScreen}
        />
        <Tab.Screen name={routes.SETTINGS} component={SettingsScreen} />
        <Tab.Screen name={routes.HELP} component={HelpScreen} />
        {auth.jwt == null ? (
          <Tab.Screen name={routes.AUTH_STACK} component={AuthStackScreen} />
        ) : (
          <Tab.Screen name={routes.SIGN_OUT} component={SignOutScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
