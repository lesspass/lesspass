import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Fingerprint({ fingerprint, ...props }) {
  const { style = {}, ...rest } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        ...style,
      }}
      {...rest}
    >
      <Icon
        size={20}
        name={fingerprint[0]["icon"].replace("fa-", "")}
        style={{ color: fingerprint[0]["color"], marginRight: 5 }}
      />
      <Icon
        size={20}
        name={fingerprint[1]["icon"].replace("fa-", "")}
        style={{ color: fingerprint[1]["color"], marginRight: 5 }}
      />
      <Icon
        size={20}
        name={fingerprint[2]["icon"].replace("fa-", "")}
        style={{ color: fingerprint[2]["color"], marginRight: 5 }}
      />
    </View>
  );
}
