import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Text, Button, Title } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import TextInput from "../ui/TextInput";
import Styles from "../ui/Styles";
import { addError } from "../errors/errorsActions";
import { signIn } from "./authActions";

export class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  render() {
    const { email, password, isLoading } = this.state;
    const { navigation, config, addError, signIn } = this.props;
    const { lesspassDatabaseEncryptMasterPassword } = config;
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={Styles.container}
          behavior="padding"
          enabled
        >
          <Title>Connect to Lesspass Database</Title>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <MasterPassword
            label={
              lesspassDatabaseEncryptMasterPassword
                ? "Master Password"
                : "Password"
            }
            masterPassword={password}
            hideFingerprint={!lesspassDatabaseEncryptMasterPassword}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            compact
            icon={"account-circle"}
            mode="contained"
            style={Styles.loginSignInButton}
            disabled={isEmpty(email) || isEmpty(password) || isLoading}
            onPress={() => {
              this.setState({ isLoading: true });
              signIn(
                {
                  email,
                  password
                },
                lesspassDatabaseEncryptMasterPassword
              )
                .then(() => navigation.navigate("App"))
                .catch(() => {
                  this.setState({ isLoading: false });
                  let errorMessage =
                    "Unable to log in with provided credentials.";
                  if (lesspassDatabaseEncryptMasterPassword) {
                    errorMessage +=
                      " Your master password is encrypted. Uncheck this option in your settings if you don't use it.";
                  }
                  addError(errorMessage);
                });
            }}
          >
            Sign In
          </Button>
          <Text>Don't have an account?</Text>
          <Button
            compact
            icon="account-circle"
            mode="outlined"
            style={Styles.loginSignUpButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Button>
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

function mapDispatchToProps(dispatch) {
  return {
    addError: message => dispatch(addError(message)),
    signIn: (credentials, encryptMasterPassword) =>
      dispatch(signIn(credentials, encryptMasterPassword))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
