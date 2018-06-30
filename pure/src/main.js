import Vue from "vue";
import "./images/favicon.ico";
import LessPass from "./LessPass.vue";
import { sync } from "vuex-router-sync";
import store from "./store";
import router from "./router";
import Polyglot from "vue-polyglot";

Vue.use(Polyglot, {
  defaultLanguage: "en",
  languagesAvailable: ["fr", "es", "de", "zh", "zh-CN", "pt"]
});

sync(store, router);

new Vue({
  el: "#lesspass",
  beforeCreate() {
    this.$polyglot.getLocale({
      baseURL: "dist/i18n",
      lang: "auto"
    });
  },
  store,
  router,
  render: h => h(LessPass)
});
