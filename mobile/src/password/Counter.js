import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Theme from "../ui/Theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { isNaN } from "lodash";

export default class Counter extends Component {
  state = {
    isValid: true
  };

  checkOptionsAreValid = value => {
    const { isValueValid } = this.props;
    if (isValueValid(value)) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  setNewValue = value => {
    const { onValueChange } = this.props;
    if (isNaN(value)) {
      onValueChange("");
    } else {
      onValueChange(value);
    }
  };

  render() {
    const {
      label,
      value,
      onValueChange,
      minValue,
      maxValue,
      ...props
    } = this.props;
    const { isValid } = this.state;
    const isValidBackgroundColor = isValid
      ? Theme.colors.primary
      : Theme.colors.red;
    return (
      <View {...props}>
        <Text
          style={{
            marginBottom: 6,
            color: isValid ? Theme.colors.black : Theme.colors.red
          }}
        >
          {label}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: Theme.roundness,
              borderTopLeftRadius: Theme.roundness,
              borderWidth: 1,
              borderColor: isValidBackgroundColor,
              backgroundColor: isValidBackgroundColor,
              paddingVertical: 6,
              paddingHorizontal: 16
            }}
            onPress={() => {
              const newValue = value - 1;
              if (!minValue || newValue >= minValue) {
                this.checkOptionsAreValid(newValue);
                this.setNewValue(newValue);
              }
            }}
          >
            <Icon
              size={12}
              name="minus"
              style={{
                color: Theme.colors.white
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 16,
              backgroundColor: Theme.colors.white,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: isValidBackgroundColor
            }}
          >
            <TextInput
              onFocus={() => onValueChange("")}
              value={value.toString()}
              keyboardType="numeric"
              style={{
                paddingVertical: 0,
                color: isValid ? Theme.colors.primary : Theme.colors.red,
                textAlign: "center"
              }}
              onChangeText={text => {
                try {
                  const newValue = parseInt(text);
                  this.checkOptionsAreValid(newValue);
                  this.setNewValue(newValue);
                } catch (error) {}
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderBottomRightRadius: Theme.roundness,
              borderTopRightRadius: Theme.roundness,
              borderWidth: 1,
              borderColor: isValidBackgroundColor,
              backgroundColor: isValidBackgroundColor,
              paddingHorizontal: 16
            }}
            onPress={() => {
              const newValue = value + 1;
              if (!maxValue || newValue <= maxValue) {
                this.checkOptionsAreValid(newValue);
                this.setNewValue(newValue);
              }
            }}
          >
            <Icon
              size={12}
              name="plus"
              style={{
                color: Theme.colors.white
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
