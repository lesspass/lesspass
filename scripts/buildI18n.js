const walk = require('walk');
const fs = require('fs');
const path = require('path');
const parser = require('vue-polyglot-utils');

const SOURCES_DIR = '../src';
const walker = walk.walk(SOURCES_DIR, {followLinks: false, filters: ["i18n"]});
const locale = {};
walker.on("file", (root, fileStats, next) => {
  const file = path.join(root, fileStats.name);
  fs.readFile(file, (err, data) => {
    const pieceOfLocale = parser.extractLocales(data);
    if (Object.keys(pieceOfLocale).length > 0) {
      Object.assign(locale, pieceOfLocale);
    }
    next();
  });
});

const I18N_DIR = '../src/i18n';
const LANGUAGES_AVAILABLE = ['zh', 'zh-CN', 'fr', 'es', 'de', 'en'];
walker.on("end", () => {
  LANGUAGES_AVAILABLE.forEach(lang => {
    const localeFile = path.join(I18N_DIR, `${lang}.json`);
    let existingLocale = {};
    if (fs.existsSync(localeFile)) {
      existingLocale = require(localeFile);
    }

    const localeOrdered = {};
    Object.keys(locale).sort().forEach(function(key) {
      if (key in existingLocale) {
        localeOrdered[key] = existingLocale[key];
      } else {
        localeOrdered[key] = locale[key];
      }
    });
    fs.writeFileSync(localeFile, JSON.stringify(localeOrdered, null, 2));
    fs.appendFileSync(localeFile, '\n');
  });
});
