import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.json";
import frTranslation from "./translations/fr.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

export const defaultLanguage = "en";

export function initI18n(language?: string) {
  const lang = window.navigator.languages
    ? window.navigator.languages[0]
    : window.navigator.language;
  let shortLang = lang;
  if (shortLang.indexOf("-") !== -1) {
    shortLang = shortLang.split("-")[0];
  }
  if (shortLang.indexOf("_") !== -1) {
    shortLang = shortLang.split("_")[0];
  }
  i18n.use(initReactI18next).init({
    resources,
    lng: language || shortLang,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
  return i18n;
}
