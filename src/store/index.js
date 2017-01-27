import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    currentPasswordProfile: null,
    passwordProfiles: {},
    defaultOptions: {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        length: 16,
        counter: 1,
        version: 2
    },
    baseURL: 'https://lesspass.com',
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});