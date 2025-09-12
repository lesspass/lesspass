import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMyAccount, getCurrentUser, signOut } from "./authActions";
import { Button, useTheme, Text } from "react-native-paper";
import routes from "../routes";
import DeleteMyAccountModal from "./DeleteMyAccountModal";
import { addError } from "../errors/errorsActions";
import Screen from "../ui/Screen";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

const SignOutScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getCurrentUser()).then((response) => {
      setEmail(response.data.email);
    });
  }, []);

  return (
    <Screen title={t("Navigation.MyAccount")}>
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
          <Text variant="bodyMedium">
            {t("SignInForm.Email")}: {email}
          </Text>
          <Button
            icon="account-circle"
            mode="contained"
            onPress={() => {
              dispatch(signOut());
              navigation.navigate(routes.PASSWORD_GENERATOR);
            }}
          >
            {t("Header.SignOut")}
          </Button>
          <Text variant="bodyMedium">
            {t(
              "MyProfilePage.ThankYouMessage",
              "Your account is kept on https://api.lesspass.com server to thank you for being in the first users of LessPass.",
            )}
          </Text>
        </View>
        <View>
          <Text variant="titleLarge" style={{ color: theme.colors.error }}>
            {t("SignOutScreen.DangerZone", "Danger zone")}
          </Text>
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
                      t(
                        "SignOutScreen.DeleteAccountError",
                        "Unable to delete your account. Please make sure your master password is correct.",
                      ),
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
