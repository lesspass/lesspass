import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <ActivityIndicator size="large" color="#ffffff" />
  </View>
);

export default LoadingScreen;
