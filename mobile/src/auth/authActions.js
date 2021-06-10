import axios from "axios";
import { generatePassword } from "../password/passwordGenerator";

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
      })
      .catch(console.error);
  };
}

function getEncryptedCredentials(credentials) {
  return () => {
    return generatePassword(credentials.password, {
      site: "lesspass.com",
      login: credentials.email,
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true,
      length: 16,
      counter: 1,
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
        (encryptedCredentials) => {
          dispatch(register(encryptedCredentials));
        }
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
      .then((response) => dispatch(setJWT(response.data)));
  };
}
