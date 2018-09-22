import * as React from "react";
import { ScrollView, Text } from "react-native";
import TouchID from "react-native-touch-id";
import { Button, Portal, Dialog, TextInput } from "react-native-paper";
import { setGenericPassword } from "react-native-keychain";
import styles from "./styles";

export default class extends React.Component {
  state = {
    masterPassword: ""
  };

  render() {
    const { masterPassword } = this.state;
    const { visible, close, onOk, onError } = this.props;
    return (
      <Portal>
        <Dialog onDismiss={close} visible={visible}>
          <Dialog.Title>Enter your master password</Dialog.Title>
          <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
            <ScrollView style={{ padding: 10 }}>
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Master Password"
                value={masterPassword}
                secureTextEntry
                onChangeText={masterPassword =>
                  this.setState({ masterPassword })
                }
              />
              <Text>
                Your master password will be encrypted locally on your device,
                and accessible only with your fingerprint.
              </Text>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button primary onPress={close}>
              Cancel
            </Button>
            <Button
              primary
              disabled={!masterPassword}
              onPress={() =>
                TouchID.authenticate()
                  .then(success => {
                    return setGenericPassword(
                      "masterPassword",
                      masterPassword
                    ).then(() => {
                      this.setState({ masterPassword: "" }, () => onOk());
                    });
                  })
                  .catch(error => {
                    onError(error);
                  })
              }
            >
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}
