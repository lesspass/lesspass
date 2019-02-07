import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback, Clipboard } from "react-native";
import Theme from "../ui/Theme";
import Icon from "react-native-vector-icons/FontAwesome";

export default class GeneratedPassword extends Component {
  state = {
    copied: false,
    saved: false,
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

  _save = () => {
    this.props.save();
    this.setState({ saved: true });
    setTimeout(() => {
      this.setState({ saved: false });
    }, 3000);
  };

  _clear = () => {
    const { clear } = this.props;
    Clipboard.setString("");
    clear();
  };

  render() {
    const { copied, saved, seePassword } = this.state;
    const { isAuthenticated, password, save } = this.props;
    if (!password) return null;
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
                fontSize: 16,
                fontFamily: "monospace"
              }}
            >
              {saved && "SAVED"}
              {copied && "COPIED"}
              {saved || copied
                ? null
                : seePassword
                ? password
                : "*".repeat(password.length)}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableNativeFeedback onPress={() => this._copyPassword()}>
            <View
              style={{
                borderRadius: Theme.roundness,
                marginTop: 5,
                padding: 14,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                size={18}
                name="clipboard"
                style={{ marginRight: 10, color: Theme.colors.primary }}
              />
              <Text
                style={{
                  color: Theme.colors.primary,
                  textAlign: "center",
                  fontSize: 16
                }}
              >
                copy
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              this.setState(prevState => ({
                seePassword: !prevState.seePassword
              }))
            }
          >
            <View
              style={{
                borderRadius: Theme.roundness,
                marginTop: 5,
                padding: 14,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                size={18}
                name="eye"
                style={{ marginRight: 10, color: Theme.colors.primary }}
              />
              <Text
                style={{
                  color: Theme.colors.primary,
                  textAlign: "center",
                  fontSize: 16
                }}
              >
                {seePassword ? "hide" : "show"}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this._clear()}>
            <View
              style={{
                borderRadius: Theme.roundness,
                marginTop: 5,
                padding: 14,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                size={18}
                name="refresh"
                style={{ marginRight: 10, color: Theme.colors.primary }}
              />
              <Text
                style={{
                  color: Theme.colors.primary,
                  textAlign: "center",
                  fontSize: 16
                }}
              >
                clear
              </Text>
            </View>
          </TouchableNativeFeedback>
          {isAuthenticated && (
            <TouchableNativeFeedback onPress={() => this._save()}>
              <View
                style={{
                  borderRadius: Theme.roundness,
                  marginTop: 5,
                  padding: 14,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon
                  size={18}
                  name="save"
                  style={{ marginRight: 10, color: Theme.colors.primary }}
                />
                <Text
                  style={{
                    color: Theme.colors.primary,
                    textAlign: "center",
                    fontSize: 16
                  }}
                >
                  save
                </Text>
              </View>
            </TouchableNativeFeedback>
          )}
        </View>
      </React.Fragment>
    );
  }
}
