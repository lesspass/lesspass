import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
import defaultPassword from "./defaultPassword";
import { defaultBaseURL } from "../api/baseURL";
import { key } from "../services/localStore";

Vue.use(Vuex);

const state = {
  isAuthenticated: false,
  password: Object.assign({}, defaultPassword),
  passwords: [],
  message: "",
  defaultPassword,
  settings: {
    baseURL: defaultBaseURL,
    encryptMasterPassword: true,
    noAutoFillSite: false
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key,
      paths: ["defaultPassword", "settings"]
    })
  ]
});
