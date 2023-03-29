import React from "react";
import { View, Image } from "react-native";
import { useTheme } from "react-native-paper";
import LogoDark from "./logo.dark.png";
import LogoLight from "./logo.light.png";

export default function Header() {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          width: 180,
          height: 39,
          resizeMode: "contain",
        }}
        source={theme.dark ? LogoLight : LogoDark}
      />
    </View>
  );
}
