import axios from "axios";
import { generatePassword } from "../password/passwordGenerator";

export function setJWT(jwt) {
  return {
    type: "SET_JWT",
    jwt
  };
}

function getJWT(credentials) {
  return (dispatch, getState) => {
    const { settings } = getState();
    return axios
      .post(
        `${settings.lesspassDatabaseDefaultUrl}/api/tokens/auth/`,
        credentials
      )
      .then(response => {
        dispatch(setJWT(response.data.token));
        return response;
      });
  };
}

function getEncryptedCredentials(credentials) {
  return () => {
    return generatePassword(credentials.password, {
      site: "lesspass.com",
      login: credentials.email,
      options: {
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true,
        length: 16,
        counter: 1
      }
    }).then(encryptedPassword => ({
      email: credentials.email,
      password: encryptedPassword
    }));
  };
}

export function signIn(credentials, encryptCredentials) {
  return dispatch => {
    if (encryptCredentials) {
      return dispatch(getEncryptedCredentials(credentials)).then(
        encryptedCredentials => dispatch(getJWT(encryptedCredentials))
      );
    }
    return dispatch(getJWT(credentials));
  };
}

function register(credentials) {
  return (dispatch, getState) => {
    const { settings } = getState();
    return axios
      .post(
        `${settings.lesspassDatabaseDefaultUrl}/api/auth/register/`,
        credentials
      )
      .then(() => dispatch(getJWT(credentials)));
  };
}

export function signUp(credentials, encryptCredentials) {
  return dispatch => {
    if (encryptCredentials) {
      return dispatch(getEncryptedCredentials(credentials)).then(
        encryptedCredentials => dispatch(register(encryptedCredentials))
      );
    }
    return dispatch(register(credentials));
  };
}

export function signOut() {
  return {
    type: "CLEAR_JWT"
  };
}
