import React, { useEffect, useState } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import Theme from "../ui/Theme";
import Icon from "react-native-vector-icons/FontAwesome";

export default function GeneratedPassword({
  isAuthenticated,
  password,
  save,
  update,
  clear,
  isANewProfile,
}) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  useEffect(() => {
    const copiedTimer = setTimeout(() => {
      if (copied === true) {
        setCopied(false);
      }
    }, 3000);
    return () => {
      clearTimeout(copiedTimer);
    };
  }, [copied]);

  useEffect(() => {
    const savedTimer = setTimeout(() => {
      if (saved === true) {
        setSaved(false);
      }
    }, 3000);
    return () => {
      clearTimeout(savedTimer);
    };
  }, [saved]);

  if (!password) return null;
  return (
    <>
      <TouchableNativeFeedback
        onPress={() => {
          Clipboard.setString(password);
          setCopied(true);
        }}
      >
        <View
          style={{
            backgroundColor: Theme.colors.primary,
            borderRadius: Theme.roundness,
            marginTop: 5,
            padding: 14,
          }}
        >
          <Text
            style={{
              color: Theme.colors.white,
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Hack",
            }}
          >
            {saved && "SAVED"}
            {copied && "COPIED"}
            {saved || copied
              ? null
              : seePassword
              ? password
              : "*".repeat(password.length)}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableNativeFeedback
          onPress={() => {
            Clipboard.setString(password);
            setCopied(true);
          }}
        >
          <View
            style={{
              borderRadius: Theme.roundness,
              marginTop: 5,
              padding: 7,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              size={18}
              name="clipboard"
              style={{ marginRight: 10, color: Theme.colors.primary }}
            />
            <Text
              style={{
                color: Theme.colors.primary,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              copy
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => setSeePassword((seePassword) => !seePassword)}
        >
          <View
            style={{
              borderRadius: Theme.roundness,
              marginTop: 5,
              padding: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              size={18}
              name="eye"
              style={{ marginRight: 10, color: Theme.colors.primary }}
            />
            <Text
              style={{
                color: Theme.colors.primary,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              {seePassword ? "hide" : "show"}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={clear}>
          <View
            style={{
              borderRadius: Theme.roundness,
              marginTop: 5,
              padding: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon
              size={18}
              name="refresh"
              style={{ marginRight: 10, color: Theme.colors.primary }}
            />
            <Text
              style={{
                color: Theme.colors.primary,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              clear
            </Text>
          </View>
        </TouchableNativeFeedback>
        {isAuthenticated && (
          <TouchableNativeFeedback
            onPress={() => {
              if (isANewProfile) {
                save();
              } else {
                update();
              }
            }}
          >
            <View
              style={{
                borderRadius: Theme.roundness,
                marginTop: 5,
                padding: 14,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                size={18}
                name="save"
                style={{ marginRight: 10, color: Theme.colors.primary }}
              />
              <Text
                style={{
                  color: Theme.colors.primary,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                {isANewProfile ? "save" : "update"}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </>
  );
}
