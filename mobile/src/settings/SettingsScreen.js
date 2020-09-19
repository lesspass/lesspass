import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";
import TouchID from "react-native-touch-id";
import { setGenericPassword } from "react-native-keychain";
import { setSettings } from "./settingsActions";
import TextInputModal from "./TextInputModal";
import Switch from "../ui/Switch";
import KeepMasterPasswordOption from "./KeepMasterPasswordOption";
import { version } from "../version.json";

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fingerprintIsSupported: false
    };
  }

  componentDidMount() {
    TouchID
      .isSupported({
        passcodeFallback: false
      })
      .then(() => {
        this.setState({ fingerprintIsSupported: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { fingerprintIsSupported } = this.state;
    const { settings, setSettings } = this.props;
    const {
      keepMasterPasswordLocally,
      lesspassDatabaseDefaultUrl,
      encryptMasterPassword,
      defaultPasswordProfileLogin,
      defaultGeneratedPasswordLength,
      defaultLowercase,
      defaultUppercase,
      defaultDigits,
      defaultSymbols,
      defaultCounter
    } = settings;
    return (
      <ScrollView style={{ flex: 1 }}>
        <List.Section title="LESSPASS DATABASE">
          <TextInputModal
            label="Default URL"
            value={lesspassDatabaseDefaultUrl}
            onOk={value => setSettings({ lesspassDatabaseDefaultUrl: value })}
            modalTitle="LessPass Database default URL"
          />
          <Divider />
          <Switch
            label="Use my master password"
            description={
              "Use your master password in the sign in form but send encrypted password."
            }
            value={encryptMasterPassword}
            onChange={value => setSettings({ encryptMasterPassword: value })}
          />
          <Divider />
        </List.Section>
        <List.Section title="DEFAULT PASSWORD PROFILE">
          <TextInputModal
            isRequired={false}
            label="Login"
            value={defaultPasswordProfileLogin}
            onOk={value => setSettings({ defaultPasswordProfileLogin: value })}
            modalTitle="Default login"
          />
          <Divider />
          <TextInputModal
            label="Password length"
            value={defaultGeneratedPasswordLength}
            variant="numeric"
            onOk={value => {
              setSettings({
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
              setSettings({
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
            onChange={value => setSettings({ defaultLowercase: value })}
          />
          <Divider />
          <Switch
            label="Uppercase (A-Z)"
            description={defaultUppercase ? "activated" : "deactivated"}
            value={defaultUppercase}
            onChange={value => setSettings({ defaultUppercase: value })}
          />
          <Divider />
          <Switch
            label="Numbers (0-9)"
            description={defaultDigits ? "activated" : "deactivated"}
            value={defaultDigits}
            onChange={value => setSettings({ defaultDigits: value })}
          />
          <Divider />
          <Switch
            label="Symbols (%!@)"
            description={defaultSymbols ? "activated" : "deactivated"}
            value={defaultSymbols}
            onChange={value => setSettings({ defaultSymbols: value })}
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
                    .then(() =>
                      setSettings({ keepMasterPasswordLocally: true })
                    )
                    .catch(error => console.log(error));
                }}
                onClear={() =>
                  setSettings({ keepMasterPasswordLocally: false })
                }
                modalTitle="Enter your master password"
                modalDescription="Your master password will be encrypted locally on your device and accessible only with your fingerprint."
              />
            </List.Section>
            <Divider />
          </React.Fragment>
        )}
        <List.Section title="APPLICATION">
          <List.Item title={`LessPass version: ${version}`} />
        </List.Section>
        <Divider />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSettings: settings => dispatch(setSettings(settings)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
