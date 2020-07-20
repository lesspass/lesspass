import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
import defaultPassword from "./defaultPassword";

Vue.use(Vuex);

const state = {
  authenticated: localStorage.getItem("access_token") !== null,
  password: Object.assign({}, defaultPassword),
  passwords: [],
  message: "",
  defaultPassword: defaultPassword,
  showOptions: false
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key: "lesspass",
      paths: ["defaultPassword"]
    })
  ]
});
