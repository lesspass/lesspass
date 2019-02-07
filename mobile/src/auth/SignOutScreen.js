import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { signOut } from "./authActions";

class SignOutScreen extends Component {
  constructor(props) {
    super(props);
    this._signOut();
  }

  _signOut = async () => {
    const { navigation, signOut } = this.props;
    signOut();
    navigation.navigate("Auth");
  };

  render() {
    return (
      <View>
        <Text>Signing out</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignOutScreen);
