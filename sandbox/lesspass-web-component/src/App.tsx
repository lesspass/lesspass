import React, { useState, useEffect } from "react";
import "./icons";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import PasswordGeneratorPage from "./passwordGenerator/PasswordGeneratorPage";
import UnlockPage from "./unlock/UnlockPage";
import Nav from "./components/Nav";
import RegisterPage from "./auth/RegisterPage";
import SignInPage from "./auth/SignInPage";
import SettingsPage from "./settings/SettingsPage";
import defaultSettings from "./settings/defaultSettings";
import PasswordsPage from "./passwords/PasswordsPage";
import { useDispatch } from "react-redux";
import { signInSuccess, logout } from "./auth/authSlice";
import {
  MASTER_PASSWORD_KEY,
  SETTINGS_KEY,
  ACCESS_TOKEN,
} from "./services/localStore";

function useLocalStore<T>(
  key: string,
  initialValue: T,
  store: Store
): [T, (t: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(
    (): T => {
      try {
        const value = (store.getItem(key) as unknown) as T;
        return value || initialValue;
      } catch (error) {
        return initialValue;
      }
    }
  );
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      store.setItem(key, (value as unknown) as Serializable);
    } catch (error) {}
  };
  return [storedValue, setValue];
}

const App = ({ store }: { store: Store }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [masterPassword, setMasterPassword] = useState<MasterPassword>(
    () => (store.getItem(MASTER_PASSWORD_KEY) as string) || ""
  );

  const [settings, setSettings] = useLocalStore<Settings>(
    SETTINGS_KEY,
    defaultSettings,
    store
  );

  useEffect(() => {
    const access_token = store.getItem(ACCESS_TOKEN);
    if (access_token) {
      dispatch(
        signInSuccess({
          access: access_token,
        } as SignInResponsePayload)
      );
    } else {
      dispatch(logout());
    }
  }, [dispatch, store]);

  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/unlock">
          <UnlockPage
            settings={settings}
            unlock={(newMasterPassword, saveMasterPassword) => {
              if (saveMasterPassword) {
                store.setItem(MASTER_PASSWORD_KEY, newMasterPassword);
              } else {
                store.removeItem(MASTER_PASSWORD_KEY);
              }
              setMasterPassword(newMasterPassword);
              setSettings({ ...settings, saveMasterPassword });
              history.push("/");
            }}
          />
        </Route>
        <Route exact path="/">
          {masterPassword ? (
            <PasswordGeneratorPage
              masterPassword={masterPassword}
              setMasterPassword={setMasterPassword}
            />
          ) : (
            <Redirect to="/unlock" />
          )}
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/signIn">
          <SignInPage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage
            settings={settings}
            setSettings={setSettings}
          />
        </Route>
        <Route exact path="/passwords">
          <PasswordsPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
