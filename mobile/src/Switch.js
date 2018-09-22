import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Switch, Paragraph } from "react-native-paper";

export default class LessPassSwitch extends Component {
  render() {
    const { on, onValueChange, children } = this.props;
    return (
      <View style={styles.switch}>
        <Paragraph>{children}</Paragraph>
        <Switch value={on} onValueChange={() => onValueChange()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10
  }
});
