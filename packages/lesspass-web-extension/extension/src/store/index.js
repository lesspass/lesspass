import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";
import defaultPassword from "../../../../lesspass-pure/src/store/defaultPassword";

Vue.use(Vuex);

const state = {
  message: "",
  defaultPassword: defaultPassword,
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
