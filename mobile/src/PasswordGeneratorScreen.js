import React, { Component } from "react";
import {
  View,
  TextInput as NativeTextInput,
  KeyboardAvoidingView,
  ScrollView,
  NativeModules,
  Clipboard,
  Text
} from "react-native";
import { Paragraph, Button, IconButton } from "react-native-paper";
import Switch from "./Switch";
import renderLessPassPassword from "lesspass-render-password";
import Slider from "react-native-slider";
import Theme from "./Theme";
import Header from "./Header";
import styles from "./styles";
import MasterPassword from "./MasterPassword";
import TextInput from "./Input";

export default class PasswordGeneratorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      site: "",
      login: "",
      masterPassword: "",
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true,
      length: "16",
      counter: "1",
      generatedPassword: null,
      seePassword: false,
      copied: false
    };
  }

  generatePassword() {
    const {
      site,
      login,
      masterPassword,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter
    } = this.state;
    NativeModules.LessPass.calcEntropy(
      site,
      login,
      masterPassword,
      counter
    ).then(entropy => {
      var options = {
        length,
        lowercase,
        uppercase,
        digits,
        symbols
      };
      var password = renderLessPassPassword(entropy, options);
      Clipboard.setString(password);
      this.setState({ generatedPassword: password, copied: true });
      setTimeout(() => {
        this.setState({ copied: false });
      }, 3000);
    });
  }

  render() {
    const {
      showOptions,
      site,
      login,
      masterPassword,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter,
      seePassword,
      copied,
      generatedPassword
    } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <TextInput
            mode="outlined"
            label="Site"
            value={site}
            onChangeText={site => this.setState({ site })}
          />
          <TextInput
            mode="outlined"
            label="Login"
            value={login}
            onChangeText={login => this.setState({ login })}
          />
          <MasterPassword
            masterPassword={masterPassword}
            onChangeText={masterPassword => this.setState({ masterPassword })}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10
            }}
          >
            {generatedPassword ? (
              <Button
                icon={copied ? null : "remove-red-eye"}
                mode="contained"
                onPress={() => {
                  if (!copied) {
                    this.setState(prevState => ({
                      seePassword: !prevState.seePassword
                    }));
                  }
                }}
                style={{
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text uppercase={false}>
                  {copied
                    ? "Copied !"
                    : seePassword
                      ? generatedPassword
                      : "****************"}
                </Text>
              </Button>
            ) : (
              <Button
                mode="contained"
                onPress={() => this.generatePassword()}
                style={{
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                Generate password
              </Button>
            )}
            <IconButton
              icon="settings"
              color={
                showOptions ? Theme.colors.primary : Theme.colors.placeholder
              }
              onPress={() =>
                this.setState(prevState => ({
                  showOptions: !prevState.showOptions
                }))
              }
            />
          </View>
          {showOptions ? (
            <React.Fragment>
              <Switch
                on={lowercase}
                onValueChange={() =>
                  this.setState(prevState => ({
                    lowercase: !prevState.lowercase
                  }))
                }
              >
                Lowercase (a-z)
              </Switch>
              <Switch
                on={uppercase}
                onValueChange={() =>
                  this.setState(prevState => ({
                    uppercase: !prevState.uppercase
                  }))
                }
              >
                Uppercase (A-Z)
              </Switch>
              <Switch
                on={digits}
                onValueChange={() =>
                  this.setState(prevState => ({
                    digits: !prevState.digits
                  }))
                }
              >
                Numbers (0-9)
              </Switch>
              <Switch
                on={symbols}
                onValueChange={() =>
                  this.setState(prevState => ({
                    symbols: !prevState.symbols
                  }))
                }
              >
                Symbols (%!@)
              </Switch>
              <View>
                <View style={styles.sliderTitleContainer}>
                  <Paragraph>Length</Paragraph>
                  <NativeTextInput
                    keyboardType="numeric"
                    value={length}
                    style={styles.sliderValue}
                    onChangeText={text => {
                      this.setState({ length: text.replace(/[^0-9]/g, "") });
                    }}
                  />
                </View>
                <Slider
                  minimumValue={5}
                  maximumValue={35}
                  step={1}
                  value={length ? parseInt(length, 10) : 1}
                  minimumTrackTintColor={Theme.colors.primary}
                  maximumTrackTintColor={Theme.colors.disabled}
                  trackStyle={styles.sliderTrack}
                  thumbTintColor={Theme.colors.primary}
                  onValueChange={length =>
                    this.setState({ length: length.toString() })
                  }
                  style={styles.slider}
                />
              </View>
              <View>
                <View style={styles.sliderTitleContainer}>
                  <Paragraph>Counter</Paragraph>
                  <NativeTextInput
                    keyboardType="numeric"
                    value={counter}
                    style={styles.sliderValue}
                    onChangeText={text => {
                      this.setState({ counter: text.replace(/[^0-9]/g, "") });
                    }}
                  />
                </View>
                <Slider
                  minimumValue={1}
                  maximumValue={10}
                  step={1}
                  value={counter ? parseInt(counter, 10) : 1}
                  minimumTrackTintColor={Theme.colors.primary}
                  maximumTrackTintColor={Theme.colors.disabled}
                  trackStyle={styles.sliderTrack}
                  thumbTintColor={Theme.colors.primary}
                  onValueChange={counter =>
                    this.setState({ counter: counter.toString() })
                  }
                  style={styles.slider}
                />
              </View>
            </React.Fragment>
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
