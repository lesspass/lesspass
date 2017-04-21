import Password from '../api/password';
import User from '../api/user';

import * as types from './mutation-types'

export const loadPasswordFirstTime = ({commit}) => {
  commit(types.LOAD_PASSWORD_FIRST_TIME);
};

export const refreshToken = ({commit, state}) => {
  const token = state.token;
  if (token) {
    User.requestNewToken({token}, {baseURL: state.baseURL})
      .then(newToken => commit(types.SET_TOKEN, {token: newToken}))
      .catch(() => commit(types.LOGOUT));
  }
};

export const loadPasswordForSite = ({commit}, payload) => {
  commit(types.LOAD_PASSWORD_FOR_SITE, payload);
};

export const saveDefaultOptions = ({commit}, payload) => {
  commit(types.SET_DEFAULT_OPTIONS, payload);
};

export const passwordGenerated = ({commit}) => {
  commit(types.PASSWORD_GENERATED);
};

export const savePassword = ({commit}, payload) => {
  commit(types.SET_PASSWORD, payload);
};

export const saveVersion = ({commit}, payload) => {
  commit(types.SET_VERSION, payload);
};

export const login = ({commit}, payload) => {
  commit(types.SET_BASE_URL, payload);
  commit(types.SET_TOKEN, payload);
  commit(types.LOGIN);
};

export const logout = ({commit}) => {
  commit(types.LOGOUT);
};

export const getPasswords = ({commit, state}) => {
  if (state.authenticated) {
    Password.all(state).then(response => commit(types.SET_PASSWORDS, {passwords: response.data.results}));
  }
};

export const saveOrUpdatePassword = ({commit, state}) => {
  if (state.password && typeof state.password.id === 'undefined') {
    const site = state.password.site;
    const login = state.password.login;
    if (site || login) {
      Password.create(state.password, state)
        .then(response => {
          savePassword({commit}, {password: response.data});
          getPasswords({commit, state});
        })
    }
  } else {
    Password.update(state.password, state)
      .then(() => {
        getPasswords({commit, state});
      })
  }
};

export const deletePassword = ({commit, state}, payload) => {
  Password.delete(payload, state)
    .then(() => {
      commit(types.DELETE_PASSWORD, payload);
    });
};

export const displayMessage = ({commit}, payload) => {
  commit(types.SET_MESSAGE, payload);
};

export const cleanMessage = ({commit}) => {
  commit(types.CLEAN_MESSAGE);
};
