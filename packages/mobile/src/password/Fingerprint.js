import React, { Component } from "react";
import { View, NativeModules } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import fingerprint from "lesspass-fingerprint";
import _ from "lodash";

export default class Fingerprint extends Component {
  state = {};

  componentDidMount() {
    this._calcFingerprint();
  }

  componentDidUpdate() {
    if (!this.state.loaded) {
      this._calcFingerprint();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.masterPassword === prevState.masterPassword) return null;
    return {
      masterPassword: nextProps.masterPassword,
      loaded: false
    };
  }

  _calcFingerprint = () => {
    const { masterPassword } = this.props;
    NativeModules.LessPass.createFingerprint(masterPassword).then(
      hmacSha256 => {
        this.setState({
          masterPassword,
          fingerprint: fingerprint(hmacSha256),
          loaded: true
        });
      }
    );
  };

  render() {
    const { fingerprint, loaded } = this.state;
    if (!loaded) return null;
    return (
      <View
        style={{
          position: "absolute",
          right: 10,
          top: 24,
          bottom: 0,
          flexDirection: "row"
        }}
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
}
