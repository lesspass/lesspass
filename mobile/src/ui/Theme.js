import { DefaultTheme } from "react-native-paper";
import {
  DefaultTheme as DefaultThemeReactNavigation,
  DarkTheme as DarkThemeReactNavigation,
} from "@react-navigation/native";

export function getReactNavigationTheme(colorScheme) {
  const isDarkTheme = colorScheme === "dark";
  if (isDarkTheme) {
    return {
      ...DarkThemeReactNavigation,
      dark: isDarkTheme,
      colors: {
        ...DarkThemeReactNavigation.colors,
        card: "#2E2E2E",
        primary: "#F3F3F3",
        text: "#F3F3F3",
        border: "#2E2E2E",
        background: "#4D4D4D",
      },
    };
  }
  return {
    ...DefaultThemeReactNavigation,
    dark: isDarkTheme,
    colors: {
      ...DefaultThemeReactNavigation.colors,
      card: "#FFFFFF",
      text: "#4D4D4D",
      primary: "#2E2E2E",
    },
  };
}

export function getTheme(colorScheme) {
  const isDarkTheme = colorScheme === "dark";
  if (isDarkTheme) {
    return {
      ...DefaultTheme,
      dark: isDarkTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: "#F3F3F3",
        accent: "#DEDEDE",
        text: "#F3F3F3",
        placeholder: "#DEDEDE",
        background: "#4D4D4D",
        red: "#f32c1e",
      },
    };
  }
  return {
    ...DefaultTheme,
    dark: isDarkTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#2E2E2E",
      accent: "#2E2E2E",
      red: "#f32c1e",
    },
  };
}
