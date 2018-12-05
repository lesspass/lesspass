import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Text, Button, Title } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import TextInput from "../ui/TextInput";
import Styles from "../ui/Styles";

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  render() {
    const { login, password } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={Styles.container}
          behavior="padding"
          enabled
        >
          <Title>Create an account</Title>
          <TextInput
            mode="outlined"
            label="Login"
            value={login}
            onChangeText={login => this.setState({ login })}
          />
          <MasterPassword
            label="Password"
            masterPassword={password}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            compact
            icon="account-circle"
            mode="contained"
            style={Styles.loginSignInButton}
            onPress={() => console.log("pressed")}
          >
            Sign Up
          </Button>
          <Text>Already have an account?</Text>
          <Button
            compact
            icon="account-circle"
            mode="outlined"
            style={Styles.loginSignUpButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign In
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

export default connect(mapStateToProps)(SignUpScreen);
