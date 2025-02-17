import { DefaultTheme, MD3Theme } from "react-native-paper";
import {
  DefaultTheme as DefaultThemeReactNavigation,
  DarkTheme as DarkThemeReactNavigation,
  Theme,
} from "@react-navigation/native";

export function getReactNavigationTheme(theme: MD3Theme): Theme {
  const reactNativeTheme = theme.dark
    ? DarkThemeReactNavigation
    : DefaultThemeReactNavigation;
  return {
    ...reactNativeTheme,
    dark: theme.dark,
    colors: {
      ...reactNativeTheme.colors,
      text: theme.colors.onSurface,
      primary: theme.colors.primary,
      card: theme.colors.background,
    },
  };
}

export function getTheme(colorScheme: string | undefined | null): MD3Theme {
  const isDarkTheme = typeof colorScheme === "string" && colorScheme === "dark";
  if (isDarkTheme) {
    return {
      ...DefaultTheme,
      dark: isDarkTheme,
      mode: "adaptive",
      roundness: 0,
      colors: {
        primary: "rgb(150, 204, 255)",
        onPrimary: "rgb(0, 51, 83)",
        primaryContainer: "rgb(0, 74, 117)",
        onPrimaryContainer: "rgb(206, 229, 255)",
        secondary: "rgb(185, 200, 218)",
        onSecondary: "rgb(35, 50, 64)",
        secondaryContainer: "rgb(58, 72, 87)",
        onSecondaryContainer: "rgb(213, 228, 247)",
        tertiary: "rgb(255, 184, 101)",
        onTertiary: "rgb(72, 42, 0)",
        tertiaryContainer: "rgb(102, 61, 0)",
        onTertiaryContainer: "rgb(255, 221, 186)",
        error: "rgb(255, 180, 171)",
        onError: "rgb(105, 0, 5)",
        errorContainer: "rgb(147, 0, 10)",
        onErrorContainer: "rgb(255, 180, 171)",
        background: "rgb(26, 28, 30)",
        onBackground: "rgb(226, 226, 229)",
        surface: "rgb(26, 28, 30)",
        onSurface: "rgb(226, 226, 229)",
        surfaceVariant: "rgb(66, 71, 78)",
        onSurfaceVariant: "rgb(194, 199, 207)",
        outline: "rgb(140, 145, 152)",
        outlineVariant: "rgb(66, 71, 78)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(226, 226, 229)",
        inverseOnSurface: "rgb(47, 48, 51)",
        inversePrimary: "rgb(0, 99, 154)",
        elevation: {
          level0: "transparent",
          level1: "rgb(32, 37, 41)",
          level2: "rgb(36, 42, 48)",
          level3: "rgb(40, 47, 55)",
          level4: "rgb(41, 49, 57)",
          level5: "rgb(43, 53, 62)",
        },
        surfaceDisabled: "rgba(226, 226, 229, 0.12)",
        onSurfaceDisabled: "rgba(226, 226, 229, 0.38)",
        backdrop: "rgba(44, 49, 55, 0.4)",
      },
    };
  }
  return {
    ...DefaultTheme,
    dark: isDarkTheme,
    mode: "adaptive",
    roundness: 0,
    colors: {
      primary: "#2196f3",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(206, 229, 255)",
      onPrimaryContainer: "rgb(0, 29, 50)",
      secondary: "rgb(81, 96, 111)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(213, 228, 247)",
      onSecondaryContainer: "rgb(14, 29, 42)",
      tertiary: "rgb(135, 82, 0)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(255, 221, 186)",
      onTertiaryContainer: "rgb(43, 23, 0)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(252, 252, 255)",
      onBackground: "rgb(26, 28, 30)",
      surface: "rgb(252, 252, 255)",
      onSurface: "rgb(26, 28, 30)",
      surfaceVariant: "rgb(222, 227, 235)",
      onSurfaceVariant: "rgb(66, 71, 78)",
      outline: "rgb(114, 119, 127)",
      outlineVariant: "rgb(194, 199, 207)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(47, 48, 51)",
      inverseOnSurface: "rgb(240, 240, 244)",
      inversePrimary: "rgb(150, 204, 255)",
      elevation: {
        level0: "transparent",
        level1: "rgb(239, 244, 250)",
        level2: "rgb(232, 240, 247)",
        level3: "rgb(224, 235, 244)",
        level4: "rgb(222, 234, 243)",
        level5: "rgb(217, 231, 241)",
      },
      surfaceDisabled: "rgba(26, 28, 30, 0.12)",
      onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
      backdrop: "rgba(44, 49, 55, 0.4)",
    },
  };
}
