import Vue from "vue";
import "./images/favicon.ico";
import LessPass from "./LessPass.vue";
import { sync } from "vuex-router-sync";
import store from "./store";
import router from "./router";
import Polyglot from "vue-polyglot";

import frLocales from "./i18n/fr.json";
import esLocales from "./i18n/es.json";
import deLocales from "./i18n/de.json";
import zhLocales from "./i18n/zh.json";
import zhCNLocales from "./i18n/zh-CN.json";
import ptLocales from "./i18n/pt.json";

Vue.use(Polyglot, {
  defaultLanguage: "en",
  languagesAvailable: ["fr", "es", "de", "zh", "zh-CN", "pt"]
});

Vue.locales({
  fr: frLocales,
  es: esLocales,
  de: deLocales,
  zh: zhLocales,
  "zh-CN": zhCNLocales,
  pt: ptLocales
});

sync(store, router);

new Vue({
  el: "#lesspass",
  store,
  router,
  render: h => h(LessPass)
});
