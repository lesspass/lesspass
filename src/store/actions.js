import Password from "../api/password";
import User from "../api/user";
import * as urlParser from "../services/url-parser";
import * as types from "./mutation-types";
import defaultPasswordProfile from "./defaultPassword";

export const refreshToken = ({ commit, state }) => {
  const token = state.token;
  if (token) {
    User.requestNewToken({ token }, { baseURL: state.baseURL })
      .then(newToken => commit(types.SET_TOKEN, { token: newToken }))
      .catch(() => commit(types.LOGOUT));
  }
};

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

export const resetPassword = ({ commit, state }) => {
  commit(types.RESET_PASSWORD);
};

export const login = ({ commit }, payload) => {
  commit(types.SET_BASE_URL, payload);
  commit(types.SET_TOKEN, payload);
  commit(types.LOGIN);
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  commit(types.RESET_PASSWORD);
};

export const getPasswords = ({ commit, state }) => {
  if (state.authenticated) {
    return Password.all(state).then(response => {
      const passwords = response.data.results;
      commit(types.SET_PASSWORDS, { passwords });
      return passwords;
    });
  }
  return Promise.resolve([]);
};

export const saveOrUpdatePassword = ({ commit, state }) => {
  const site = state.password.site;
  const login = state.password.login;
  const existingPassword = state.passwords.find(password => {
    return password.site === site && password.login === login;
  });
  if (existingPassword) {
    const newPassword = Object.assign({}, existingPassword, state.password);
    Password.update(newPassword, state).then(() => {
      getPasswords({ commit, state });
    });
  } else {
    Password.create(state.password, state).then(() => {
      getPasswords({ commit, state });
    });
  }
};

export const deletePassword = ({ commit, state }, payload) => {
  Password.delete(payload, state).then(() => {
    commit(types.DELETE_PASSWORD, payload);
  });
};

export const displayMessage = ({ commit }, payload) => {
  commit(types.SET_MESSAGE, payload);
};

export const cleanMessage = ({ commit }) => {
  commit(types.CLEAN_MESSAGE);
};
