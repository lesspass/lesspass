import React, { Component } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import TouchId from "./TouchId";
import Styles from "../ui/Styles";
import Fingerprint from "./Fingerprint";

export default class MasterPassword extends Component {
  render() {
    const {
      masterPassword,
      onChangeText,
      hideFingerprint,
      label = "Master Password"
    } = this.props;
    return (
      <View>
        <TextInput
          style={Styles.input}
          mode="outlined"
          label={label}
          value={masterPassword}
          secureTextEntry
          onChangeText={masterPassword => onChangeText(masterPassword)}
        />
        {masterPassword ? (
          <Fingerprint masterPassword={masterPassword} />
        ) : hideFingerprint ? null : (
          <TouchId
            onChangeText={masterPassword => onChangeText(masterPassword)}
          />
        )}
      </View>
    );
  }
}
