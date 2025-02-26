import React from "react";
import { Image } from "react-native";
import { useTheme } from "react-native-paper";
import LogoBlue from "./logo-blue.png";
import LogoWhite from "./logo-white.png";

export default function Logo() {
  const theme = useTheme();
  return (
    <Image
      style={{
        width: 186,
        height: 42,
      }}
      source={theme.dark ? LogoWhite : LogoBlue}
    />
  );
}
