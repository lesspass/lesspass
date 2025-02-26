import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 5,
  },
  fingerprint: {
    position: "absolute",
    right: 0,
    top: 6,
    bottom: 0,
    zIndex: 4,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
