import React, { Component } from "react";
import { View, NativeModules } from "react-native";
import { TextInput } from "react-native-paper";
import TouchId from "./TouchId";
import Styles from "../ui/Styles";
import Fingerprint from "./Fingerprint";
import fingerprint from "lesspass-fingerprint";
import { debounce } from "lodash";

export default class MasterPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { fingerprint: null };
    this.delayedCalcFingerprint = debounce(this.calcFingerprint, 500);
  }

  calcFakedFingerprint = () => {
    let hmacSha256 = "";
    const poolOfChars = "0123456789abcdef";
    for (let i = 64; i > 0; i -= 1) {
      hmacSha256 += poolOfChars[Math.floor(Math.random() * poolOfChars.length)];
    }
    this.setState({ fingerprint: fingerprint(hmacSha256) });
  };

  calcFingerprint = masterPassword => {
    if (masterPassword) {
      NativeModules.LessPass.createFingerprint(masterPassword).then(
        hmacSha256 => {
          this.setState({
            fingerprint: fingerprint(hmacSha256)
          });
        }
      );
    }
  };

  onChangeMasterPassword = masterPassword => {
    const { onChangeText } = this.props;
    onChangeText(masterPassword);
    this.calcFakedFingerprint();
    this.delayedCalcFingerprint(masterPassword);
  };

  render() {
    const {
      masterPassword,
      hideFingerprint,
      label = "Master Password"
    } = this.props;
    const { fingerprint } = this.state;
    return (
      <View>
        <TextInput
          style={Styles.input}
          mode="outlined"
          label={label}
          value={masterPassword}
          secureTextEntry
          onChangeText={this.onChangeMasterPassword}
        />
        {masterPassword && fingerprint ? (
          <Fingerprint fingerprint={fingerprint} />
        ) : hideFingerprint ? null : (
          <TouchId onChangeText={this.onChangeMasterPassword} />
        )}
      </View>
    );
  }
}
