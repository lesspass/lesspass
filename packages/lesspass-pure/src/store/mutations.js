import * as types from "./mutation-types";
import { getSuggestions } from "../services/url-parser";

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
  },
  [types.RESET_PASSWORD](state) {
    state.password = { ...state.defaultPassword };
  },
  [types.SET_PASSWORD](state, { password }) {
    state.password = { ...password };
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
  [types.SET_SITE](state, { site }) {
    state.password.site = site;
  },
  [types.ADD_SUGGESTIONS](state, { site }) {
    if (!site) return;
    const passwords = state.passwords || [];
    const passwordsSites = passwords.map(p => p.site);
    const suggestions = getSuggestions(site)
      .filter(suggestion => passwordsSites.indexOf(suggestion) !== 1)
      .map(suggestion => {
        return {
          ...state.defaultPassword,
          site: suggestion
        };
      });
    state.passwords = suggestions.concat(state.passwords || []);
  },
  [types.SET_MESSAGE](state, { message }) {
    state.message = message;
  },
  [types.CLEAN_MESSAGE](state) {
    state.message = { text: "", status: "success" };
  }
};
