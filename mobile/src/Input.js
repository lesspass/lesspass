import React, { Component } from "react";
import { TextInput } from "react-native-paper";
import styles from "./styles";

export default class Input extends Component {
  render() {
    return (
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        mode="outlined"
        {...this.props}
      />
    );
  }
}
