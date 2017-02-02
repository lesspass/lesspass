import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    authenticated: false,
    currentPassword: null,
    passwords: [],
    defaultPassword: {
        login: '',
        site: '',
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        length: 16,
        counter: 1,
        version: 2
    },
    lastUse: new Date().getTime(),
    baseURL: 'https://lesspass.com',
};

actions.loadLocalStorage();

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});