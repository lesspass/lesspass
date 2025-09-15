import React, { useState } from "react";
import { View } from "react-native";
import { Button, Portal, Dialog, List, Text, Switch } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import { useTranslation } from "react-i18next";

export default function KeepMasterPasswordOption({
  label,
  description,
  onOk,
  modalTitle,
  modalDescription,
  value,
  onClear,
}) {
  const [showModal, setShowModal] = useState(false);
  const [masterPassword, setMasterPassword] = useState("");
  const { t } = useTranslation();

  const hideModal = () => {
    setShowModal(false);
  };

  const showModalHandler = (value) => {
    if (value) {
      onClear();
    } else {
      setShowModal(true);
    }
  };

  const handleOk = () => {
    setShowModal(false);
    onOk(masterPassword);
  };

  return (
    <View>
      <Portal>
        <Dialog onDismiss={hideModal} visible={showModal}>
          <Dialog.Title>{modalTitle}</Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <View style={{ padding: 10 }}>
              <MasterPassword
                label={t("PasswordProfile.MasterPassword")}
                masterPassword={masterPassword}
                onChangeText={setMasterPassword}
              />
              {modalDescription ? <Text>{modalDescription}</Text> : null}
            </View>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button primary onPress={hideModal}>
              Cancel
            </Button>
            <Button primary onPress={handleOk}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <List.Item
        title={label}
        description={description}
        right={() => (
          <Switch value={value} onValueChange={() => showModalHandler(value)} />
        )}
        onPress={() => showModalHandler(value)}
      />
    </View>
  );
}
