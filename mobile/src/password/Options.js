import React, { Component } from "react";
import { View, Text } from "react-native";
import Theme from "../ui/Theme";
import { Checkbox } from "react-native-paper";

export default class Options extends Component {
  state = {
    isValid: true,
  };

  checkOptionsAreValid = (options) => {
    const { areOptionsValid } = this.props;
    if (areOptionsValid(options)) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  render() {
    const { options, onOptionsChange, style } = this.props;
    const { isValid } = this.state;
    const isValidBackgroundColor = isValid
      ? Theme.colors.primary
      : Theme.colors.red;
    const isValidColor = isValid ? Theme.colors.black : Theme.colors.red;
    return (
      <View
        style={{
          ...style,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox.Android
            status={options.lowercase ? "checked" : "unchecked"}
            uncheckedColor={isValidBackgroundColor}
            onPress={() => {
              const newOptions = {
                ...options,
                lowercase: !options.lowercase,
              };
              this.checkOptionsAreValid(newOptions);
              onOptionsChange(newOptions);
            }}
          />
          <Text style={{ fontSize: 16, color: isValidColor }}>a-z</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox.Android
            status={options.uppercase ? "checked" : "unchecked"}
            uncheckedColor={isValidBackgroundColor}
            onPress={() => {
              const newOptions = {
                ...options,
                uppercase: !options.uppercase,
              };
              this.checkOptionsAreValid(newOptions);
              onOptionsChange(newOptions);
            }}
          />
          <Text style={{ fontSize: 16, color: isValidColor }}>A-Z</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox.Android
            status={options.digits ? "checked" : "unchecked"}
            uncheckedColor={isValidBackgroundColor}
            onPress={() => {
              const newOptions = {
                ...options,
                digits: !options.digits,
              };
              this.checkOptionsAreValid(newOptions);
              onOptionsChange(newOptions);
            }}
          />
          <Text style={{ fontSize: 16, color: isValidColor }}>0-9</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Checkbox.Android
            status={options.symbols ? "checked" : "unchecked"}
            uncheckedColor={isValidBackgroundColor}
            onPress={() => {
              const newOptions = {
                ...options,
                symbols: !options.symbols,
              };
              this.checkOptionsAreValid(newOptions);
              onOptionsChange(newOptions);
            }}
          />
          <Text style={{ fontSize: 16, color: isValidColor }}>!@%</Text>
        </View>
      </View>
    );
  }
}
