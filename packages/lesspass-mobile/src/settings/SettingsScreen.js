import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { Divider, List, useTheme } from "react-native-paper";
import TouchID from "react-native-touch-id";
import { setGenericPassword } from "react-native-keychain";
import { setSettings } from "./settingsActions";
import TextInputModal from "./TextInputModal";
import Switch from "../ui/Switch";
import KeepMasterPasswordOption from "./KeepMasterPasswordOption";
import { version } from "../version.json";
import Screen from "../ui/Screen";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const [fingerprintIsSupported, setFingerprintIsSupported] = useState(false);
  const { t } = useTranslation();
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
    <Screen title={t("Settings.Title")}>
      <View style={{ marginLeft: -15, marginRight: -15 }}>
        <List.Section
          title={t("Settings.LessPassDatabase", "LESSPASS DATABASE")}
        >
          <TextInputModal
            label={t("Settings.DefaultURL", "Default URL")}
            initialValue={baseURL}
            onOk={(value) => dispatch(setSettings({ baseURL: value }))}
            modalTitle={t(
              "Settings.LessPassDatabaseDefaultURL",
              "LessPass Database default URL",
            )}
          />
          <Divider />
          <Switch
            label={t("Settings.EncryptMyMasterPassword")}
            description={t(
              "Settings.UseMasterPasswordDescription",
              "Use your master password in the sign in form but send encrypted password.",
            )}
            value={encryptMasterPassword}
            onChange={(value) =>
              dispatch(setSettings({ encryptMasterPassword: value }))
            }
          />
          <Divider />
        </List.Section>
        <List.Section
          title={t(
            "Settings.DefaultPasswordProfile",
            "DEFAULT PASSWORD PROFILE",
          )}
        >
          <TextInputModal
            isRequired={false}
            label={t("PasswordProfile.Login")}
            initialValue={defaultPasswordProfileLogin}
            onOk={(value) =>
              dispatch(setSettings({ defaultPasswordProfileLogin: value }))
            }
            modalTitle={t("Settings.DefaultLogin", "Default login")}
          />
          <Divider />
          <TextInputModal
            label={t("PasswordProfile.Length")}
            initialValue={defaultGeneratedPasswordLength}
            variant="numeric"
            onOk={(value) => {
              dispatch(
                setSettings({
                  defaultGeneratedPasswordLength: parseInt(value),
                }),
              );
            }}
            modalTitle={t(
              "Settings.DefaultPasswordLength",
              "Default password length",
            )}
          />
          <Divider />
          <TextInputModal
            label={t("PasswordProfile.Counter")}
            initialValue={defaultCounter}
            variant="numeric"
            onOk={(value) => {
              dispatch(
                setSettings({
                  defaultCounter: parseInt(value),
                }),
              );
            }}
            modalTitle={t("Settings.DefaultCounter", "Default counter")}
          />
          <Divider />
          <Switch
            label={t("Settings.Lowercase", "Lowercase (a-z)")}
            description={
              defaultLowercase
                ? t("Settings.Activated", "activated")
                : t("Settings.Deactivated", "deactivated")
            }
            value={defaultLowercase}
            onChange={(value) =>
              dispatch(setSettings({ defaultLowercase: value }))
            }
          />
          <Divider />
          <Switch
            label={t("Settings.Uppercase", "Uppercase (A-Z)")}
            description={
              defaultUppercase
                ? t("Settings.Activated", "activated")
                : t("Settings.Deactivated", "deactivated")
            }
            value={defaultUppercase}
            onChange={(value) =>
              dispatch(setSettings({ defaultUppercase: value }))
            }
          />
          <Divider />
          <Switch
            label={t("Settings.Numbers", "Numbers (0-9)")}
            description={
              defaultDigits
                ? t("Settings.Activated", "activated")
                : t("Settings.Deactivated", "deactivated")
            }
            value={defaultDigits}
            onChange={(value) =>
              dispatch(setSettings({ defaultDigits: value }))
            }
          />
          <Divider />
          <Switch
            label={t("Settings.Symbols", "Symbols (%!@)")}
            description={
              defaultSymbols
                ? t("Settings.Activated", "activated")
                : t("Settings.Deactivated", "deactivated")
            }
            value={defaultSymbols}
            onChange={(value) =>
              dispatch(setSettings({ defaultSymbols: value }))
            }
          />
          <Divider />
        </List.Section>
        {fingerprintIsSupported && (
          <>
            <List.Section
              title={t("Settings.InsecureOptions", "INSECURE OPTIONS")}
            >
              <KeepMasterPasswordOption
                label={t("SignInForm.MasterPassword")}
                description={
                  keepMasterPasswordLocally
                    ? t(
                        "Settings.MasterPasswordEncryptedLocally",
                        "Your master password is encrypted locally",
                      )
                    : t(
                        "Settings.KeepMasterPasswordLocally",
                        "Keep master password locally",
                      )
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
                modalTitle={t(
                  "Settings.EnterMasterPassword",
                  "Enter your master password",
                )}
                modalDescription={t(
                  "Settings.MasterPasswordEncryptionDescription",
                  "Your master password will be encrypted locally on your device and accessible only with your fingerprint.",
                )}
              />
            </List.Section>
            <Divider />
          </>
        )}
        <List.Section title={t("Settings.Application", "APPLICATION")}>
          <Switch
            label={t(
              "Settings.CopyPasswordAutomatically",
              "Copy password automatically",
            )}
            description={
              copyPasswordAfterGeneration
                ? t(
                    "Settings.PasswordWillBeCopied",
                    "Your password will be copied automatically after it is generated.",
                  )
                : t(
                    "Settings.PasswordWillNotBeCopied",
                    "Your password will not be copied automatically after it is generated.",
                  )
            }
            value={copyPasswordAfterGeneration}
            onChange={(value) =>
              dispatch(setSettings({ copyPasswordAfterGeneration: value }))
            }
          />
          <Divider />
          <List.Item
            title={`${t(
              "Settings.LessPassVersion",
              "LessPass version",
            )}: ${version}`}
          />
        </List.Section>
      </View>
    </Screen>
  );
}
