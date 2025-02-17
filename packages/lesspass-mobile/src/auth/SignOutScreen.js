import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMyAccount, getCurrentUser, signOut } from "./authActions";
import { Title, Button, useTheme, Paragraph } from "react-native-paper";
import routes from "../routes";
import DeleteMyAccountModal from "./DeleteMyAccountModal";
import { addError } from "../errors/errorsActions";
import Screen from "../ui/Screen";
import { View } from "react-native";

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
    <Screen title="My Account">
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            gap: 10,
          }}
        >
          <Paragraph>Email: {email}</Paragraph>
          <Button
            icon="account-circle"
            mode="contained"
            onPress={() => {
              dispatch(signOut());
              navigation.navigate(routes.PASSWORD_GENERATOR);
            }}
          >
            Sign out
          </Button>
          <Paragraph>
            Your account is kept on https://api.lesspass.com server to thank you for being the first
            users of LessPass.
          </Paragraph>
        </View>
        <View>
          <Title style={{ color: theme.colors.error }}>Danger zone</Title>
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
                      "Unable to delete your account. Please make sure your master password is correct.",
                    ),
                  );
                });
            }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SignOutScreen;
