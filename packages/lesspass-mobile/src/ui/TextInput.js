import React from "react";
import { TextInput } from "react-native-paper";

export default function Input({ showError = false, errorText, ...props }) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      mode="outlined"
      ref={props.outerRef}
      {...props}
    />
  );
}
