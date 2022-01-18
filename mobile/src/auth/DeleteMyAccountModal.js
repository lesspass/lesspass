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
        <Dialog onDismiss={() => setShowModal(false)} visible={showModal}>
          <Dialog.Title style={{ color: theme.colors.red }}>
            Delete my account
          </Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <View style={{ padding: 10 }}>
              <MasterPassword
                style={{ marginBottom: 15 }}
                masterPassword={masterPassword}
                onChangeText={setMasterPassword}
              />
              <Text style={{ color: theme.colors.red }}>
                Enter your master password to delete your account. Warning! this
                action is irreversible.
              </Text>
            </View>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button primary onPress={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
            disabled={!masterPassword}
              primary
              onPress={() => {
                setShowModal(false);
                onDeleteConfirmed(masterPassword);
              }}
            >
              <Text style={{ color: theme.colors.red }}>Delete my account</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Button
        compact
        mode="outlined"
        style={{ marginTop: 10, color: theme.colors.red }}
        onPress={() => {
          setShowModal(true);
        }}
      >
        <Text style={{ color: theme.colors.red }}>Delete my account</Text>
      </Button>
    </View>
  );
}
