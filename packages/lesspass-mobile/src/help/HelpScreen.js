import React from "react";
import { Linking, View } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import Screen from "../ui/Screen";
import Options from "../password/Options";
import Fingerprint from "../password/Fingerprint";
import { useTranslation } from "react-i18next";
export default function HelpScreen() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Screen title={t("Navigation.Help", "Help")}>
      <Text variant="titleMedium">
        {t("Help.HowDoesItWorkTitle", "How does it work?")}
      </Text>
      <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
        {t(
          "Help.HowDoesItWorkDescription",
          "LessPass is a password manager that doesn't store any data. It computes a unique password using a site, login and a master password. You don't need to sync a password vault across every device because LessPass works offline! It will always generate the same password as long as those parameters don't change.",
        )}
      </Text>
      <Text variant="titleMedium">
        {t("Help.MasterPasswordIconsTitle", "Master password icons")}
      </Text>
      <Fingerprint
        fingerprint={[
          {
            color: theme.colors.primary,
            icon: "fa-ship",
          },
          {
            color: theme.colors.error,
            icon: "fa-archive",
          },
          {
            color: theme.colors.tertiary,
            icon: "fa-euro",
          },
        ]}
      />
      <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
        {t(
          "Help.MasterPasswordIconsDescription",
          "Your master password is the only thing you should keep in your head. The icons on the right let you verify that you typed in the right master password. You will have to wait a second or so before the final icons appear (the delay is for security; if the icons were shown instantly, a shoulder-peeker could derive your password based on the series of displayed icons).",
        )}
      </Text>
      <Text variant="titleMedium">{t("Help.PasswordGeneratorOptions")}</Text>
      <View>
        <Options
          options={{
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true,
          }}
          areOptionsValid={true}
          onOptionsChange={() => undefined}
        />
      </View>
      <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
        {t(
          "Help.PasswordOptionsDescription",
          'Sometimes sites have specific password rules. For instance, some banks only accept passwords made of digits. LessPass lets you set parameters for the generated password (the so called "password profile"). The counter in particular allows you to generate a new password without having to change your master password.',
        )}
      </Text>
      <Text variant="titleMedium">{t("Help.SignIn")}</Text>
      <Text variant="bodyMedium" style={{ marginBottom: 10 }}>
        {t(
          "Help.SignInDescription1",
          "By default, LessPass works offline and doesn't send any data over the network. For convenience, there's an optional connected mode. This mode allows you to store the profiles necessary to generate your passwords on our (or alternatively your own) LessPass server. This is especially useful if many of your passwords are not based on the default profile (length of 16 characters, all characters allowed). As a password profile does neither include the master password nor the generated password, there is no critical information sent to the server.",
        )}
      </Text>
      <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
        {t(
          "Help.SignInDescription2",
          "The sign-in form asks for your master password. By default, it is used to generate a password for your LessPass account in the same way as for any other site. This means the master password itself is never sent to our servers. If for any reason you don't want to use such a LessPass-generated password for your LessPass account, you can disable this in the settings.",
        )}
      </Text>
      <Text variant="titleMedium">{t("Help.SelfHostedLessPassDatabase")}</Text>
      <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
        {t(
          "Help.SelfHostedDescription",
          "If you are using a self-hosted LessPass database, you can change the base url in the settings to point to your own server.",
        )}
      </Text>
      <Text variant="titleMedium">{t("Help.Support")}</Text>
      <Text variant="bodyMedium">
        {t(
          "Help.SupportDescription",
          "Still need some help? Or you have an idea on how to improve LessPass. You can send us an email at contact@lesspass.com. You can write your email in English or French.",
        )}
      </Text>
      <Button
        mode="contained"
        onPress={() => {
          Linking.openURL("mailto:contact@lesspass.com?subject=LessPass");
        }}
        style={{
          marginTop: 10,
        }}
      >
        {t("Help.SendUsAnEmail")}
      </Button>
    </Screen>
  );
}
