import React, { Component } from "react";
import { Switch, List } from "react-native-paper";

export default class LessPassSwitch extends Component {
  render() {
    const { label, description, value, onChange } = this.props;
    return (
      <List.Item
        title={label}
        description={description}
        right={() => (
          <Switch
            value={value}
            onValueChange={value => onChange(value)}
          />
        )}
      />
    );
  }
}
