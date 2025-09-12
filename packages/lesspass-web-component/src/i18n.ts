import i18n from "i18next";
import I18NextXHRBackend from "i18next-http-backend";
import I18NextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { supportedLanguages } from "lesspass-i18n";

i18n
  .use(I18NextXHRBackend)
  .use(I18NextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
