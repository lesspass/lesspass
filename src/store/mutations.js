import {set} from 'vue';

function setState(state, id, object) {
    set(state, id, Object.assign({}, object));
}

export const mutations = {
    LOGIN(state){
        state.authenticated = true;
    },
    LOGOUT(state){
        state.authenticated = false;
    },
    SET_CURRENT_PASSWORD_PROFILE(state, passwordProfile){
        setState(state, 'currentPasswordProfile', passwordProfile);
    },
    SET_DEFAULT_OPTIONS(state, options){
        setState(state, 'defaultOptions', options);
    }
};