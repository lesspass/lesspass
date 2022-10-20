import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Text, Button, Title } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import TextInput from "../ui/TextInput";
import Styles from "../ui/Styles";
import { addError } from "../errors/errorsActions";
import { signIn } from "./authActions";
import routes from "../routes";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { encryptMasterPassword } = settings;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={Styles.innerContainer}>
          <Title>Connect to Lesspass Database</Title>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
          />
          <MasterPassword
            label={encryptMasterPassword ? "Master Password" : "Password"}
            masterPassword={password}
            hideFingerprint={!encryptMasterPassword}
            onChangeText={(password) => setPassword(password)}
          />
          <Button
            compact
            icon={"account-circle"}
            mode="contained"
            style={Styles.loginSignInButton}
            disabled={isEmpty(email) || isEmpty(password) || isLoading}
            onPress={() => {
              setIsLoading(true);
              dispatch(
                signIn(
                  {
                    email,
                    password,
                  },
                  encryptMasterPassword
                )
              )
                .then(() => navigation.navigate(routes.PASSWORD_GENERATOR))
                .catch(() => {
                  setIsLoading(false);
                  let errorMessage =
                    "Unable to log in with provided credentials.";
                  if (encryptMasterPassword) {
                    errorMessage +=
                      " Your master password is encrypted. Uncheck this option in your settings if you don't use it.";
                  }
                  dispatch(addError(errorMessage));
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
            onPress={() => navigation.navigate(routes.SIGN_UP)}
          >
            Sign Up
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
