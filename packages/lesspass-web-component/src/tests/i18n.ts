import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationEn } from "lesspass-i18n";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  resources: {
    en: {
      translation: translationEn,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
