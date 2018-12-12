import React, { Component } from "react";
import { View } from "react-native";
import {
  Button,
  Portal,
  Dialog,
  TextInput,
  List,
  Text
} from "react-native-paper";
import Styles from "../ui/Styles";

export default class TextInputModal extends Component {
  constructor(props) {
    super(props);
    const { value, variant, isRequired = true } = props;
    this.state = {
      value,
      isValid: this.checkInputIsValid(value, variant, isRequired),
      showModal: false
    };
  }

  _hideModal = () => {
    const { value } = this.props;
    this.setState({ showModal: false, value });
  };

  getKeyboardType = variant => {
    const variants = {
      text: "default",
      email: "email-address",
      numeric: "numeric"
    };
    return variants[variant];
  };

  checkInputIsValid = (value, variant, isRequired) => {
    if (isRequired && !value) return false;
    let isValid = variant === "numeric" ? !isNaN(value) : true;
    return isValid;
  };

  onChange = (value, variant, isRequired) => {
    const isValid = this.checkInputIsValid(value, variant, isRequired);
    this.setState({ value, isValid });
  };

  render() {
    const { value, isValid, showModal } = this.state;
    const {
      label,
      onOk,
      modalTitle,
      modalDescription,
      variant = "text",
      isRequired
    } = this.props;
    return (
      <View>
        <Portal>
          <Dialog onDismiss={this._hideModal} visible={showModal}>
            <Dialog.Title>{modalTitle}</Dialog.Title>
            <Dialog.ScrollArea style={{ maxHeight: 170, paddingHorizontal: 0 }}>
              <View style={{ padding: 10 }}>
                <TextInput
                  style={Styles.input}
                  value={variant === "numeric" ? value.toString() : value}
                  keyboardType={this.getKeyboardType(variant)}
                  secureTextEntry={variant === "password"}
                  onChangeText={value =>
                    this.onChange(value, variant, isRequired)
                  }
                />
                {modalDescription ? <Text /> : null}
              </View>
            </Dialog.ScrollArea>
            <Dialog.Actions>
              <Button primary onPress={this._hideModal}>
                Cancel
              </Button>
              <Button
                primary
                disabled={!isValid}
                onPress={() =>
                  this.setState({ showModal: false }, () => onOk(value))
                }
              >
                Ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <List.Item
          title={label}
          description={value}
          onPress={() => this.setState({ showModal: true })}
        />
      </View>
    );
  }
}
