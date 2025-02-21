import i18n from "i18next";
import I18NextXHRBackend from "i18next-xhr-backend";
import I18NextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18NextXHRBackend)
  .use(I18NextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
