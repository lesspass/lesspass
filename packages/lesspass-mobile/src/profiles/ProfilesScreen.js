import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, View } from "react-native";
import {
  Divider,
  List,
  IconButton,
  Portal,
  Dialog,
  Provider,
  Text,
  Button,
  Searchbar,
  useTheme,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePasswordProfile,
  getPasswordProfiles,
} from "../password/profilesActions";
import routes from "../routes";
import fuzzysort from "fuzzysort";
import { cleanPasswordProfile, setPasswordProfile } from "./profileActions";
import { sortByNewestFirst } from "./sort";
import Screen from "../ui/Screen";
import { useTranslation } from "react-i18next";

export default function ProfilesScreen() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profiles = Object.values(useSelector((state) => state.profiles));
  const [profileToDelete, setProfileToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const results =
    query === ""
      ? profiles
      : fuzzysort.go(query, profiles, { key: "site" }).map((r) => r.obj);

  const _getPasswordProfilesCallback = useCallback(() => {
    setIsLoading(true);
    dispatch(getPasswordProfiles()).finally(() => setIsLoading(false));
  }, [isLoading]);

  useEffect(() => {
    _getPasswordProfilesCallback();
  }, []);

  return (
    <Provider>
      <Screen
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={_getPasswordProfilesCallback}
          />
        }
      >
        <Portal>
          <Dialog
            visible={profileToDelete !== null}
            onDismiss={() => setProfileToDelete(null)}
          >
            <Dialog.Content>
              <Text variant="bodyMedium">
                {`Are you sure you want to delete the password profile for site ${profileToDelete?.site} and login ${profileToDelete?.login} ?`}
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setProfileToDelete(null)}>Cancel</Button>
              <Button
                onPress={() => {
                  dispatch(deletePasswordProfile(profileToDelete));
                  dispatch(cleanPasswordProfile());
                  setProfileToDelete(null);
                  _getPasswordProfilesCallback();
                }}
              >
                Yes
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <List.Section>
          {isLoading ? null : profiles.length === 0 ? (
            <List.Item
              description={
                "You don't have any password profiles. Save a password profile when you generate it."
              }
              titleStyle={{ color: theme.colors.primary }}
              descriptionStyle={{ color: theme.colors.primary }}
            />
          ) : (
            <View>
              <View style={{ paddingHorizontal: 10 }}>
                <Searchbar
                  placeholder={t(
                    "ProfilesScreen.SearchPlaceholder",
                    "Search in your password profiles",
                  )}
                  onChangeText={setQuery}
                  value={query}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              {results.length === 0 ? (
                <List.Item
                  description={
                    "There is no password profile that matches this search."
                  }
                />
              ) : (
                sortByNewestFirst(results).map((profile) => (
                  <View key={profile.id}>
                    <List.Item
                      title={profile.site}
                      description={profile.login}
                      onPress={() => {
                        dispatch(setPasswordProfile(profile));
                        setQuery("");
                        navigation.navigate(routes.PASSWORD_GENERATOR);
                      }}
                      right={(props) => (
                        <IconButton
                          {...props}
                          icon="delete"
                          onPress={(event) => {
                            setProfileToDelete(profile);
                            event.stopPropagation();
                          }}
                          color={theme.colors.primary}
                        />
                      )}
                    />
                    <Divider />
                  </View>
                ))
              )}
            </View>
          )}
        </List.Section>
      </Screen>
    </Provider>
  );
}
