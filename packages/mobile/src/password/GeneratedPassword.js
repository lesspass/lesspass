import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback, Clipboard } from "react-native";
import Theme from "../ui/Theme";
import { Button } from "react-native-paper";

export default class GeneratedPassword extends Component {
  state = {
    copied: false,
    seePassword: false
  };

  _copyPassword = () => {
    const { password } = this.props;
    Clipboard.setString(password);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  };

  render() {
    const { copied, seePassword } = this.state;
    const { password, clear } = this.props;
    return (
      <React.Fragment>
        <TouchableNativeFeedback onPress={this._copyPassword}>
          <View
            style={{
              backgroundColor: Theme.colors.primary,
              borderRadius: Theme.roundness,
              marginTop: 5,
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
              {copied ? (
                "COPIED"
              ) : seePassword ? (
                <Text style={{ fontSize: 16, fontFamily: "monospace" }}>
                  {password}
                </Text>
              ) : (
                <Text style={{ fontSize: 16, fontFamily: "monospace" }}>
                  {"*".repeat(password.length)}
                </Text>
              )}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10
          }}
        >
          <Button
            compact
            icon="content-copy"
            mode="text"
            onPress={() => this._copyPassword()}
          >
            Copy
          </Button>
          <Button
            compact
            icon="remove-red-eye"
            mode="text"
            onPress={() =>
              this.setState(prevState => ({
                seePassword: !prevState.seePassword
              }))
            }
          >
            {seePassword ? "hide" : "show"}
          </Button>
          <Button compact icon="refresh" mode="text" onPress={() => clear()}>
            clear
          </Button>
        </View>
      </React.Fragment>
    );
  }
}
