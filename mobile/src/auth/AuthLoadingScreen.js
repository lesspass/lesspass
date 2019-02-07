import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { navigation, auth } = this.props;
    navigation.navigate(auth.jwt ? "App" : "Auth");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(AuthLoadingScreen);
