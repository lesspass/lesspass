import React from "react";
import { ScrollView, Image, Linking, View } from "react-native";
import { Title, Subheading, Paragraph, Button, useTheme } from "react-native-paper";
import Styles from "../ui/Styles";

export default function HelpScreen() {
  const theme = useTheme()
  return (
    <ScrollView contentContainerStyle={Styles.innerContainer}>
      <Title style={Styles.title}>Help</Title>
      <Subheading>How does it work?</Subheading>
      <Paragraph style={{ marginBottom: 20 }}>
        LessPass is a password manager that doesn't store any data. It computes
        a unique password using a site, login and a master password. You don't
        need to sync a password vault across every device because LessPass works
        offline! It will always generate the same password as long as those
        three parameters don't change.
      </Paragraph>
      <Subheading>Master password emoticons</Subheading>
      <Image source={require("./fingerprint.png")} />
      <Paragraph style={{ marginBottom: 20 }}>
        Your master password is the only thing you should keep in your head. The
        emoticons on the right let you verify that you typed in the right master
        password. You will have to wait a second or so before the final
        emoticons appear (the delay is for security; if the emoticons were shown
        instantly, a shoulder-peeker could derive your password based on the
        series of displayed emoticons).
      </Paragraph>
      <Subheading>Options</Subheading>
      <View>
        <Image
          source={require("./options.png")}
          style={{
            width: null,
            resizeMode: "contain",
            height: 100,
          }}
        />
      </View>
      <Paragraph style={{ marginBottom: 20 }}>
        Sometimes sites have specific password rules. For instance, some banks
        only accept passwords made of digits. LessPass lets you set parameters
        for the generated password (the so called "password profile"). The
        counter in particular allows you to generate a new password without
        having to change your master password.
      </Paragraph>
      <Subheading>Sign In</Subheading>
      <Paragraph style={{ marginBottom: 10 }}>
        By default, LessPass works offline and doesn't send any data over the
        network. For convenience, there's an optional connected mode. This mode
        allows you to store the profiles necessary to generate your passwords on
        our (or alternatively your own) LessPass server. This is especially
        useful if many of your passwords are not based on the default profile
        (length of 16 characters, all characters allowed). As a password profile
        does neither include the master password nor the generated password,
        there is no critical information sent to the server.
      </Paragraph>
      <Paragraph style={{ marginBottom: 20 }}>
        The sign-in form asks for your master password. By default, it is used
        to generate a password for your LessPass account in the same way as for
        any other site. This means the master password itself is never sent to
        our servers. If for any reason you don't want to use such a
        LessPass-generated password for your LessPass account, you can disable
        this in the settings.
      </Paragraph>
      <Subheading>Self-hosted LessPass Database</Subheading>
      <Paragraph style={{ marginBottom: 20 }}>
        If you are using a self-hosted LessPass database, you can change the
        base url in the settings to point to your own server.
      </Paragraph>
      <Subheading>Support</Subheading>
      <Paragraph>
        Still need some help? Or you have an idea on how to improve LessPass.
        You can send us an email at contact@lesspass.com. You can write your
        email in English or French.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => {
          Linking.openURL("mailto:contact@lesspass.com?subject=LessPass");
        }}
        style={{
          marginTop: 10,
        }}
      >
        Send us an email
      </Button>
    </ScrollView>
  );
}
