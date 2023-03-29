import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { deleteMyAccount, getCurrentUser, signOut } from "./authActions";
import Styles from "../ui/Styles";
import { Title, Button, useTheme, Paragraph } from "react-native-paper";
import routes from "../routes";
import DeleteMyAccountModal from "./DeleteMyAccountModal";
import { addError } from "../errors/errorsActions";

const SignOutScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const theme = useTheme();

  useEffect(() => {
    dispatch(getCurrentUser()).then((response) => {
      setEmail(response.data.email);
    });
  }, []);

  return (
    <ScrollView style={Styles.innerContainer}>
      <Title style={{ marginBottom: 10 }}>My Account</Title>
      <Paragraph>Email: {email}</Paragraph>
      <Button
        icon="account-circle"
        mode="contained"
        style={{
          marginTop: 10
        }}
        onPress={() => {
          dispatch(signOut());
          navigation.navigate(routes.PASSWORD_GENERATOR);
        }}
      >
        Sign out
      </Button>
      <Title
        style={{ marginTop: 60, marginBottom: 10, color: theme.colors.error }}
      >
        Danger zone
      </Title>
      <DeleteMyAccountModal
        onDeleteConfirmed={(password) => {
          dispatch(deleteMyAccount({ email, password }))
            .then(() => {
              dispatch(signOut());
              navigation.navigate(routes.PASSWORD_GENERATOR);
            })
            .catch(() => {
              dispatch(
                addError(
                  "Unable to delete your account. Please make sure your master password is correct."
                )
              );
            });
        }}
      />
    </ScrollView>
  );
};

export default SignOutScreen;
