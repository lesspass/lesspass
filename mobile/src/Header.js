import React, { Component } from "react";
import { View, Image } from "react-native";
import Theme from "./Theme";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{ backgroundColor: Theme.colors.primary, paddingVertical: 16 }}
      >
        <Image
          resizeMode="cover"
          style={{
            width: 180,
            height: 39,
            resizeMode: "contain",
            alignSelf: "center"
          }}
          source={require("./logo.png")}
        />
      </View>
    );
  }
}
