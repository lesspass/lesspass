import React from "react";
import { TextInput, useTheme } from "react-native-paper";

export default function Input({ showError = false, errorText, ...props }) {
  const theme = useTheme();
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      outlineStyle={{
        borderRadius: 5 * theme.roundness,
      }}
      style={{ marginBottom: 5 }}
      mode="outlined"
      ref={props.outerRef}
      {...props}
    />
  );
}
