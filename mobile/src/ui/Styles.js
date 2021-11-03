import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  title: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 5,
  },
  fingerprint: {
    position: "absolute",
    right: 3,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  loginSignInButton: {
    marginTop: 10,
    marginBottom: 30,
  },
  loginSignUpButton: {
    marginTop: 10,
  },
});
