import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './api/auth';
import HTTP from './api/http';
import Storage from './api/storage';

Vue.use(Vuex);

const storage = new Storage();
const auth = new Auth(storage);
const Passwords = new HTTP('passwords', storage);

const state = {
    authenticated: auth.isAuthenticated(),
    email: '',
    isPasswordNew: false,
    passwordCreated: false,
    newPassword: {}
};

const mutations = {
    logout(state){
        state.authenticated = false;
    },
    userAuthenticated(state, user){
        state.authenticated = true;
        state.email = user.email;
    },
    newPassword(state, newPassword){
        state.isPasswordNew = true;
        state.newPassword = newPassword;
    },
    existingPassword(state){
        state.isPasswordNew = false;
        state.newPassword = {};
    },
    passwordCreated(state){
        state.passwordCreated = true;
        setTimeout(()=> {
            state.passwordCreated = false;
        }, 5000);
    }
};

const actions = {
    userAuthenticated: ({commit}, user) => commit('userAuthenticated', user),
    newPassword: ({commit}, newPassword) => commit('newPassword', newPassword),
    existingPassword: ({commit}) => commit('existingPassword'),
    logout: ({commit}) => {
        auth.logout();
        commit('logout');
    },
    savePassword: ({commit, state}) => {
        Passwords.create(state.newPassword).then(() => {
            commit('existingPassword');
            commit('passwordCreated');
        })
    }
};

const getters = {
    isAuthenticated: state => state.authenticated,
    isGuest: state => !state.authenticated,
    isPasswordNew: state => state.isPasswordNew,
    passwordCreated: state => state.passwordCreated,
    email: state => state.email,
    baseURL: state => state.baseURL
};

export default function (config) {
    return new Vuex.Store({
        state: Object.assign(state, config),
        getters,
        actions,
        mutations
    });
}

const fiveMinutes = 1000 * 60 * 5;
if (auth.isAuthenticated()) {
    auth.refreshToken();
    setInterval(()=> {
        auth.refreshToken();
    }, fiveMinutes);
}
