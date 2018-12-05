import React, { Component } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./Styles";

export default class Input extends Component {
  render() {
    const { showError = false, errorText, ...props } = this.props;
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          mode="outlined"
          {...props}
        />
      </View>
    );
  }
}
