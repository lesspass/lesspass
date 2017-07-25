import { defaultOptions } from "./defaultPassword";
import * as types from "./mutation-types";

export default {
  [types.LOGIN](state) {
    state.authenticated = true;
  },
  [types.SET_TOKEN](state, { token }) {
    state.token = token;
  },
  [types.LOGOUT](state) {
    state.authenticated = false;
    state.token = null;
    state.passwords = [];
    state.password = { ...state.defaultPassword };
  },
  [types.SET_PASSWORD](state, { password }) {
    state.password = { ...password };
  },
  [types.PASSWORD_GENERATED](state) {
    state.lastUse = new Date().getTime();
  },
  [types.SET_DEFAULT_OPTIONS](state, { options }) {
    state.defaultPassword = Object.assign({}, state.defaultPassword, options);
  },
  [types.SET_PASSWORDS](state, { passwords }) {
    state.passwords = passwords;
  },
  [types.DELETE_PASSWORD](state, { id }) {
    state.passwords = state.passwords.filter(password => {
      return password.id !== id;
    });
    if (state.password && state.password.id === id) {
      state.password = Object.assign({}, state.defaultPassword);
    }
  },
  [types.SET_BASE_URL](state, { baseURL }) {
    state.baseURL = baseURL;
  },
  [types.SET_VERSION](state, { version }) {
    const length = version === 1 ? 12 : 16;
    state.password.version = version;
    state.password.length = length;
  },
  [types.LOAD_PASSWORD_PROFILE](state, { site }) {
    const oneMinuteAgo = new Date().getTime() - 60 * 1000;
    const siteDontMatch = !(site && site.endsWith(state.password.site));
    if (state.lastUse < oneMinuteAgo || siteDontMatch) {
      state.password = { ...state.defaultPassword, site };
    }
    const passwords = state.passwords || [];
    for (let i = 0; i < passwords.length; i++) {
      const password = passwords[i];
      if (site.endsWith(password.site)) {
        state.password = { ...password };
      }
    }
  },
  [types.SET_MESSAGE](state, { message }) {
    state.message = message;
  },
  [types.CLEAN_MESSAGE](state) {
    state.message = { text: "", status: "success" };
  },
  [types.CHECK_SHOW_OPTIONS](state) {
    let showOptions = false;
    for (let key in defaultOptions) {
      if (defaultOptions[key] !== state.password[key]) {
        showOptions = true;
      }
    }
    state.showOptions = showOptions;
  },
  [types.TOGGLE_SHOW_OPTIONS](state) {
    state.showOptions = !state.showOptions;
  }
};
