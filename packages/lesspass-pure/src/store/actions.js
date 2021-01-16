import Password from "../api/password";
import Profile from "../api/profile";
import User from "../api/user";
import LessPassCrypto from "lesspass-crypto";
import * as urlParser from "../services/url-parser";
import * as types from "./mutation-types";
import defaultPasswordProfile from "./defaultPassword";

export const saveDefaultOptions = ({ commit }, payload) => {
  commit(types.SET_DEFAULT_OPTIONS, payload);
};

export const loadPasswordProfile = ({ commit }, { site }) => {
  commit(types.LOAD_PASSWORD_PROFILE, { site });
};

export const getPasswordFromUrlQuery = ({ commit }, { query }) => {
  const password = urlParser.getPasswordFromUrlQuery(query);
  const expectedNbOfElements = Object.keys(defaultPasswordProfile).length;
  if (Object.keys(password).length === expectedNbOfElements) {
    commit(types.SET_PASSWORD, { password });
  }
};

export const savePassword = ({ commit }, payload) => {
  commit(types.SET_PASSWORD, payload);
};

export const resetPassword = ({ commit }) => {
  commit(types.RESET_PASSWORD);
};

export const setBaseURL = ({ commit }, { baseURL }) => {
  commit(types.SET_BASE_URL, { baseURL });
};

export const login = ({ commit }, { access, refresh }) => {
  commit(types.SET_TOKENS, { access_token: access, refresh_token: refresh });
  commit(types.LOGIN);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  commit(types.RESET_PASSWORD);
};

export const getPasswords = ({ commit }, { encryptedKey }) => {
  commit(types.SET_ENCRYPTED_KEY, { encryptedKey });
  return Profile.all().then(response => {
    if (response.data.results.length > 0) {
      const encryptedPasswordProfiles = response.data.results[0];
      const passwords = JSON.parse(
        LessPassCrypto.decrypt(encryptedPasswordProfiles.password_profile, encryptedKey)
      );
      commit(types.LOGIN);
      commit(types.SET_PASSWORDS, { passwords });
      commit(types.SET_ENCRYPTED_PASSWORD_PROFILES_ID, { id: encryptedPasswordProfiles.id });
      return
    }
  }).catch(() => logout({ commit }));;
};


export const saveOrUpdatePassword = ({ commit, state }) => {
  const site = state.password.site;
  const login = state.password.login;
  let passwords = state.passwords.filter(password => {
    return password.site !== site && password.login !== login;
  });
  passwords.push(state.password);
  const encryptedKey = state.encryptedKey;
  const data = JSON.stringify(passwords);
  const encryptedPasswordProfiles = LessPassCrypto.encrypt(
    data,
    encryptedKey
  );
  Profile.update({
    id: state.encryptedPasswordProfilesId,
    password_profile: encryptedPasswordProfiles
  }).then(() => {
    getPasswords({ commit, state }, { encryptedKey });
  });
};

export const deletePassword = ({ commit, state }, { password }) => {
  const site = password.site;
  const login = password.login;
  let passwords = state.passwords.filter(password => {
    return password.site !== site && password.login !== login;
  });
  if (state.password && state.password.site === site && state.password.login == login) {
    state.password = Object.assign({}, state.defaultPassword);
  }
  const encryptedKey = state.encryptedKey;
  const data = JSON.stringify(passwords);
  const encryptedPasswordProfiles = LessPassCrypto.encrypt(
    data,
    encryptedKey
  );
  Profile.update({
    id: state.encryptedPasswordProfilesId,
    password_profile: encryptedPasswordProfiles
  }).then(() => {
    getPasswords({ commit, state }, { encryptedKey });
  });
};

export const displayMessage = ({ commit }, payload) => {
  commit(types.SET_MESSAGE, payload);
};

export const cleanMessage = ({ commit }) => {
  commit(types.CLEAN_MESSAGE);
};
