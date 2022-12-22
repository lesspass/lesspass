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
  const color = isValid ? theme.colors.primary : theme.colors.error;
  const borderColor = isValid ? theme.colors.outline : theme.colors.error;
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
          height: 26,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            paddingVertical: 6,
            paddingHorizontal: 16,
            backgroundColor: isValid
              ? theme.colors.primary
              : theme.colors.error,
            borderTopLeftRadius: 5 * theme.roundness,
            borderBottomLeftRadius: 5 * theme.roundness,
          }}
          onPress={() => setValue(value - 1)}
        >
          <Icon
            size={12}
            name="minus"
            style={{
              color: isValid ? theme.colors.onPrimary : theme.colors.onError,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0,
            borderTopWidth: 1,
            borderTopColor: borderColor,
            borderBottomWidth: 1,
            borderBottomColor: borderColor,
          }}
        >
          <TextInput
            onFocus={() => setValue("")}
            value={value.toString()}
            keyboardType="numeric"
            style={{
              paddingVertical: 0,
              paddingHorizontal: 16,
              color,
              textAlign: "center",
              flex: 1,
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
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            paddingVertical: 6,
            paddingHorizontal: 16,
            backgroundColor: isValid
              ? theme.colors.primary
              : theme.colors.error,
            borderTopRightRadius: 5 * theme.roundness,
            borderBottomRightRadius: 5 * theme.roundness,
          }}
          onPress={() => setValue(value + 1)}
        >
          <Icon
            size={12}
            name="plus"
            style={{
              color: isValid ? theme.colors.onPrimary : theme.colors.onError,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
