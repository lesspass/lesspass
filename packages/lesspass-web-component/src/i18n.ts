import i18n from "i18next";
import I18NextXHRBackend from "i18next-http-backend";
import I18NextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18nParser from "./i18next-parser.config";

i18n
  .use(I18NextXHRBackend)
  .use(I18NextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: i18nParser.locales,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
