import Vue from "vue";
import Polyglot from "vue-polyglot";
import { sync } from "vuex-router-sync";

import LessPass from "./LessPass.vue";
import store from "./store";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "balloon-css/balloon.css";
import "awesomplete/awesomplete.css";

import frLocales from "./i18n/fr.json";
import esLocales from "./i18n/es.json";
import deLocales from "./i18n/de.json";
import zhLocales from "./i18n/zh.json";
import zhCNLocales from "./i18n/zh-CN.json";
import ptLocales from "./i18n/pt.json";
import plLocales from "./i18n/pl.json";
import ruLocales from "./i18n/ru.json";

Vue.use(Polyglot, {
  defaultLanguage: "en",
  languagesAvailable: ["fr", "es", "de", "zh", "zh-CN", "pt", "pl", "ru"]
});

Vue.locales({
  fr: frLocales,
  es: esLocales,
  de: deLocales,
  zh: zhLocales,
  "zh-CN": zhCNLocales,
  pt: ptLocales,
  pl: plLocales,
  ru: ruLocales
});

sync(store, router);

Vue.config.productionTip = true;

new Vue({
  store,
  router,
  render: h => h(LessPass)
}).$mount("#lesspass");
