import Storage from '../api/storage';
import Auth from '../api/auth';
import HTTP from '../api/http';

import * as types from './mutation-types'

const storage = new Storage();
const auth = new Auth(storage);
const Passwords = new HTTP('passwords', storage);

export const loadLocalStorage = ({state}) => {
    Object.assign({}, state, storage.json())
};

export const saveDefaultPassword = ({commit}, payload) => {
    storage.save(payload);
    commit(types.SET_DEFAULT_PASSWORD, payload);
};

export const saveCurrentPassword = ({commit}, payload) => {
    storage.save(payload);
    commit(types.SET_CURRENT_PASSWORD, payload);
};

export const saveBaseURL = ({commit}, payload) => {
    storage.save(payload);
    commit(types.SET_BASE_URL, payload);
};

export const saveVersion = ({commit}, payload) => {
    commit(types.SET_BASE_URL, payload);
};

export const login = ({commit}) => {
    commit(types.LOGIN);
};

export const logout = ({commit}) => {
    auth.logout();
    commit(types.LOGOUT);
};

export const getPasswords = ({commit}) => {
    if (auth.isAuthenticated()) {
        Passwords.all().then(response => commit(types.SET_PASSWORDS, {passwords: response.data.results}));
    }
};

export const getPassword = ({commit}, payload) => {
    if (auth.isAuthenticated()) {
        Passwords.get(payload).then(response => commit(types.SET_CURRENT_PASSWORD, {password: response.data}));
    }
};

export const saveOrUpdateCurrentPassword = ({commit, state}) => {
    if (state.currentPassword && typeof state.currentPassword.id === 'undefined') {
        Passwords.create(state.currentPassword).then(() => {
            getPasswords({commit});
        })
    } else {
        Passwords.update(state.currentPassword).then(() => {
            getPasswords({commit});
        })
    }
};

export const deletePassword = ({commit}, payload) => {
    Passwords.remove(payload).then(() => {
        commit(types.DELETE_PASSWORD, payload);
    });
};

export const refreshToken = ({commit}) => {
    if (auth.isAuthenticated()) {
        auth.refreshToken().catch(() => {
            commit(types.LOGOUT);
        });
    }
};