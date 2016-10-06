import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './api/auth';
import HTTP from './api/http';
import Storage from './api/storage';

Vue.use(Vuex);

const storage = new Storage();
const auth = new Auth(storage);
const passwords = new HTTP('passwords', storage);

const state = {
    page: 'index',
    user: {
        authenticated: auth.isAuthenticated()
    },
    passwords: [],
    currentPassword: {}
};

const mutations = {
    setCurrentPassword(state, password){
        state.currentPassword = password
    },
    go(state, page){
        state.page = page
    },
    logout(state){
        state.user = {authenticated: false};
        state.page = 'login';
        state.currentPassword = {
            site: '',
            login: '',
            options: {
                uppercase: true,
                lowercase: true,
                numbers: true,
                symbols: true,
                length: 12,
                counter: 1,
            }
        };
        state.passwords = [];
    },
    userAuthenticated(state, user){
        state.user.authenticated = true;
        state.user.email = user.email;
    },
    loadPasswords(state, passwords){
        state.passwords = passwords
    }
};

const actions = {
    go: ({commit}, page) => commit('go', page),
    userAuthenticated: ({commit}, user) => commit('userAuthenticated', user),
    logout: ({commit}) => {
        auth.logout();
        commit('logout');
    },
    loadPasswords: ({commit}) => {
        passwords.all().then(response => {
            commit('loadPasswords', response.data.results);
        });
    },
    setCurrentPassword: ({commit}, password) => commit('setCurrentPassword', password),
};

const getters = {
    page: state => state.page,
    isAuthenticated: state => state.user.authenticated,
    isGuest: state => !state.user.authenticated,
    passwords: state => state.passwords,
    currentPassword: state => state.currentPassword,
    user: state => state.user,
    baseURL: state => state.baseURL
};

export default function (config) {
    return new Vuex.Store({
        state: Object.assign(config, state),
        getters,
        actions,
        mutations
    });
}

