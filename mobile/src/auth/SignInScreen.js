import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Linking,
} from "react-native";
import { Text, Button, Title, useTheme } from "react-native-paper";
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
          <Title style={Styles.title}>Connect to Lesspass Database</Title>
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
            icon={"account-circle"}
            mode="contained"
            style={{
              marginTop: 10,
              marginBottom: 30,
            }}
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
          <View>
            <Text style={{ color: theme.colors.error }}>
              LessPass Database server will be turned off on March 1th, 2023.
              You can export your passwords using the web extension, the CLI or
              the web site.
            </Text>
            <Button
              mode="text"
              onPress={() => {
                Linking.openURL(
                  "https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database"
                );
              }}
              style={{
                marginTop: 10,
              }}
            >
              See announcement
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
