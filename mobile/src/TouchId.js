import React, { Component } from "react";
import { connect } from "react-redux";
import TouchID from "react-native-touch-id";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Theme from "./Theme";
import { getGenericPassword } from "react-native-keychain";

export class TouchId extends Component {
  getMasterPasswordSavedLocally = () => {
    const { onChangeText } = this.props;
    TouchID.authenticate()
      .then(() => {
        return getGenericPassword().then(credentials => {
          if (credentials) {
            onChangeText(credentials.password);
          }
        });
      })
      .catch(error =>
        console.log("TouchId getMasterPasswordSavedLocally error", error)
      );
  };

  render() {
    const { config } = this.props;
    const { keepMasterPasswordLocally = false } = config;
    if (!keepMasterPasswordLocally) return null;
    return (
      <View
        style={{
          position: "absolute",
          right: 3,
          top: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IconButton
          icon="fingerprint"
          color={Theme.colors.orange}
          onPress={() => this.getMasterPasswordSavedLocally()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

export default connect(mapStateToProps)(TouchId);
