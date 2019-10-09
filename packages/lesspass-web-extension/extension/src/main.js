import Vue from "vue";
import "./images/favicon.ico";
import store from "./store";
import Polyglot from "vue-polyglot";

import frLocales from "./i18n/fr.json";
import esLocales from "./i18n/es.json";
import deLocales from "./i18n/de.json";
import zhLocales from "./i18n/zh.json";
import zhCNLocales from "./i18n/zh-CN.json";
import ptLocales from "./i18n/pt.json";
import plLocales from "./i18n/pl.json";

Vue.use(Polyglot, {
  defaultLanguage: "en",
  languagesAvailable: ["fr", "es", "de", "zh", "zh-CN", "pt", "pl"]
});

Vue.locales({
  fr: frLocales,
  es: esLocales,
  de: deLocales,
  zh: zhLocales,
  "zh-CN": zhCNLocales,
  pt: ptLocales,
  pl: plLocales
});

new Vue({
  el: "#lesspass-options",
  store,
  router,
  render: h => h(OptionsPage)
});
