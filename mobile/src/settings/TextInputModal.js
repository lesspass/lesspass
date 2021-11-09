import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  Button,
  Portal,
  Dialog,
  List,
  Text,
  useTheme,
} from "react-native-paper";
import Styles from "../ui/Styles";
import TextInput from "../ui/TextInput";

export default function TextInputModal({
  modalTitle,
  modalDescription,
  initialValue = "",
  label,
  onOk,
  isRequired = true,
  variant = "text",
}) {
  const [value, setValue] = useState(initialValue);
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const theme = useTheme();

  const variants = {
    text: "default",
    email: "email-address",
    numeric: "numeric",
  };
  const keyboardType = variants[variant];

  useEffect(() => {
    if (isRequired && !value) {
      setIsValid(false);
    } else {
      setIsValid(variant === "numeric" ? !isNaN(value) : true);
    }
  }, [value, variant, isRequired]);

  return (
    <>
      <Portal>
        <Dialog
          onDismiss={() => setShowModal(false)}
          visible={showModal}
          style={{ backgroundColor: theme.colors.background }}
        >
          <Dialog.Title>{modalTitle}</Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <View style={{ padding: 10 }}>
              <TextInput
                style={Styles.input}
                value={variant === "numeric" ? value.toString() : value}
                keyboardType={keyboardType}
                secureTextEntry={variant === "password"}
                onChangeText={setValue}
              />
              {modalDescription ? <Text>{modalDescription}</Text> : null}
            </View>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={() => setShowModal(false)} mode="outlined">
              Cancel
            </Button>
            <Button
              disabled={!isValid}
              onPress={() => {
                setShowModal(false);
                onOk(value);
              }}
              mode="contained"
              style={{ marginLeft: 20 }}
            >
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <List.Item
        title={label}
        description={initialValue}
        onPress={() => {
          setShowModal(true);
          setValue("");
        }}
      />
    </>
  );
}
