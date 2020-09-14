import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import memoize from "memoize-one";
import { isEmpty } from "lodash";
import TextInput from "../../ui/TextInput";
import Theme from "../../ui/Theme";
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

const style = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        zIndex: 5
      },
      android: {}
    })
  }
});

export default class AutocompleteSite extends Component {
  returnMatchingData = memoize(returnMatchingData);

  render() {
    const {
      value,
      onChangeText,
      data,
      dataKey,
      passwordProfileSelected,
      passwordProfileDeleted,
      showAutocomplete,
      hideAutocomplete
    } = this.props;
    const items = this.returnMatchingData(value, data, dataKey);
    const highlightedItems = highlightSearch(items, highlight, noHighlight);
    return (
      <View style={[style.container]}>
        <TextInput
          mode="outlined"
          label="Site"
          value={value}
          onChangeText={site => onChangeText(site)}
          onSubmitEditing={() => hideAutocomplete()}
          autoFocus
        />
        {!isEmpty(highlightedItems) && showAutocomplete && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 5
            }}
          >
            {highlightedItems.map((highlightedItem, i) => {
              const isFirstElement = i === 0;
              const isLastElement = i === highlightedItems.length - 1;
              const borderWidth = 2;

              return (
                <View
                  key={i}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: Theme.colors.background,
                    borderWidth,
                    borderTopWidth: 0,
                    borderBottomWidth: isLastElement ? borderWidth : 0,
                    borderBottomLeftRadius: isLastElement ? Theme.roundness : 0,
                    borderBottomRightRadius: isLastElement
                      ? Theme.roundness
                      : 0,
                    borderTopLeftRadius: isFirstElement ? Theme.roundness : 0,
                    borderTopRightRadius: isFirstElement ? Theme.roundness : 0,
                    borderColor: Theme.colors.primary,
                    zIndex: 3
                  }}
                >
                  <TouchableWithoutFeedback
                    onPress={() =>
                      passwordProfileSelected(highlightedItem.item)
                    }
                  >
                    <View style={{ flexDirection: "row", padding: 12 }}>
                      {highlightedItem.highlights}
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => passwordProfileDeleted(highlightedItem.item)}
                  >
                    <View style={{ padding: 12 }}>
                      <Icon
                        size={18}
                        name="trash"
                        style={{ color: Theme.colors.red }}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
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
