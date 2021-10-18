import React, { useEffect, useState } from "react";
import {
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
import GeneratePasswordButton from "./GeneratePasswordButton";
import GeneratedPassword from "./GeneratedPassword";
import MasterPassword from "./MasterPassword";
import { savePasswordProfile, updatePasswordProfile } from "./profilesActions";
import {
  isProfileValid,
  isLengthValid,
  isCounterValid,
  areOptionsValid,
} from "./validations";
import { cleanPasswordProfile } from "../profiles/profileActions";

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
        <View style={Styles.innerContainer}>
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
              isValueValid={isLengthValid}
              minValue={5}
              maxValue={35}
              onValueChange={(length) =>
                setState((state) => ({ ...state, length }))
              }
            />
            <Counter
              label="Counter"
              value={state.counter}
              isValueValid={isCounterValid}
              minValue={1}
              onValueChange={(counter) =>
                setState((state) => ({ ...state, counter }))
              }
            />
          </View>
          {state.password ? (
            <GeneratedPassword
              password={state.password}
              clear={() => dispatch(cleanPasswordProfile())}
              isAuthenticated={auth.isAuthenticated}
              isANewProfile={state.id === null}
              save={() => {
                const passwordProfile = _getPasswordProfile(state);
                dispatch(savePasswordProfile(passwordProfile)).then(
                  (response) =>
                    setState((state) => ({ ...state, ...response.data }))
                );
              }}
              update={() => {
                const passwordProfile = _getPasswordProfile(state);
                dispatch(updatePasswordProfile(passwordProfile)).then(
                  (response) =>
                    setState((state) => ({ ...state, ...response.data }))
                );
              }}
            />
          ) : (
            <GeneratePasswordButton
              isDisabled={() => {
                const passwordProfile = _getPasswordProfile(state);
                return state.masterPassword && isProfileValid(passwordProfile);
              }}
              onPress={async () => {
                const passwordProfile = _getPasswordProfile(state);
                const password = await generatePassword(
                  state.masterPassword,
                  passwordProfile
                );
                setState((state) => ({ ...state, password }));
              }}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
