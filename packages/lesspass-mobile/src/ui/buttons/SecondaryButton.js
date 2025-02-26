import React from "react";
import { Button } from "react-native-paper";

export default function SecondaryButton({ onPress, icon, children }) {
  return (
    <Button mode="contained-tonal" onPress={onPress} icon={icon}>
      {children}
    </Button>
  );
}
