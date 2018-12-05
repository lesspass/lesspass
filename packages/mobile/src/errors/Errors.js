import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteError } from "./errorsActions";
import { Text, Button } from "react-native-paper";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export class Errors extends Component {
  render() {
    const { errors, deleteError } = this.props;
    return (
      <View
        style={{
          backgroundColor: "#ffffff",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 2,
          elevation: 6
        }}
      >
        {Object.values(errors).map(error => (
          <View
            key={error.id}
            style={{
              flex: 1,
              alignSelf: "stretch",
              borderTopColor: "#cc0000",
              borderTopWidth: 1,
              alignItems: "center",
              flexDirection: "row",
              padding: 10,
              paddingVertical: 20
            }}
          >
            <View
              style={{
                width: 85,
                alignItems: "center",
                justifyContent: "center",
                height: "100%"
              }}
            >
              <Icon size={22} name="warning" style={{ color: "#cc0000" }} />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#ffffff"
              }}
            >
              <Text style={{ color: "#cc0000", fontSize: 16 }}>
                {error.message}
              </Text>
            </View>
            <View
              style={{
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff"
              }}
            >
              <Button onPress={() => deleteError(error)}>
                <Icon
                  size={16}
                  name="times"
                  style={{ color: "#cc0000", fontWeight: "200" }}
                />
              </Button>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteError: error => {
      dispatch(deleteError(error));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors);
