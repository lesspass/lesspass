import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Linking,
} from "react-native";
import { generatePassword } from "./passwordGenerator";
import TextInput from "../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../ui/Styles";
import Counter from "./Counter";
import Options from "./Options";
import MasterPassword from "./MasterPassword";
import { NativeModules } from "react-native";
import { savePasswordProfile, updatePasswordProfile } from "./profilesActions";
import { cleanPasswordProfile } from "../profiles/profileActions";
import {
  isProfileValid,
  isLengthValid,
  isCounterValid,
  areOptionsValid,
} from "./validations";
import { Button, Snackbar, Text, useTheme } from "react-native-paper";
import { addError, cleanErrors } from "../errors/errorsActions";
import { readMessage } from "../messages/messagesActions";

function _getInitialState(settings) {
  return {
    id: null,
    site: "",
    login: settings.defaultPasswordProfileLogin,
    masterPassword: "",
    lowercase: settings.defaultLowercase,
    uppercase: settings.defaultUppercase,
    digits: settings.defaultDigits,
    symbols: settings.defaultSymbols,
    length: settings.defaultGeneratedPasswordLength,
    counter: settings.defaultCounter,
    copyPasswordAfterGeneration: settings.copyPasswordAfterGeneration,
    password: null,
  };
}
function _getPasswordProfile(state) {
  return {
    id: state.id,
    site: state.site,
    login: state.login,
    lowercase: state.lowercase,
    uppercase: state.uppercase,
    number: state.digits,
    digits: state.digits,
    symbols: state.symbols,
    length: state.length,
    counter: state.counter,
  };
}

export default function PasswordGeneratorScreen() {
  const profile = useSelector((state) => state.profile);
  const settings = useSelector((state) => state.settings);
  const auth = useSelector((state) => state.auth);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [copied, setCopied] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [saved, setSaved] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [state, setState] = useState(() => _getInitialState(settings));
  const theme = useTheme();

  useEffect(() => {
    const newState = _getInitialState(settings);
    if (profile === null) {
      setState({ ...newState });
    } else {
      setState({ ...newState, ...profile });
    }
  }, [settings, profile]);

  useEffect(() => {
    const passwordTimer = setTimeout(() => {
      if (state.password !== null) {
        setState({ ..._getInitialState(settings) });
      }
    }, 60 * 1000);
    return () => {
      clearTimeout(passwordTimer);
    };
  }, [state.password]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={Styles.innerContainer}>
          <TextInput
            label="Site"
            value={state.site}
            onChangeText={(site) => setState((state) => ({ ...state, site }))}
          />
          <TextInput
            label="Login"
            value={state.login}
            onChangeText={(login) => setState((state) => ({ ...state, login }))}
          />
          <MasterPassword
            masterPassword={state.masterPassword}
            onChangeText={(masterPassword) =>
              setState((state) => ({ ...state, masterPassword }))
            }
          />
          <Options
            options={{
              lowercase: state.lowercase,
              uppercase: state.uppercase,
              digits: state.digits,
              symbols: state.symbols,
            }}
            areOptionsValid={areOptionsValid}
            onOptionsChange={(options) => {
              setState((state) => ({ ...state, ...options }));
            }}
            style={{
              marginTop: 10,
            }}
          />
          <View
            style={{
              marginTop: 5,
              marginBottom: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Counter
              label="Length"
              value={state.length}
              setValue={(length) => setState((state) => ({ ...state, length }))}
              isValueValid={isLengthValid}
            />
            <Counter
              label="Counter"
              value={state.counter}
              setValue={(counter) =>
                setState((state) => ({ ...state, counter }))
              }
              isValueValid={isCounterValid}
            />
          </View>
          <Button
            mode="contained"
            icon="cogs"
            onPress={async () => {
              const passwordProfile = _getPasswordProfile(state);
              if (isProfileValid(passwordProfile)) {
                dispatch(cleanErrors());
                const password = await generatePassword(
                  state.masterPassword,
                  passwordProfile
                );
                if (state.copyPasswordAfterGeneration) {
                  NativeModules.LessPassClipboard.copy(password);
                  setCopied(true);
                }
                setState((state) => ({ ...state, password }));
              } else {
                dispatch(
                  addError(
                    "Password profile is invalid, cannot generate password. Site is required."
                  )
                );
              }
            }}
          >
            {state.copyPasswordAfterGeneration ? "GENERATE & COPY" : "GENERATE"}
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Button
                mode="outlined"
                onPress={() => {
                  setSaved(false);
                  setUpdated(false);
                  setCopied(false);
                  setSeePassword(false);
                  dispatch(cleanErrors());
                  setState(_getInitialState(settings));
                  dispatch(cleanPasswordProfile());
                }}
                style={{
                  marginBottom: 10,
                  marginRight: 5,
                  backgroundColor: theme.colors.background,
                }}
                labelStyle={{ fontSize: 12 }}
                icon="refresh"
              >
                clear
              </Button>
            </View>
            {state.password && state.copyPasswordAfterGeneration === false && (
              <View style={{ flex: 1 }}>
                <Button
                  mode="outlined"
                  onPress={() => {
                    NativeModules.LessPassClipboard.copy(state.password);
                    setCopied(true);
                  }}
                  style={{
                    marginBottom: 10,
                    marginRight: 5,
                    backgroundColor: theme.colors.background,
                  }}
                  labelStyle={{ fontSize: 12 }}
                  icon="clipboard"
                >
                  copy
                </Button>
              </View>
            )}
            <View style={{ flex: 1 }}>
              {state.password && (
                <Button
                  mode="outlined"
                  onPress={() => {
                    setSeePassword((seePassword) => !seePassword);
                  }}
                  style={{
                    marginBottom: 10,
                    marginRight: 5,
                    backgroundColor: theme.colors.background,
                  }}
                  labelStyle={{ fontSize: 12 }}
                  icon="eye"
                >
                  {seePassword ? "hide" : "show"}
                </Button>
              )}
            </View>
            <View style={{ flex: 1 }}>
              {state.password && auth.isAuthenticated ? (
                state.id === null ? (
                  <Button
                    mode="outlined"
                    onPress={() => {
                      const passwordProfile = _getPasswordProfile(state);
                      dispatch(savePasswordProfile(passwordProfile)).then(
                        (response) => {
                          setState((state) => ({ ...state, ...response.data }));
                          setSaved(true);
                        }
                      );
                    }}
                    style={{
                      marginBottom: 10,
                      backgroundColor: theme.colors.background,
                    }}
                    labelStyle={{ fontSize: 12 }}
                    icon="content-save"
                  >
                    save
                  </Button>
                ) : (
                  <Button
                    mode="outlined"
                    onPress={() => {
                      const passwordProfile = _getPasswordProfile(state);
                      dispatch(updatePasswordProfile(passwordProfile)).then(
                        (response) => {
                          setState((state) => ({ ...state, ...response.data }));
                          setUpdated(true);
                        }
                      );
                    }}
                    style={{
                      marginBottom: 10,
                      backgroundColor: theme.colors.background,
                    }}
                    labelStyle={{ fontSize: 12 }}
                    icon="content-save"
                  >
                    update
                  </Button>
                )
              ) : null}
            </View>
          </View>
          {state.password && seePassword && (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Hack",
                  marginTop: 20,
                }}
              >
                {state.password}
              </Text>
            </View>
          )}
          {auth.isAuthenticated &&
            !messages["LessPassServerWillBeTurnedOffOnMarch"] && (
              <>
                <Text style={{ color: theme.colors.error, marginTop: 20 }}>
                  LessPass Database server will be turned off on March 1th,
                  2023. You can export your passwords using the web extension,
                  the CLI or the web site.
                  <Text
                    style={{ color: theme.colors.primary }}
                    onPress={() => {
                      Linking.openURL(
                        "https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database"
                      );
                    }}
                  >
                    {" "}
                    See announcement
                  </Text>
                </Text>
                <Button
                  mode="text"
                  onPress={() =>
                    dispatch(
                      readMessage("LessPassServerWillBeTurnedOffOnMarch")
                    )
                  }
                >
                  <Text
                    style={{
                      color: theme.colors.error,
                      fontWeight: "bold",
                      marginTop: 5,
                    }}
                    onPress={() => {}}
                  >
                    Hide
                  </Text>
                </Button>
              </>
            )}
        </ScrollView>
      </TouchableWithoutFeedback>
      <Snackbar
        visible={copied}
        onDismiss={() => setCopied(false)}
        action={{
          label: "Hide",
          onPress: () => setCopied(false),
        }}
      >
        Password copied
      </Snackbar>
      <Snackbar
        visible={saved}
        onDismiss={() => setSaved(false)}
        action={{
          label: "Hide",
          onPress: () => setSaved(false),
        }}
      >
        Password profile saved
      </Snackbar>
      <Snackbar
        visible={updated}
        onDismiss={() => setUpdated(false)}
        action={{
          label: "Hide",
          onPress: () => setUpdated(false),
        }}
      >
        Password profile updated
      </Snackbar>
    </KeyboardAvoidingView>
  );
}
