import React, { Component } from "react";
import { View, NativeModules } from "react-native";
import TextInput from "../ui/TextInput";
import TouchId from "./TouchId";
import Fingerprint from "./Fingerprint";
import { createFingerprint } from "lesspass/fingerprint";
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
    this.setState({ fingerprint: createFingerprint(hmacSha256) });
  };

  calcFingerprint = (masterPassword) => {
    if (masterPassword) {
      NativeModules.LessPass.createFingerprint(masterPassword).then(
        (hmacSha256) => {
          this.setState({
            fingerprint: createFingerprint(hmacSha256),
          });
        },
      );
    }
  };

  onChangeMasterPassword = (masterPassword) => {
    const { onChangeText } = this.props;
    onChangeText(masterPassword);
    this.calcFakedFingerprint();
    this.delayedCalcFingerprint(masterPassword);
  };

  render() {
    const {
      masterPassword,
      hideFingerprint,
      label = "Master Password",
      style = {},
    } = this.props;
    const { fingerprint } = this.state;
    return (
      <View>
        <TextInput
          style={style}
          label={label}
          value={masterPassword}
          secureTextEntry
          onChangeText={this.onChangeMasterPassword}
          onSubmitEditing={this.props.onSubmitEditing}
          outerRef={this.props.outerRef}
        />
        {masterPassword && fingerprint ? (
          <Fingerprint
            style={{ position: "absolute", right: 10, top: 24, bottom: 0 }}
            fingerprint={fingerprint}
          />
        ) : hideFingerprint ? null : (
          <TouchId onChangeText={this.onChangeMasterPassword} />
        )}
      </View>
    );
  }
}
