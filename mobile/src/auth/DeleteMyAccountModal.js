import React, { useState } from "react";
import { View } from "react-native";
import { Button, Portal, Dialog, Text, useTheme } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";

export default function DeleteMyAccountModal({ onDeleteConfirmed }) {
  const [showModal, setShowModal] = useState(false);
  const [masterPassword, setMasterPassword] = useState("");
  const theme = useTheme();

  return (
    <View>
      <Portal>
        <Dialog
          onDismiss={() => {
            setMasterPassword("");
            setShowModal(false);
          }}
          visible={showModal}
        >
          <Dialog.Title style={{ color: theme.colors.error }}>
            Delete my account
          </Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <View style={{ padding: 10 }}>
              <MasterPassword
                style={{ marginBottom: 15 }}
                masterPassword={masterPassword}
                onChangeText={setMasterPassword}
              />
              <Text style={{ color: theme.colors.error }}>
                Enter your master password to delete your account. Warning! this
                action is irreversible.
              </Text>
            </View>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button
              primary
              onPress={() => {
                setMasterPassword("");
                setShowModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={!masterPassword}
              mode="contained"
              style={{
                borderColor: theme.colors.error,
              }}
              buttonColor={theme.colors.error}
              onPress={() => {
                setShowModal(false);
                onDeleteConfirmed(masterPassword);
              }}
            >
              Delete my account
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Button
        mode="contained"
        style={{
          borderColor: theme.colors.error,
        }}
        buttonColor={theme.colors.error}
        onPress={() => {
          setShowModal(true);
        }}
      >
        Delete my account
      </Button>
    </View>
  );
}
