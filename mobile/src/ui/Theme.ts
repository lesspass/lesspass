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
      text: theme.colors.secondary,
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
      roundness: 1,
      colors: {
        ...DefaultTheme.colors,
        primary: "#bfc2ff",
        onPrimary: "#141994",
        primaryContainer: "#3037aa",
        onPrimaryContainer: "#e0e0ff",
        secondary: "#c5c4dd",
        onSecondary: "#2e2f42",
        secondaryContainer: "#444559",
        onSecondaryContainer: "#e1e0f9",
        tertiary: "#e8b9d5",
        onTertiary: "#46263b",
        tertiaryContainer: "#5e3c52",
        onTertiaryContainer: "#ffd8ee",
        error: "#ffb4ab",
        onError: "#690005",
        errorContainer: "#93000a",
        onErrorContainer: "#ffb4ab",
        background: "#1b1b1f",
        onBackground: "#e5e1e6",
        surface: "#1b1b1f",
        onSurface: "#e5e1e6",
        surfaceVariant: "#46464f",
        onSurfaceVariant: "#c7c5d0",
        outline: "#918f9a",
        outlineVariant: "#46464f",
        shadow: "#000000",
        scrim: "#000000",
        inverseSurface: "#e5e1e6",
        inverseOnSurface: "#303034",
        inversePrimary: "#4951c3",
        elevation: {
          level0: "transparent",
          level1: "#23232a",
          level2: "#282831",
          level3: "#2d2d38",
          level4: "#2f2f3a",
          level5: "#32323e",
        },
        surfaceDisabled: "#e5e1e6ff",
        onSurfaceDisabled: "#e5e1e6ff",
        backdrop: "#303038ff",
      },
    };
  }
  return {
    ...DefaultTheme,
    dark: isDarkTheme,
    mode: "adaptive",
    roundness: 1,
    colors: {
      ...DefaultTheme.colors,
      primary: "#4951c3",
      onPrimary: "#ffffff",
      primaryContainer: "#e0e0ff",
      onPrimaryContainer: "#00006e",
      secondary: "#5c5d72",
      onSecondary: "#ffffff",
      secondaryContainer: "#e1e0f9",
      onSecondaryContainer: "#191a2c",
      tertiary: "#78536b",
      onTertiary: "#ffffff",
      tertiaryContainer: "#ffd8ee",
      onTertiaryContainer: "#2e1126",
      error: "#ba1a1a",
      onError: "#ffffff",
      errorContainer: "#ffdad6",
      onErrorContainer: "#410002",
      background: "#fffbff",
      onBackground: "#1b1b1f",
      surface: "#fffbff",
      onSurface: "#1b1b1f",
      surfaceVariant: "#e4e1ec",
      onSurfaceVariant: "#46464f",
      outline: "#777680",
      outlineVariant: "#c7c5d0",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#303034",
      inverseOnSurface: "#f3eff4",
      inversePrimary: "#bfc2ff",
      elevation: {
        level0: "transparent",
        level1: "#f6f3fc",
        level2: "#f0edfa",
        level3: "#ebe8f8",
        level4: "#e9e7f8",
        level5: "#e6e3f7",
      },
      surfaceDisabled: "#1b1b1f1e",
      onSurfaceDisabled: "#1b1b1f60",
      backdrop: "#30303866",
    },
  };
}
