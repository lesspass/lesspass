import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import defaultPassword from "../../../../lesspass-pure/src/store/defaultPassword";

Vue.use(Vuex);

const state = {
  message: "",
  defaultPassword: defaultPassword,
};

export default new Vuex.Store({
  state,
  plugins: [
    createPersistedState({
      key: "lesspass",
      paths: ["defaultPassword"]
    })
  ]
});
