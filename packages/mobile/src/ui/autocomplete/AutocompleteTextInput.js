import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import memoize from "memoize-one";
import { isEmpty } from "lodash";
import TextInput from "../TextInput";
import Theme from "../Theme";
import { returnMatchingData } from "./filter";

export default class AutocompleteTextInput extends Component {
  returnMatchingData = memoize(returnMatchingData);

  render() {
    const {
      label,
      value,
      onChangeText,
      data,
      dataKey,
      onDataSelected,
      showAutocomplete
    } = this.props;
    const matchingData = this.returnMatchingData(value, data, dataKey);
    return (
      <View>
        <TextInput
          mode="outlined"
          label={label}
          value={value}
          onChangeText={site => onChangeText(site)}
        />
        {!isEmpty(matchingData) && showAutocomplete && (
          <View
            style={{
              position: "absolute",
              backgroundColor: Theme.colors.background,
              top: 64,
              left: 0,
              right: 0,
              zIndex: 2,
              borderRadius: Theme.roundness,
              borderWidth: 1,
              borderTopWidth: 0,
              borderColor: Theme.colors.primary,
              padding: 12
            }}
          >
            {matchingData.map((match, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  flexDirection: "row",
                  paddingBottom: i === matchingData.length - 1 ? 0 : 12
                }}
                onPress={() => {
                  this.setState({ elementSelected: true });
                  onDataSelected(match.element);
                }}
              >
                <Text
                  style={{
                    color: Theme.colors.primary,
                    fontWeight: "bold",
                    fontSize: 16
                  }}
                >
                  {value}
                </Text>
                <Text style={{ color: Theme.colors.primary, fontSize: 16 }}>
                  {match.value.substr(value.length)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  }
}
