import axios from "axios";
import { generatePassword } from "../password/passwordGenerator";
import defaultPasswordProfile from "../settings/defaultPasswordProfile";

export function setJWT(tokens) {
  return {
    type: "LOG_IN",
    payload: tokens,
  };
}

function getJWT(credentials) {
  return (dispatch, getState) => {
    const { settings } = getState();
    return axios
      .post(`${settings.baseURL}/auth/jwt/create/`, credentials)
      .then((response) => {
        dispatch(setJWT(response.data));
        return response;
      });
  };
}

function getEncryptedCredentials(credentials) {
  return () => {
    return generatePassword(credentials.password, {
      ...defaultPasswordProfile,
      site: "lesspass.com",
      login: credentials.email,
    }).then((encryptedPassword) => ({
      email: credentials.email,
      password: encryptedPassword,
    }));
  };
}

export function signIn(credentials, encryptMasterPassword) {
  return (dispatch) => {
    if (encryptMasterPassword) {
      return dispatch(getEncryptedCredentials(credentials)).then(
        (encryptedCredentials) => dispatch(getJWT(encryptedCredentials))
      );
    }
    return dispatch(getJWT(credentials));
  };
}

function register(credentials) {
  return (dispatch, getState) => {
    const { settings } = getState();
    return axios
      .post(`${settings.baseURL}/auth/users/`, credentials)
      .then(() => dispatch(getJWT(credentials)));
  };
}

export function signUp(credentials, encryptMasterPassword) {
  return (dispatch) => {
    if (encryptMasterPassword) {
      return dispatch(getEncryptedCredentials(credentials)).then(
        (encryptedCredentials) => dispatch(register(encryptedCredentials))
      );
    }
    return dispatch(register(credentials));
  };
}

export function signOut() {
  return {
    type: "LOG_OUT",
  };
}

export function refreshTokens() {
  return (dispatch, getState) => {
    const state = getState();
    const { settings, auth } = state;
    return axios
      .post(`${settings.baseURL}/auth/jwt/refresh/`, {
        refresh: auth.refreshToken,
      })
      .then((response) => dispatch(setJWT(response.data)))
      .catch(console.log);
  };
}

export function getCurrentUser() {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios.get(`${settings.baseURL}/auth/users/me/`, {
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    });
  };
}

function deleteCurrentUser(credentials) {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios.delete(`${settings.baseURL}/auth/users/me/`, {
      data: { current_password: credentials.password },
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    });
  };
}

export function deleteMyAccount(credentials) {
  return (dispatch, getState) => {
    const { settings } = getState();
    const { encryptMasterPassword } = settings;
    if (encryptMasterPassword) {
      return dispatch(getEncryptedCredentials(credentials)).then(
        (encryptedCredentials) =>
          dispatch(deleteCurrentUser(encryptedCredentials))
      );
    }
    return dispatch(deleteCurrentUser(credentials));
  };
}
