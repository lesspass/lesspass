import React, { Component } from "react";
import { View, NativeModules } from "react-native";
import { ZxcvbnFactory } from "@zxcvbn-ts/core";
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
import * as zxcvbnEnPackage from "@zxcvbn-ts/language-en";
import { withTranslation } from "react-i18next";
import { Text } from "react-native-paper";
import TextInput from "../ui/TextInput";
import TouchId from "./TouchId";
import Fingerprint from "./Fingerprint";
import { createFingerprint } from "lesspass/fingerprint";
import { debounce } from "lodash";

const zxcvbnFactory = new ZxcvbnFactory({
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  translations: zxcvbnEnPackage.translations,
});

const RECOMMENDED_MIN_LENGTH = 10;

class MasterPassword extends Component {
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

  // Cache the zxcvbn result, only needs recomputing when password changes
  getScore = (masterPassword) => {
    if (this.lastCheckedPassword !== masterPassword) {
      this.lastCheckedPassword = masterPassword;
      this.lastScore = zxcvbnFactory.check(masterPassword).score;
    }
    return this.lastScore;
  };

  render() {
    const {
      masterPassword,
      hideFingerprint,
      label = "Master Password",
      style = {},
      t,
    } = this.props;
    const { fingerprint } = this.state;
    const hasValue = Boolean(masterPassword && masterPassword.length > 0);
    // Skip zxcvbn entirely for too-short passwords
    const isTooShort = hasValue && masterPassword.length < RECOMMENDED_MIN_LENGTH;
    const score = hasValue && !isTooShort ? this.getScore(masterPassword) : -1;


    const strengthLabels = [
      t("PasswordStrength.Score0"),
      t("PasswordStrength.Score1"),
      t("PasswordStrength.Score2"),
      t("PasswordStrength.Score3"),
      t("PasswordStrength.Score4"),
    ];
    const strengthColors = ["#6b7280", "#ef4444", "#f97316", "#3b82f6", "#22c55e"];

    // A short password must never display as safe, even with a high entropy score.
    const strengthColor = isTooShort ? "#d97706" : strengthColors[score];
    const strengthLabel = isTooShort
      ? t("PasswordStrength.TooShort")
      : strengthLabels[score];

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
        {hasValue && (
          <Text style={{ color: strengthColor, fontSize: 12, marginTop: 4 }}>
            {strengthLabel}
          </Text>
        )}
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

export default withTranslation()(MasterPassword);
