import React from "react";
import { useSelector } from "react-redux";
import TouchID from "react-native-touch-id";
import { View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import Styles from "../ui/Styles";
import { getGenericPassword } from "react-native-keychain";

export default function TouchId({ onChangeText }) {
  const theme = useTheme();
  const keepMasterPasswordLocally = useSelector(
    (state) => state.settings.keepMasterPasswordLocally
  );
  if (!keepMasterPasswordLocally) return null;
  return (
    <View style={Styles.fingerprint}>
      <IconButton
        icon="fingerprint"
        onPress={() => {
          TouchID.authenticate("Get master password saved locally", {
            imageColor: theme.colors.primary,
            imageErrorColor: theme.colors.error,
            cancelTextColor: theme.colors.onPrimary,
            cancelButtonColor: theme.colors.primary
          })
            .then(() =>
              getGenericPassword().then((credentials) => {
                if (credentials) {
                  onChangeText(credentials.password);
                }
              })
            )
            .catch(console.log);
        }}
      />
    </View>
  );
}
