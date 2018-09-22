import { StyleSheet } from "react-native";

import Theme from "./Theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 20,
    flex: 1
  },
  input: {
    marginBottom: 5
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
  }
});

export default styles;
