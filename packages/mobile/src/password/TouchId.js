import React, { Component } from "react";
import { connect } from "react-redux";
import TouchID from "react-native-touch-id";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Styles from "../ui/Styles";
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
    const { settings } = this.props;
    const { keepMasterPasswordLocally = false } = settings;
    if (!keepMasterPasswordLocally) return null;
    return (
      <View style={Styles.fingerprint}>
        <IconButton
          icon="fingerprint"
          onPress={() => this.getMasterPasswordSavedLocally()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

export default connect(mapStateToProps)(TouchId);
