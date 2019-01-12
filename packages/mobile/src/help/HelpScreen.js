import React, { Component } from "react";
import { ScrollView, Image, Linking } from "react-native";
import { Title, Subheading, Paragraph, Button } from "react-native-paper";
import Theme from "../ui/Theme";

export default class HelpScreen extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 20,
          paddingHorizontal: 10
        }}
      >
        <Title style={{ marginBottom: 10 }}>LessPass</Title>
        <Subheading>How does it works?</Subheading>
        <Paragraph style={{ marginBottom: 20 }}>
          LessPass is a password manager that doesn't save any data. The site,
          the login and the master password are mashed together with encryption
          to create a secure password. It will always generate the same password
          as long as those 3 parameters don't change.
        </Paragraph>
        <Subheading>Master password emoticons</Subheading>
        <Image source={require("./fingerprint.png")} />
        <Paragraph style={{ marginBottom: 20 }}>
          Your master password is the only thing you should keep in your head.
          The emoticons on the right let you verify if you typed in the right
          master password. You will have to wait a second or so before it shows
          the final emoticons (the delay is for security; if the emoticon
          generation wouldn't be delayed, a shoulder-peeker could guess the
          password character-by-character while you type it in based on the
          continuously generated emoticons).
        </Paragraph>
        <Subheading>Options</Subheading>
        <Image
          source={require("./options.png")}
          style={{
            width: 360,
            height: 102
          }}
        />
        <Paragraph style={{ marginBottom: 20 }}>
          Sometimes sites have specific password rules. For instance, some banks
          only accept passwords made of digits. LessPass lets you set
          parameters for the generated password. Use the counter if you want to
          change the generated password without changing your master password.
        </Paragraph>
        <Subheading>Sign In</Subheading>
        <Paragraph style={{ marginBottom: 10 }}>
          LessPass by default doesn't save any data. But you can if you want to use
          LessPass in a connected mode. This mode allows you to save password
          profiles needed to regenerate passwords which are not based on LessPass'
          default password profile (length of 16 characters, all characters allowed).
          A password profile is everything except the master password and the generated
          password. There is no critical information (an encrypted generated password
          for example) stored in the LessPass database.
        </Paragraph>
        <Paragraph style={{ marginBottom: 20 }}>
          The sign in form asks for your master password. We use your master
          password to create a LessPass-generated password using the default
          password profile. The master password is never sent to our servers. If
          you don't want to encrypt your password, you can disable this option in
          the settings.
        </Paragraph>
        <Subheading>Self-hosted LessPass Database</Subheading>
        <Paragraph style={{ marginBottom: 20 }}>
          If you are using a self-hosted LessPass database, you can change the
          base url in the settings to point to your own server.
        </Paragraph>
        <Subheading>Sign Out</Subheading>
        <Paragraph style={{ marginBottom: 20 }}>
          You can sign out using the Sign Out button in the settings.
        </Paragraph>
        <Subheading>Contributing</Subheading>
        <Paragraph>You can read our contributing guide:</Paragraph>
        <Button
          mode="contained"
          onPress={() => {
            Linking.openURL(
              "https://github.com/lesspass/lesspass/blob/master/CONTRIBUTING.md"
            );
          }}
          style={{
            marginTop: 10,
            marginBottom: 20
          }}
        >
          How to contribute?
        </Button>
        <Subheading>Support</Subheading>
        <Paragraph>
          You still need some help? No problem, you can send us an email at
          contact@lesspass.com. You can write your email in english or french.
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => {
            Linking.openURL("mailto:contact@lesspass.com?subject=LessPass");
          }}
          style={{
            marginTop: 10,
            marginBottom: 60,
            backgroundColor: Theme.colors.blue
          }}
        >
          send us an email
        </Button>
      </ScrollView>
    );
  }
}
