import React from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { signOut } from "./authActions";
import Styles from "../ui/Styles";
import { Title, Button } from "react-native-paper";
import routes from "../routes";

const SignOutScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <ScrollView style={Styles.innerContainer}>
      <Title style={{ marginBottom: 10 }}>Sign Out</Title>
      <Button
        compact
        icon="account-circle"
        mode="outlined"
        style={Styles.loginSignUpButton}
        onPress={() => {
          dispatch(signOut());
          navigation.navigate(routes.PASSWORD_GENERATOR);
        }}
      >
        Sign out
      </Button>
    </ScrollView>
  );
};

export default SignOutScreen;
