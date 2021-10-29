import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "react-native-paper";

export default function Counter({
  label,
  value,
  setValue,
  isValueValid,
  ...props
}) {
  const theme = useTheme();
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    if (isValueValid(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);
  const color = isValid ? theme.colors.placeholder : theme.colors.red;
  const colorAccent = isValid ? theme.colors.accent : theme.colors.red;
  return (
    <View {...props}>
      <Text
        style={{
          marginBottom: 6,
          color,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: theme.roundness,
            borderTopLeftRadius: theme.roundness,
            borderWidth: 1,
            borderColor: colorAccent,
            backgroundColor: colorAccent,
            paddingVertical: 6,
            paddingHorizontal: 16,
          }}
          onPress={() => setValue(value - 1)}
        >
          <Icon
            size={12}
            name="minus"
            style={{
              color: theme.colors.background,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colorAccent,
          }}
        >
          <TextInput
            onFocus={() => setValue("")}
            value={value.toString()}
            keyboardType="numeric"
            style={{
              paddingVertical: 0,
              color,
              textAlign: "center",
            }}
            onChangeText={(text) => {
              if (text === "") {
                setValue(text);
              } else {
                try {
                  const newValue = parseInt(text);
                  if (Number.isInteger(newValue)) {
                    setValue(newValue);
                  } else {
                    setValue(value);
                  }
                } catch (error) {
                  setValue(value);
                }
              }
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 25,
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: theme.roundness,
            borderTopRightRadius: theme.roundness,
            borderWidth: 1,
            borderColor: colorAccent,
            backgroundColor: colorAccent,
            paddingHorizontal: 16,
          }}
          onPress={() => setValue(value + 1)}
        >
          <Icon
            size={12}
            name="plus"
            style={{
              color: theme.colors.background,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
