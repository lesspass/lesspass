import { StyleSheet } from "react-native";

import Theme from "./Theme";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 20,
    flex: 1
  },
  input: {
    marginBottom: 5
  },
  header: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 16
  },
  fingerprint: {
    position: "absolute",
    right: 3,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  sliderTrack: {
    height: 2,
    borderRadius: 1
  },
  sliderTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 8
  },
  sliderValue: {
    textAlign: "right",
    color: Theme.colors.text,
    paddingVertical: 1
  },
  slider: {
    marginHorizontal: 10,
    marginVertical: -8
  },
  loginSignInButton: {
    marginTop: 10,
    marginBottom: 30
  },
  loginSignUpButton: {
    marginTop: 10
  },
  forgotPasswordLink: {
    color: Theme.colors.link
  },
  snackbar: {
    backgroundColor: Theme.colors.red,
    marginBottom: 60
  }
});
