import {set} from 'vue';
import * as types from './mutation-types';

function setState(state, id, object) {
    set(state, id, Object.assign({}, object));
}

export const mutations = {
    [types.LOGIN](state){
        state.authenticated = true;
    },
    [types.LOGOUT](state){
        state.authenticated = false;
    },
    [types.SET_CURRENT_PASSWORD](state, {password}){
        state.lastUse = new Date().getTime();
        setState(state, 'currentPassword', password);
    },
    [types.SET_DEFAULT_PASSWORD](state, {options}){
        setState(state, 'defaultPassword', options);
    },
    [types.SET_PASSWORDS](state, {passwords}){
        state.passwords = passwords;
    },
    [types.DELETE_PASSWORD](state, {id}){
        state.passwords = state.passwords.filter(password => {
            return password.id !== id;
        });
        if (state.currentPassword && state.currentPassword.id === id) {
            state.currentPassword = Object.assign({}, state.defaultPassword);
        }
    },
    [types.SET_BASE_URL](state, {baseURL}){
        state.baseURL = baseURL;
    }
};
