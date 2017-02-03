import Storage from '../api/storage';
import Auth from '../api/auth';
import HTTP from '../api/http';

import * as types from './mutation-types'

const storage = new Storage();
const auth = new Auth(storage);
const Passwords = new HTTP('passwords', storage);

export const loadPasswordFirstTime = ({commit}) => {
    commit(types.LOAD_PASSWORD_FIRST_TIME);
};

export const loadPasswordForSite = ({commit}, payload) => {
    commit(types.LOAD_PASSWORD_FOR_SITE, payload);
};

export const saveDefaultPassword = ({commit}, payload) => {
    commit(types.SET_DEFAULT_PASSWORD, payload);
};

export const savePassword = ({commit}, payload) => {
    commit(types.SET_PASSWORD, payload);
};

export const saveBaseURL = ({commit}, payload) => {
    commit(types.SET_BASE_URL, payload);
};

export const saveVersion = ({commit}, payload) => {
    commit(types.SET_VERSION, payload);
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
        Passwords.get(payload).then(response => commit(types.SET_PASSWORD, {password: response.data}));
    }
};

export const saveOrUpdatePassword = ({commit, state}) => {
    if (state.password && typeof state.password.id === 'undefined') {
        const site = state.password.site;
        const login = state.password.login;
        if (site || login) {
            Passwords.create(state.password).then(() => {
                getPasswords({commit});
            })
        }
    } else {
        Passwords.update(state.password).then(() => {
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