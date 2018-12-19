import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { isEqual } from "lodash";
import { generatePassword } from "./passwordGenerator";
import TextInput from "../ui/TextInput";
import Counter from "./Counter";
import Options from "./Options";
import GeneratePasswordButton from "./GeneratePasswordButton";
import GeneratedPassword from "./GeneratedPassword";
import MasterPassword from "./MasterPassword";
import AutocompleteTextInput from "../ui/autocomplete/AutocompleteTextInput";
import { getPasswordProfiles } from "./profilesActions";
import { signOut } from "../auth/authActions";
import {
  isProfileValid,
  isLengthValid,
  isCounterValid,
  areOptionsValid
} from "./validations";

export class PasswordGeneratorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this._getInitialState()
    };
  }

  componentDidMount() {
    const { auth, getPasswordProfiles, signOut, navigation } = this.props;
    if (auth.jwt) {
      getPasswordProfiles().catch(() => {
        signOut();
        navigation.navigate("Auth");
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props.settings, prevProps.settings)) {
      const initialState = this._getInitialState();
      this.setState(initialState);
    }
    const passwordProfile = this._getPasswordProfile(this.state);
    const previousPasswordProfile = this._getPasswordProfile(prevState);
    if (!isEqual(passwordProfile, previousPasswordProfile)) {
      clearTimeout(this.state.clearTimeout);
      this.setState({ password: null, clearTimeout: null });
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
    } = this.props.settings;
    return {
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
      showAutocomplete: true,
      clearTimeout: null
    };
  };

  _getPasswordProfile = state => {
    const {
      site,
      login,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter
    } = state;
    return {
      site,
      login,
      options: { length, counter, lowercase, uppercase, digits, symbols }
    };
  };

  _generatePassword = async () => {
    const passwordProfile = this._getPasswordProfile(this.state);
    const { masterPassword } = this.state;
    const password = await generatePassword(masterPassword, passwordProfile);
    const clearTimeout = setTimeout(() => {
      this._clear();
    }, 60 * 1000);
    this.setState({ password, clearTimeout });
  };

  _canGeneratePassword = () => {
    const passwordProfile = this._getPasswordProfile(this.state);
    const { masterPassword } = this.state;
    return masterPassword && isProfileValid(passwordProfile);
  };

  _clear = () => {
    this.setState({ ...this._getInitialState() });
  };

  render() {
    const {
      site,
      login,
      masterPassword,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter,
      showAutocomplete,
      password
    } = this.state;
    const { profiles } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ showAutocomplete: false })}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            style={{
              flex: 1,
              padding: 12,
              zIndex: 1,
              backgroundColor: "transparent"
            }}
          >
            <View onStartShouldSetResponder={() => true}>
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
                hideAutocomplete={() =>
                  this.setState({ showAutocomplete: false })
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
                onChangeText={masterPassword =>
                  this.setState({ masterPassword })
                }
              />
              <Options
                options={{ lowercase, uppercase, digits, symbols }}
                areOptionsValid={areOptionsValid}
                onOptionsChange={options => {
                  this.setState({ ...options });
                }}
                style={{
                  marginTop: 10
                }}
              />
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 30,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Counter
                  label="Length"
                  value={length}
                  isValueValid={isLengthValid}
                  minValue={5}
                  maxValue={35}
                  onValueChange={value => {
                    this.setState({
                      length: value
                    });
                  }}
                />
                <Counter
                  label="Counter"
                  value={counter}
                  isValueValid={isCounterValid}
                  minValue={1}
                  onValueChange={value => {
                    this.setState({
                      counter: value
                    });
                  }}
                />
              </View>
              {password ? (
                <GeneratedPassword password={password} clear={this._clear} />
              ) : (
                <GeneratePasswordButton
                  isDisabled={this._canGeneratePassword}
                  onPress={() => this._generatePassword()}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    auth: state.auth,
    profiles: state.profiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPasswordProfiles: () => dispatch(getPasswordProfiles()),
    signOut: () => dispatch(signOut())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordGeneratorScreen);
