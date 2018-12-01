import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  NativeModules,
  Clipboard,
  Text
} from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-paper";
import renderLessPassPassword from "lesspass-render-password";
import Styles from "../ui/Styles";
import Switch from "../ui/Switch";
import TextInput from "../ui/TextInput";
import TextInputModal from "../ui/TextInputModal";
import MasterPassword from "./MasterPassword";
import AutocompleteTextInput from "../ui/autocomplete/AutocompleteTextInput";

export class PasswordGeneratorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this._getInitialState()
    };
  }

  _getInitialState = () => {
    return {
      showOptions: false,
      site: "",
      login: "",
      masterPassword: "",
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true,
      length: "16",
      counter: "1",
      password: null,
      seePassword: false,
      copied: false,
      showAutocomplete: true
    };
  };

  copyPassword = () => {
    const { password } = this.state;
    Clipboard.setString(password);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  };

  generatePassword() {
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
    NativeModules.LessPass.calcEntropy(
      site,
      login,
      masterPassword,
      counter
    ).then(entropy => {
      var options = {
        length,
        lowercase,
        uppercase,
        digits,
        symbols
      };
      var password = renderLessPassPassword(entropy, options);
      this.setState({ password });
    });
    setTimeout(() => {
      this.clear();
    }, 30000);
  }

  clear = () => {
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
      showAutocomplete
    } = this.state;
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
            data={[
              { site: "lesspass.com", login: "guillaume@oslab.fr" },
              { site: "lastpass.com" }
            ]}
            dataKey="site"
            onDataSelected={profile =>
              this.setState({ ...profile, showAutocomplete: false })
            }
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
                onPress={() => this.generatePassword()}
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
                  onPress={() => this.copyPassword()}
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
                  onPress={() => this.clear()}
                >
                  clear
                </Button>
              </React.Fragment>
            ) : (
              <Button
                compact
                mode="contained"
                disabled={!masterPassword}
                onPress={() => this.generatePassword()}
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
    config: state.config
  };
}

export default connect(mapStateToProps)(PasswordGeneratorScreen);
