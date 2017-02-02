import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const defaultPassword = {
    login: '',
    site: '',
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    length: 16,
    counter: 1,
    version: 2
};

const state = {
    authenticated: false,
    password: defaultPassword,
    passwords: [],
    defaultPassword: defaultPassword,
    lastUse: null,
    baseURL: 'https://lesspass.com',
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [createPersistedState({key: 'lesspass'})]
});