import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
import defaultPassword from "./defaultPassword";

Vue.use(Vuex);

const state = {
  authenticated: false,
  password: Object.assign({}, defaultPassword),
  passwords: [],
  message: "",
  defaultPassword: defaultPassword,
  showOptions: false,
  access_token: null,
  refresh_token: null,
  baseURL: "https://lesspass.com"
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key: "lesspass",
      paths: ["access_token", "refresh_token", "baseURL", "authenticated", "defaultPassword"]
    })
  ]
});
