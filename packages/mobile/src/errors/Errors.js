import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteError } from "./errorsActions";
import { Snackbar } from "react-native-paper";
import Styles from "../ui/Styles";

export class Errors extends Component {
  render() {
    const { errors, deleteError } = this.props;
    return Object.values(errors).map(error => (
      <Snackbar
        style={Styles.snackbar}
        theme={{ colors: { accent: "#ffffff" } }}
        key={error.id}
        visible={true}
        onDismiss={() => deleteError(error)}
        action={{
          label: "x",
          onPress: () => deleteError(error)
        }}
      >
        {error.message}
      </Snackbar>
    ));
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
