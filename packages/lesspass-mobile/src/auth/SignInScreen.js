import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  View,
} from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import MasterPassword from "../password/MasterPassword";
import TextInput from "../ui/TextInput";
import { addError } from "../errors/errorsActions";
import { signIn } from "./authActions";
import routes from "../routes";
import { useNavigation } from "@react-navigation/native";
import { setSettings } from "../settings/settingsActions";
import Styles from "../ui/Styles";
import { useTranslation } from "react-i18next";

export default function SignInScreen() {
  const defaultBaseURL = useSelector((state) => state.settings.baseURL);
  const [baseURL, setBaseURL] = useState(defaultBaseURL);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const encryptMasterPassword = useSelector(
    (state) => state.settings.encryptMasterPassword,
  );
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        ...Styles.container,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text
        variant="titleLarge"
        style={{
          ...Styles.title,
        }}
      >
        {t("SignInPage.SignInToLessPass")}
      </Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextInput
            mode="outlined"
            label={t("SignInForm.LessPassServer")}
            value={baseURL}
            onChangeText={setBaseURL}
          />
          <TextInput
            mode="outlined"
            label={t("SignInForm.Email")}
            value={email}
            onChangeText={setEmail}
          />
          <MasterPassword
            label={t("SignInForm.MasterPassword")}
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
            disabled={
              baseURL === "" || email === "" || password === "" || isLoading
            }
            onPress={() => {
              setIsLoading(true);
              dispatch(setSettings({ baseURL }));
              dispatch(
                signIn(
                  {
                    email: email.trim(),
                    password,
                  },
                  encryptMasterPassword,
                ),
              )
                .then(() => navigation.navigate(routes.PASSWORD_GENERATOR))
                .catch(() => {
                  setIsLoading(false);
                  let errorMessage = t("SignInPage.UnableToSignInMessage");
                  if (encryptMasterPassword) {
                    errorMessage +=
                      " " +
                      t(
                        "SignInPage.MasterPasswordEncryptedNote",
                        "Your master password is encrypted. Uncheck this option in your settings if you don't use it.",
                      );
                  }
                  dispatch(addError(errorMessage));
                });
            }}
          >
            {t("SignInPage.SignIn")}
          </Button>
          <Text variant="bodyMedium">
            {t("SignInPage.LessPassServerDecommissioned")}{" "}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() =>
                Linking.openURL(
                  "https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database",
                )
              }
            >
              {t("SignInPage.SeeBlogPost", "See blog post")}
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
