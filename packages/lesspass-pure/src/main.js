import Vue from "vue";
import Polyglot from "vue-polyglot";
import { sync } from "vuex-router-sync";

import LessPass from "./LessPass.vue";
import store from "./store";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "balloon-css/balloon.css";

import { languagesAvailable, locales } from "./i18n";

Vue.use(Polyglot, {
  defaultLanguage: "en",
  languagesAvailable
});

Vue.locales(locales);

sync(store, router);

Vue.config.productionTip = true;

new Vue({
  store,
  router,
  render: h => h(LessPass)
}).$mount("#lesspass");
