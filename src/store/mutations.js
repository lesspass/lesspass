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
        setState(state, 'currentPassword', password);
    },
    [types.SET_DEFAULT_PASSWORD](state, {options}){
        setState(state, 'defaultPassword', options);
    }
};
