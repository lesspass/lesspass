import React, { Component } from "react";
import { View, Image } from "react-native";
import Styles from "../ui/Styles";

export default class Header extends Component {
  render() {
    return (
      <View style={Styles.header}>
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
