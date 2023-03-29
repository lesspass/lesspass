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
