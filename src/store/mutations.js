import * as types from './mutation-types';

export default {
  [types.LOGIN](state){
    state.authenticated = true;
  },
  [types.SET_TOKEN](state, {token}){
    state.token = token;
  },
  [types.LOGOUT](state){
    state.authenticated = false;
    state.token = null;
    state.passwords = [];
    state.password = {...state.defaultPassword};
  },
  [types.SET_PASSWORD](state, {password}){
    state.password = {...password};
  },
  [types.PASSWORD_GENERATED](state){
    state.lastUse = new Date().getTime();
  },
  [types.SET_DEFAULT_OPTIONS](state, {options}){
    state.defaultPassword = Object.assign({}, state.defaultPassword, options);
  },
  [types.SET_PASSWORDS](state, {passwords}){
    state.passwords = passwords;
  },
  [types.DELETE_PASSWORD](state, {id}){
    state.passwords = state.passwords.filter(password => {
      return password.id !== id;
    });
    if (state.password && state.password.id === id) {
      state.password = Object.assign({}, state.defaultPassword);
    }
  },
  [types.SET_BASE_URL](state, {baseURL}){
    state.baseURL = baseURL;
  },
  [types.SET_SITE](state, {site}){
    if (!state.password.site) {
      state.password.site = site;
    }
  },
  [types.SET_VERSION](state, {version}){
    const length = version === 1 ? 12 : 16;
    state.password.version = version;
    state.password.length = length;
  },
  [types.LOAD_PASSWORD_FIRST_TIME](state){
    const tenMinutesAgo = new Date().getTime() - 60 * 1000;
    if (tenMinutesAgo > state.lastUse) {
      state.password = {...state.defaultPassword};
    }
  },
  [types.LOAD_PASSWORD_WITH_SITE](state, {site}){
    const passwords = state.passwords;
    for (let i = 0; i < state.passwords.length; i++) {
      const password = passwords[i];
      if (password.site.endsWith(site)) {
        state.password = {...password};
      }
    }
  },
  [types.SET_MESSAGE](state, {message}){
    state.message = message;
  },
  [types.CLEAN_MESSAGE](state){
    state.message = {text: '', status: 'success'};
  },
};
