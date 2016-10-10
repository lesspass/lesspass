import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './api/auth';
import Storage from './api/storage';

Vue.use(Vuex);

const storage = new Storage();
const auth = new Auth(storage);

const state = {
    authenticated: auth.isAuthenticated(),
    email: '',
    passwords: []
};

const mutations = {
    setPasswords(state, passwords){
        state.passwords = passwords
    },
    logout(state){
        state.authenticated = false;
        state.passwords = [];
    },
    userAuthenticated(state, user){
        state.authenticated = true;
        state.email = user.email;
    }
};

const actions = {
    userAuthenticated: ({commit}, user) => commit('userAuthenticated', user),
    logout: ({commit}) => {
        auth.logout();
        commit('logout');
    },
    setPasswords: ({commit}, password) => commit('setPasswords', password),
};

const getters = {
    isAuthenticated: state => state.authenticated,
    isGuest: state => !state.authenticated,
    passwords: state => state.passwords,
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
