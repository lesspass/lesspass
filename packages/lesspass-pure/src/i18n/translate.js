const fs = require("fs");
const path = require("path");

const { Translate } = require("@google-cloud/translate").v2;

const en = require("./en.json");

const { languagesAvailable } = require("./index");

const translate = new Translate();

async function translateText(text, targetLanguageCode) {
  const [translations] = await translate.translate(text, targetLanguageCode);
  return Array.isArray(translations) ? translations[0] : translations;
}

languagesAvailable.forEach(async lang => {
  const fileName = path.resolve(__dirname, `${lang}.json`);
  const translation = require(fileName);
  for (const [key, value] of Object.entries(translation)) {
    if (value === en[key]) {
      translation[key] = await translateText(value, lang);
    }
  }
  fs.writeFileSync(fileName, JSON.stringify(translation, null, 2));
  console.log(`${fileName} updated`);
});
