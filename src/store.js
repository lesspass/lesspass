import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './api/auth';
import Storage from './api/storage';

Vue.use(Vuex);

const storage = new Storage();
const auth = new Auth(storage);

const state = {
    authenticated: auth.isAuthenticated(),
    email: ''
};

const mutations = {
    logout(state){
        state.authenticated = false;
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
    }
};

const getters = {
    isAuthenticated: state => state.authenticated,
    isGuest: state => !state.authenticated,
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
