import React, { useState } from "react";
import { View } from "react-native";
import { Button, Portal, Dialog, Text, useTheme } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import { useTranslation } from "react-i18next";

export default function DeleteMyAccountModal({ onDeleteConfirmed }) {
  const [showModal, setShowModal] = useState(false);
  const [masterPassword, setMasterPassword] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();
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
            {t("DeleteMyAccountModal.DeleteMyAccount", "Delete my account")}
          </Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <View style={{ padding: 10 }}>
              <MasterPassword
                label={t("PasswordProfile.MasterPassword")}
                style={{ marginBottom: 15 }}
                masterPassword={masterPassword}
                onChangeText={setMasterPassword}
              />
              <Text style={{ color: theme.colors.error }}>
                {t(
                  "DeleteMyAccountModal.WarningMessage",
                  "Enter your master password to delete your account. Warning! this action is irreversible.",
                )}
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
              {t("Common.Cancel", "Cancel")}
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
              {t("DeleteMyAccountModal.DeleteMyAccount", "Delete my account")}
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
        {t("DeleteMyAccountModal.DeleteMyAccount", "Delete my account")}
      </Button>
    </View>
  );
}
