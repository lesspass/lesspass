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
    newPassword: {},

    passwords: [],
    password: {},
    defaultPassword: {
        site: '',
        login: '',
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
    }
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
    },
    SET_PASSWORDS(state, passwords){
        state.passwords = passwords;
    },
    SET_PASSWORD(state, {password}){
        state.password = password;
    },
    DELETE_PASSWORD(state, {id}){
        var passwords = state.passwords;
        state.passwords = passwords.filter(password => {
            return password.id !== id;
        });

        if (state.password.id === id) {
            state.password = state.defaultPassword;
        }
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
    },
    refreshToken: ({commit}) => {
        if (auth.isAuthenticated()) {
            auth.refreshToken().catch(() => {
                commit('logout');
            });
        }
    },
    FETCH_PASSWORDS: ({commit}) => {
        if (auth.isAuthenticated()) {
            Passwords.all().then(response => commit('SET_PASSWORDS', response.data.results));
        }
    },
    FETCH_PASSWORD: ({commit}, password) => {
        Passwords.get(password).then(response => commit('SET_PASSWORD', {password: response.data}));
    },
    DELETE_PASSWORD: ({commit}, {id}) => {
        Passwords.remove({id}).then(()=> {
            commit('DELETE_PASSWORD', {id});
        });
    }
};

const getters = {
    passwords: state => state.passwords,
    password: state => {
        var password = state.password;
        if (Object.keys(password).length === 0) {
            return state.defaultPassword;
        }
        return password;
    },
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