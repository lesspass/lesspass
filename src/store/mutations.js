export const mutations = {
    LOGIN(state){
        state.authenticated = true;
    },
    LOGOUT(state){
        state.authenticated = false;
    }
};