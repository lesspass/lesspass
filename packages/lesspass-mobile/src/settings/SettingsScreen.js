import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, View } from "react-native";
import { Divider, List, Title, useTheme } from "react-native-paper";
import TouchID from "react-native-touch-id";
import { setGenericPassword } from "react-native-keychain";
import { setSettings } from "./settingsActions";
import TextInputModal from "./TextInputModal";
import Switch from "../ui/Switch";
import KeepMasterPasswordOption from "./KeepMasterPasswordOption";
import { version } from "../version.json";
import Screen from "../ui/Screen";

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const [fingerprintIsSupported, setFingerprintIsSupported] = useState(false);
  useEffect(() => {
    TouchID.isSupported({
      passcodeFallback: false,
    })
      .then(() => {
        setFingerprintIsSupported(true);
      })
      .catch(() => {
        setFingerprintIsSupported(false);
      });
  }, [TouchID]);
  const theme = useTheme();
  const {
    keepMasterPasswordLocally,
    baseURL,
    encryptMasterPassword,
    defaultPasswordProfileLogin,
    defaultGeneratedPasswordLength,
    defaultLowercase,
    defaultUppercase,
    defaultDigits,
    defaultSymbols,
    defaultCounter,
    copyPasswordAfterGeneration,
  } = settings;

  return (
    <Screen title="Settings">
      <View style={{ marginLeft: -15, marginRight: -15 }}>
        <List.Section title="LESSPASS DATABASE">
          <TextInputModal
            label="Default URL"
            initialValue={baseURL}
            onOk={(value) => dispatch(setSettings({ baseURL: value }))}
            modalTitle="LessPass Database default URL"
          />
          <Divider />
          <Switch
            label="Use my master password"
            description={
              "Use your master password in the sign in form but send encrypted password."
            }
            value={encryptMasterPassword}
            onChange={(value) =>
              dispatch(setSettings({ encryptMasterPassword: value }))
            }
          />
          <Divider />
        </List.Section>
        <List.Section title="DEFAULT PASSWORD PROFILE">
          <TextInputModal
            isRequired={false}
            label="Login"
            initialValue={defaultPasswordProfileLogin}
            onOk={(value) =>
              dispatch(setSettings({ defaultPasswordProfileLogin: value }))
            }
            modalTitle="Default login"
          />
          <Divider />
          <TextInputModal
            label="Password length"
            initialValue={defaultGeneratedPasswordLength}
            variant="numeric"
            onOk={(value) => {
              dispatch(
                setSettings({
                  defaultGeneratedPasswordLength: parseInt(value),
                }),
              );
            }}
            modalTitle="Default password length"
          />
          <Divider />
          <TextInputModal
            label="Counter"
            initialValue={defaultCounter}
            variant="numeric"
            onOk={(value) => {
              dispatch(
                setSettings({
                  defaultCounter: parseInt(value),
                }),
              );
            }}
            modalTitle="Default counter"
          />
          <Divider />
          <Switch
            label="Lowercase (a-z)"
            description={defaultLowercase ? "activated" : "deactivated"}
            value={defaultLowercase}
            onChange={(value) =>
              dispatch(setSettings({ defaultLowercase: value }))
            }
          />
          <Divider />
          <Switch
            label="Uppercase (A-Z)"
            description={defaultUppercase ? "activated" : "deactivated"}
            value={defaultUppercase}
            onChange={(value) =>
              dispatch(setSettings({ defaultUppercase: value }))
            }
          />
          <Divider />
          <Switch
            label="Numbers (0-9)"
            description={defaultDigits ? "activated" : "deactivated"}
            value={defaultDigits}
            onChange={(value) =>
              dispatch(setSettings({ defaultDigits: value }))
            }
          />
          <Divider />
          <Switch
            label="Symbols (%!@)"
            description={defaultSymbols ? "activated" : "deactivated"}
            value={defaultSymbols}
            onChange={(value) =>
              dispatch(setSettings({ defaultSymbols: value }))
            }
          />
          <Divider />
        </List.Section>
        {fingerprintIsSupported && (
          <>
            <List.Section title="INSECURE OPTIONS">
              <KeepMasterPasswordOption
                label="Master Password"
                description={
                  keepMasterPasswordLocally
                    ? "Your master password is encrypted locally"
                    : "Keep master password locally"
                }
                value={keepMasterPasswordLocally}
                onOk={(masterPassword) => {
                  TouchID.authenticate()
                    .then(() =>
                      setGenericPassword("masterPassword", masterPassword),
                    )
                    .then(() =>
                      dispatch(
                        setSettings({ keepMasterPasswordLocally: true }),
                      ),
                    )
                    .catch(console.log);
                }}
                onClear={() =>
                  dispatch(setSettings({ keepMasterPasswordLocally: false }))
                }
                modalTitle="Enter your master password"
                modalDescription="Your master password will be encrypted locally on your device and accessible only with your fingerprint."
              />
            </List.Section>
            <Divider />
          </>
        )}
        <List.Section title="APPLICATION">
          <Switch
            label="Copy password automatically"
            description={
              copyPasswordAfterGeneration
                ? "Your password will be copied automatically after it is generated."
                : "Your password will not be copied automatically after it is generated."
            }
            value={copyPasswordAfterGeneration}
            onChange={(value) =>
              dispatch(setSettings({ copyPasswordAfterGeneration: value }))
            }
          />
          <Divider />
          <List.Item title={`LessPass version: ${version}`} />
        </List.Section>
      </View>
    </Screen>
  );
}
