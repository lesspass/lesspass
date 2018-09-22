import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View } from "react-native";
import { Divider } from "react-native-paper";
import Header from "./Header";
import { setConfig } from "./Config/ConfigActions";
import Switch from "./Switch";
import KeepMasterPasswordLocallyModal from "./KeepMasterPasswordLocallyModal";

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeMasterPasswordModal: false
    };
  }

  _showDialog = () => this.setState({ seeMasterPasswordModal: true });

  _hideDialog = () => this.setState({ seeMasterPasswordModal: false });

  render() {
    const { config, setConfig } = this.props;
    const { keepMasterPasswordLocally = false } = config;
    const { seeMasterPasswordModal } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeepMasterPasswordLocallyModal
          onOk={() => {
            setConfig({ keepMasterPasswordLocally: true });
            this._hideDialog();
          }}
          onError={error => {
            console.log("KeepMasterPasswordLocallyModal error", error);
            this._hideDialog();
          }}
          visible={seeMasterPasswordModal}
          close={this._hideDialog}
        />
        <Header />
        <Switch
          on={keepMasterPasswordLocally}
          onValueChange={() => {
            if (keepMasterPasswordLocally) {
              setConfig({ keepMasterPasswordLocally: false });
            } else {
              this._showDialog();
            }
          }}
        >
          Keep master password locally
        </Switch>
        <Divider />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setConfig: config => {
      dispatch(setConfig(config));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
