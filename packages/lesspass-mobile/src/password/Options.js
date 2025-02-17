import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Checkbox, useTheme } from "react-native-paper";
import { areOptionsValid } from "./validations";

export default function Options({ options, onOptionsChange, style }) {
  const [isValid, setIsvalid] = useState(true);
  const theme = useTheme();
  const color = isValid ? theme.colors.onSurface : theme.colors.error;
  useEffect(() => {
    if (areOptionsValid(options)) {
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }
  }, [options]);

  return (
    <View
      style={{
        ...style,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: -8,
        }}
      >
        <Checkbox
          status={options.lowercase ? "checked" : "unchecked"}
          onPress={() => {
            onOptionsChange({
              ...options,
              lowercase: !options.lowercase,
            });
          }}
        />
        <Text style={{ fontSize: 16, color: color }}>a-z</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 5,
        }}
      >
        <Checkbox
          status={options.uppercase ? "checked" : "unchecked"}
          onPress={() => {
            onOptionsChange({
              ...options,
              uppercase: !options.uppercase,
            });
          }}
        />
        <Text style={{ fontSize: 16, color: color }}>A-Z</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 5,
        }}
      >
        <Checkbox
          status={options.digits ? "checked" : "unchecked"}
          onPress={() => {
            onOptionsChange({
              ...options,
              digits: !options.digits,
            });
          }}
        />
        <Text style={{ fontSize: 16, color: color }}>0-9</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Checkbox
          status={options.symbols ? "checked" : "unchecked"}
          onPress={() => {
            onOptionsChange({
              ...options,
              symbols: !options.symbols,
            });
          }}
        />
        <Text style={{ fontSize: 16, color: color }}>!@%</Text>
      </View>
    </View>
  );
}
