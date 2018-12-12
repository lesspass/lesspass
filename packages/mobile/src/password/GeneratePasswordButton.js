import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import Theme from "../ui/Theme";

export default class PasswordGeneratorScreen extends Component {
  state = {
    isGenerating: false
  };
  render() {
    const { isGenerating } = this.state;
    const { onPress, isDisabled } = this.props;
    const disabled = isDisabled();
    const Wrapper = disabled
      ? TouchableNativeFeedback
      : TouchableWithoutFeedback;
    return (
      <Wrapper
        onPress={() => {
          this.setState({ isGenerating: !isGenerating }, onPress);
        }}
      >
        <View
          style={{
            backgroundColor:
              disabled && !isGenerating
                ? Theme.colors.primary
                : Theme.colors.disabled,
            borderRadius: Theme.roundness,
            padding: 14
          }}
        >
          <Text
            style={{
              color: Theme.colors.white,
              textAlign: "center",
              fontSize: 16
            }}
          >
            GENERATE
          </Text>
        </View>
      </Wrapper>
    );
  }
}
