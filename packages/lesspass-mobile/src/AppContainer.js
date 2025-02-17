import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import PasswordGeneratorScreen from "./password/PasswordGeneratorScreen";
import SettingsScreen from "./settings/SettingsScreen";
import HelpScreen from "./help/HelpScreen";
import SignInScreen from "./auth/SignInScreen";
import SignOutScreen from "./auth/SignOutScreen";
import routes from "./routes";
import { getPasswordProfiles } from "./password/profilesActions";
import { refreshTokens, signOut } from "./auth/authActions";
import ProfilesScreen from "./profiles/ProfilesScreen";
import Errors from "./errors/Errors";
import { useTheme } from "react-native-paper";
import { getReactNavigationTheme } from "./ui/Theme";
import Logo from "./ui/logo";

const Tab = createBottomTabNavigator();

export default function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();

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
  const reactNavigationTheme = getReactNavigationTheme(theme);
  return (
    <SafeAreaProvider>
      <Errors />
      <NavigationContainer theme={reactNavigationTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShadowVisible: false,
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
            options={{
              headerTitle: (props) => <Logo {...props} />,
            }}
          />
          {isAuthenticated ? (
            <Tab.Screen
              name={routes.PASSWORD_PROFILES}
              component={ProfilesScreen}
              options={{
                title: "Passwords",
                headerTitle: (props) => <Logo {...props} />,
              }}
            />
          ) : null}
          <Tab.Screen
            name={routes.SETTINGS}
            component={SettingsScreen}
            options={{
              headerTitle: (props) => <Logo {...props} />,
            }}
          />
          <Tab.Screen
            name={routes.HELP}
            component={HelpScreen}
            options={{
              headerTitle: (props) => <Logo {...props} />,
            }}
          />
          {isAuthenticated ? (
            <Tab.Screen
              name={routes.SIGN_OUT}
              component={SignOutScreen}
              options={{
                headerTitle: (props) => <Logo {...props} />,
              }}
            />
          ) : (
            <Tab.Screen
              name={routes.SIGN_IN}
              component={SignInScreen}
              options={{
                headerTitle: (props) => <Logo {...props} />,
              }}
            />
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
