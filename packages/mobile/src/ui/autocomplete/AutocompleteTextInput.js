import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import memoize from "memoize-one";
import { isEmpty } from "lodash";
import TextInput from "../TextInput";
import Theme from "../Theme";
import { returnMatchingData } from "./filter";
import { highlightSearch } from "./highlight";

function highlight(text, i) {
  return (
    <Text
      key={i}
      style={{
        color: Theme.colors.primary,
        fontWeight: "bold",
        fontSize: 16
      }}
    >
      {text}
    </Text>
  );
}
function noHighlight(text, i) {
  return (
    <Text
      key={i}
      style={{
        color: Theme.colors.primary,
        fontSize: 16
      }}
    >
      {text}
    </Text>
  );
}

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
      showAutocomplete,
      hideAutocomplete
    } = this.props;
    const items = this.returnMatchingData(value, data, dataKey);
    const highlightedItems = highlightSearch(items, highlight, noHighlight);
    return (
      <View>
        <TextInput
          mode="outlined"
          label={label}
          value={value}
          onChangeText={site => onChangeText(site)}
        />
        {!isEmpty(highlightedItems) && showAutocomplete && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 2
            }}
          >
            {highlightedItems.map((highlightedItem, i) => {
              const isFirstElement = i === 0;
              const isLastElement = i === highlightedItems.length - 1;
              const borderWidth = 2;

              return (
                <TouchableWithoutFeedback
                  key={i}
                  onPress={() => {
                    onDataSelected(highlightedItem.item);
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 12,
                      backgroundColor: Theme.colors.background,
                      paddingBottom: isLastElement ? 12 : 0,
                      borderWidth,
                      borderTopWidth: 0,
                      borderBottomWidth: isLastElement ? borderWidth : 0,
                      borderBottomLeftRadius: isLastElement
                        ? Theme.roundness
                        : 0,
                      borderBottomRightRadius: isLastElement
                        ? Theme.roundness
                        : 0,
                      borderTopLeftRadius: isFirstElement ? Theme.roundness : 0,
                      borderTopRightRadius: isFirstElement
                        ? Theme.roundness
                        : 0,
                      borderColor: Theme.colors.primary,
                      zIndex: 3
                    }}
                  >
                    {highlightedItem.highlights}
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
            <TouchableWithoutFeedback onPress={() => hideAutocomplete()}>
              <View
                style={{
                  height: 100,
                  backgroundColor: "transparent"
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    );
  }
}

const matches = [
  {
    indices: [[4, 5], [7, 8]],
    value: "www.example.org",
    key: "site",
    arrayIndex: 0
  }
];
const r = matches.reduce((matchAccumulator, match) => {
  matchAccumulator;

  return matchAccumulator;
}, []);
