import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import PasswordGeneratorScreen from "./password/PasswordGeneratorScreen";
import SettingsScreen from "./settings/SettingsScreen";
import HelpScreen from "./help/HelpScreen";
import AuthStackScreen from "./auth/AuthStackScreen";
import SignOutScreen from "./auth/SignOutScreen";
import routes from "./routes";
import { getPasswordProfiles } from "./password/profilesActions";
import { refreshTokens, signOut } from "./auth/authActions";
import ProfilesScreen from "./profiles/ProfilesScreen";
import { SafeAreaView, useColorScheme } from "react-native";
import Errors from "./errors/Errors";
import Header from "./header/Header";
import Styles from "./ui/Styles";
import { getReactNavigationTheme } from "./ui/Theme";

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(refreshTokens())
        .then(() => dispatch(getPasswordProfiles()))
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              dispatch(signOut());
            }
          }
        });
    }
  }, [isAuthenticated, dispatch]);
  const reactNavigationTheme = getReactNavigationTheme(colorScheme);
  return (
    <SafeAreaView
      style={{
        ...Styles.container,
        backgroundColor: reactNavigationTheme.colors.card,
      }}
    >
      <Header />
      <Errors />
      <NavigationContainer theme={reactNavigationTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { paddingTop: 10 },
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === routes.PASSWORD_GENERATOR) {
                iconName = "user-secret";
              } else if (route.name === routes.PASSWORD_PROFILES) {
                iconName = "key";
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
          {isAuthenticated ? (
            <Tab.Screen
              name={routes.PASSWORD_PROFILES}
              component={ProfilesScreen}
              options={{ title: "Passwords" }}
            />
          ) : null}
          <Tab.Screen name={routes.SETTINGS} component={SettingsScreen} />
          <Tab.Screen name={routes.HELP} component={HelpScreen} />
          {isAuthenticated ? (
            <Tab.Screen name={routes.SIGN_OUT} component={SignOutScreen} />
          ) : (
            <Tab.Screen name={routes.AUTH_STACK} component={AuthStackScreen} />
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
