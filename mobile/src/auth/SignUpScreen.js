import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Title, useTheme } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import TextInput from "../ui/TextInput";
import Styles from "../ui/Styles";
import { addError } from "../errors/errorsActions";
import { signUp } from "./authActions";
import { isEmpty } from "lodash";
import routes from "../routes";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const encryptMasterPassword = useSelector(
    (state) => state.settings.encryptMasterPassword
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={Styles.innerContainer}>
          <Title style={Styles.title}>Create an account</Title>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <MasterPassword
            label={encryptMasterPassword ? "Master Password" : "Password"}
            masterPassword={password}
            hideFingerprint={!encryptMasterPassword}
            onChangeText={setPassword}
          />
          <Button
            icon="account-circle"
            mode="contained"
            style={{
              marginTop: 10,
              marginBottom: 30,
            }}
            disabled={isEmpty(email) || isEmpty(password) || isLoading}
            onPress={() => {
              setIsLoading(true);
              dispatch(
                signUp(
                  {
                    email: email.trim(),
                    password,
                  },
                  encryptMasterPassword
                )
              )
                .then(() => navigation.navigate(routes.PASSWORD_GENERATOR))
                .catch(() => {
                  dispatch(
                    addError(
                      "Unable to sign up. Try in a few minutes or contact an administrator."
                    )
                  );
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }}
          >
            Sign Up
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate(routes.SIGN_IN)}
          >
            Already have an account? Sign In
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
