import * as types from './mutation-types';

export const mutations = {
    [types.LOGIN](state){
        state.authenticated = true;
    },
    [types.LOGOUT](state){
        state.authenticated = false;
    },
    [types.SET_CURRENT_PASSWORD_PROFILE](state, passwordProfile){
        state.currentPasswordProfile = passwordProfile;
    }
};