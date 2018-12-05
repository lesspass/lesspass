import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Clipboard,
  Text
} from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-paper";
import { isEqual } from "lodash";
import { generatePassword } from "./passwordGenerator";
import Styles from "../ui/Styles";
import Switch from "../ui/Switch";
import TextInput from "../ui/TextInput";
import TextInputModal from "../ui/TextInputModal";
import MasterPassword from "./MasterPassword";
import AutocompleteTextInput from "../ui/autocomplete/AutocompleteTextInput";
import { getPasswordProfiles } from "./profilesActions";

export class PasswordGeneratorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this._getInitialState()
    };
  }

  componentDidMount() {
    const { auth, getPasswordProfiles } = this.props;
    if (auth.jwt) {
      getPasswordProfiles();
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.config, prevProps.config)) {
      const initialState = this._getInitialState();
      this.setState(initialState);
    }
  }

  _getInitialState = () => {
    const {
      defaultPasswordProfileLogin,
      defaultGeneratedPasswordLength,
      defaultLowercase,
      defaultUppercase,
      defaultDigits,
      defaultSymbols,
      defaultCounter
    } = this.props.config;
    return {
      showOptions: false,
      site: "",
      login: defaultPasswordProfileLogin,
      masterPassword: "",
      lowercase: defaultLowercase,
      uppercase: defaultUppercase,
      digits: defaultDigits,
      symbols: defaultSymbols,
      length: defaultGeneratedPasswordLength,
      counter: defaultCounter,
      password: null,
      seePassword: false,
      copied: false,
      showAutocomplete: true,
      generating: false
    };
  };

  _copyPassword = () => {
    const { password } = this.state;
    Clipboard.setString(password);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  };

  _generatePassword = async () => {
    const {
      site,
      login,
      masterPassword,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter
    } = this.state;
    const password = await generatePassword(masterPassword, {
      site,
      login,
      options: { lowercase, uppercase, digits, symbols, length, counter }
    });
    this.setState({ password, generating: false });
    setTimeout(() => {
      this._clear();
    }, 30000);
  };

  _clear = () => {
    this.setState({ ...this._getInitialState() });
    Clipboard.setString("");
  };

  render() {
    const {
      showOptions,
      site,
      login,
      masterPassword,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter,
      seePassword,
      copied,
      password,
      showAutocomplete,
      generating
    } = this.state;
    const { profiles } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={Styles.container}
          behavior="padding"
          enabled
        >
          <AutocompleteTextInput
            label="Site"
            value={site}
            showAutocomplete={showAutocomplete}
            onChangeText={site =>
              this.setState({ site, showAutocomplete: true })
            }
            data={Object.values(profiles)}
            dataKey="site"
            onDataSelected={profile => {
              this.setState({ ...profile, showAutocomplete: false });
            }}
          />
          <TextInput
            mode="outlined"
            label="Login"
            value={login}
            onChangeText={login => this.setState({ login })}
          />
          <MasterPassword
            masterPassword={masterPassword}
            onChangeText={masterPassword => this.setState({ masterPassword })}
          />
          {password ? (
            <View
              style={{
                width: "100%",
                paddingTop: 10
              }}
            >
              <Button
                mode="contained"
                onPress={() => this._copyPassword()}
                style={{ alignSelf: "stretch" }}
              >
                {copied ? (
                  "Copied"
                ) : seePassword ? (
                  <Text style={{ fontSize: 16, fontFamily: "monospace" }}>
                    {password}
                  </Text>
                ) : (
                  <Text style={{ fontSize: 16, fontFamily: "monospace" }}>
                    ********************
                  </Text>
                )}
              </Button>
            </View>
          ) : null}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10
            }}
          >
            {password ? (
              <React.Fragment>
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
                <Button
                  compact
                  icon="refresh"
                  mode="text"
                  onPress={() => this._clear()}
                >
                  clear
                </Button>
              </React.Fragment>
            ) : (
              <Button
                compact
                mode="contained"
                disabled={!masterPassword || generating}
                onPress={() => {
                  this.setState({ generating: true }, this._generatePassword);
                }}
              >
                Generate Password
              </Button>
            )}

            <Button
              compact
              icon="settings"
              mode="text"
              onPress={() =>
                this.setState(prevState => ({
                  showOptions: !prevState.showOptions
                }))
              }
            >
              Options
            </Button>
          </View>
          {showOptions ? (
            <React.Fragment>
              <TextInputModal
                label="Password length"
                value={length}
                variant="numeric"
                onOk={value => {
                  this.setState({
                    length: parseInt(value)
                  });
                }}
                modalTitle="Password length"
              />
              <TextInputModal
                label="Counter"
                value={counter}
                variant="numeric"
                onOk={value => {
                  this.setState({
                    counter: parseInt(value)
                  });
                }}
                modalTitle="Counter"
              />
              <Switch
                label="Lowercase (a-z)"
                value={lowercase}
                onChange={value => this.setState({ lowercase: value })}
              />
              <Switch
                label="Uppercase (A-Z)"
                value={uppercase}
                onChange={value => this.setState({ uppercase: value })}
              />
              <Switch
                label="Numbers (0-9)"
                value={digits}
                onChange={value => this.setState({ digits: value })}
              />
              <Switch
                label="Symbols (%!@)"
                value={symbols}
                onChange={value => this.setState({ symbols: value })}
              />
            </React.Fragment>
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    config: state.config,
    auth: state.auth,
    profiles: state.profiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPasswordProfiles: () => dispatch(getPasswordProfiles())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordGeneratorScreen);
