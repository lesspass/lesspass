import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { generatePassword } from "./passwordGenerator";
import TextInput from "../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../ui/Styles";
import Counter from "./Counter";
import Options from "./Options";
import MasterPassword from "./MasterPassword";
import Clipboard from "@react-native-community/clipboard";
import { savePasswordProfile, updatePasswordProfile } from "./profilesActions";
import { cleanPasswordProfile } from "../profiles/profileActions";
import {
  isProfileValid,
  isLengthValid,
  isCounterValid,
  areOptionsValid,
} from "./validations";
import { Button, Snackbar, Text } from "react-native-paper";
import { addError, cleanErrors } from "../errors/errorsActions";

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
  const dispatch = useDispatch();
  const [copied, setCopied] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [saved, setSaved] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [state, setState] = useState(() => _getInitialState(settings));

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
            mode="outlined"
            label="Site"
            value={state.site}
            onChangeText={(site) => setState((state) => ({ ...state, site }))}
          />
          <TextInput
            mode="outlined"
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
              marginTop: 10,
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
                Clipboard.setString(password);
                setCopied(true);
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
            GENERATE & COPY
          </Button>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
              icon="refresh"
            >
              clear
            </Button>
            {state.password && (
              <Button
                mode="outlined"
                onPress={() => {
                  setSeePassword((seePassword) => !seePassword);
                }}
                icon="eye"
                style={{ marginLeft: 5 }}
              >
                {seePassword ? "hide" : "show"}
              </Button>
            )}
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
                  icon="content-save"
                  style={{ marginLeft: 5 }}
                >
                  Save
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
                  icon="content-save"
                  style={{ marginLeft: 5 }}
                >
                  Update
                </Button>
              )
            ) : null}
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
