import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";
import TouchID from "react-native-touch-id";
import { setGenericPassword } from "react-native-keychain";
import { setConfig } from "../config/configActions";
import TextInputModal from "../ui/TextInputModal";
import Switch from "../ui/Switch";
import KeepMasterPasswordOption from "./KeepMasterPasswordOption";

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprintIsSupported: false
    };
  }

  componentDidMount() {
    TouchID.isSupported()
      .then(() => {
        this.setState({ fingerprintIsSupported: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { fingerprintIsSupported } = this.state;
    const { config, setConfig } = this.props;
    const {
      keepMasterPasswordLocally,
      lesspassDatabaseDefaultUrl,
      lesspassDatabaseEncryptMasterPassword,
      defaultPasswordProfileLogin,
      defaultGeneratedPasswordLength,
      defaultLowercase,
      defaultUppercase,
      defaultDigits,
      defaultSymbols,
      defaultCounter
    } = config;
    return (
      <ScrollView style={{ flex: 1 }}>
        <List.Section title="LESSPASS DATABASE">
          <TextInputModal
            label="Default URL"
            value={lesspassDatabaseDefaultUrl}
            onOk={value => setConfig({ lesspassDatabaseDefaultUrl: value })}
            modalTitle="LessPass Database default URL"
          />
          <Divider />
          <Switch
            label="Use my master password"
            description={
              "Use your master password in the sign in form but send encrypted password."
            }
            value={lesspassDatabaseEncryptMasterPassword}
            onChange={value =>
              setConfig({ lesspassDatabaseEncryptMasterPassword: value })
            }
          />
          <Divider />
        </List.Section>
        <List.Section title="DEFAULT PASSWORD PROFILE">
          <TextInputModal
            label="Login"
            value={defaultPasswordProfileLogin}
            onOk={value => setConfig({ defaultPasswordProfileLogin: value })}
            modalTitle="Default login"
          />
          <Divider />
          <TextInputModal
            label="Password length"
            value={defaultGeneratedPasswordLength}
            variant="numeric"
            onOk={value => {
              setConfig({
                defaultGeneratedPasswordLength: parseInt(value)
              });
            }}
            modalTitle="Default password length"
          />
          <Divider />
          <TextInputModal
            label="Counter"
            value={defaultCounter}
            variant="numeric"
            onOk={value => {
              setConfig({
                defaultCounter: parseInt(value)
              });
            }}
            modalTitle="Default counter"
          />
          <Divider />
          <Switch
            label="Lowercase (a-z)"
            description={defaultLowercase ? "activated" : "deactivated"}
            value={defaultLowercase}
            onChange={value => setConfig({ defaultLowercase: value })}
          />
          <Divider />
          <Switch
            label="Uppercase (A-Z)"
            description={defaultUppercase ? "activated" : "deactivated"}
            value={defaultUppercase}
            onChange={value => setConfig({ defaultUppercase: value })}
          />
          <Divider />
          <Switch
            label="Numbers (0-9)"
            description={defaultDigits ? "activated" : "deactivated"}
            value={defaultDigits}
            onChange={value => setConfig({ defaultDigits: value })}
          />
          <Divider />
          <Switch
            label="Symbols (%!@)"
            description={defaultSymbols ? "activated" : "deactivated"}
            value={defaultSymbols}
            onChange={value => setConfig({ defaultSymbols: value })}
          />
          <Divider />
        </List.Section>
        {fingerprintIsSupported && (
          <React.Fragment>
            <List.Section title="INSECURE OPTIONS">
              <KeepMasterPasswordOption
                label="Master Password"
                description={
                  keepMasterPasswordLocally
                    ? "Your master password is encrypted locally"
                    : "Keep master password locally"
                }
                value={keepMasterPasswordLocally}
                onOk={masterPassword => {
                  TouchID.authenticate()
                    .then(() =>
                      setGenericPassword("masterPassword", masterPassword)
                    )
                    .then(() => setConfig({ keepMasterPasswordLocally: true }))
                    .catch(error => console.log(error));
                }}
                onClear={() => setConfig({ keepMasterPasswordLocally: false })}
                modalTitle="Enter your master password"
                modalDescription="Your master password will be encrypted locally on your device and accessible only with your fingerprint."
              />
            </List.Section>
            <Divider />
          </React.Fragment>
        )}
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
