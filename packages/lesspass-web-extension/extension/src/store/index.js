import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
  defaultPassword: {
    login: ""
  },
};

export default new Vuex.Store({
  state,
  plugins: [
    createPersistedState({
      key: "lesspass",
      paths: ["defaultPassword"]
    })
  ],
  mutations: {
    updateDefaultLogin(state, login) {
      state.defaultPassword.login = login;
    }
  }
});
