const frLocales = require("./fr.json");
const esLocales = require("./es.json");
const deLocales = require("./de.json");
const zhTWLocales = require("./zh-TW.json");
const zhCNLocales = require("./zh-CN.json");
const ptLocales = require("./pt.json");
const plLocales = require("./pl.json");
const ruLocales = require("./ru.json");

module.exports = {
  locales: {
    fr: frLocales,
    es: esLocales,
    de: deLocales,
    zh: zhTWLocales,
    "zh-CN": zhCNLocales,
    pt: ptLocales,
    pl: plLocales,
    ru: ruLocales
  },
  languagesAvailable: ["de", "es", "fr", "pl", "pt", "ru", "zh-TW", "zh-CN"]
};
