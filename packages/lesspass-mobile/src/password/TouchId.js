import React from "react";
import { useSelector } from "react-redux";
import ReactNativeBiometrics from "react-native-biometrics";
import { View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import Styles from "../ui/Styles";
import { getGenericPassword } from "react-native-keychain";

export default function TouchId({ onChangeText }) {
  const theme = useTheme();
  const keepMasterPasswordLocally = useSelector(
    (state) => state.settings.keepMasterPasswordLocally,
  );
  if (!keepMasterPasswordLocally) return null;
  return (
    <View style={Styles.fingerprint}>
      <IconButton
        icon="fingerprint"
        onPress={() => {
          const rnBiometrics = new ReactNativeBiometrics();
          rnBiometrics
            .simplePrompt({
              promptMessage: "Get master password saved locally",
            })
            .then((result) => {
              if (result.success) {
                return getGenericPassword().then((credentials) => {
                  if (credentials) {
                    onChangeText(credentials.password);
                  }
                });
              }
            })
            .catch(console.log);
        }}
      />
    </View>
  );
}
