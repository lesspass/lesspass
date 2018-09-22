import React, { Component } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import TouchId from "./TouchId";
import styles from "./styles";
import Fingerprint from "./Fingerprint";

export default class MasterPassword extends Component {
  render() {
    const { masterPassword, onChangeText, hideFingerprint } = this.props;
    return (
      <View>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Master Password"
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
