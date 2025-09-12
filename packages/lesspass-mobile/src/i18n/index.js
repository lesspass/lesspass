import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";
import {
  translations,
  supportedLanguages,
  getBestLanguageMatch,
} from "lesspass-i18n";

const deviceLanguages = getLocales();
const deviceLanguage =
  deviceLanguages.length > 0 ? deviceLanguages[0].languageTag : "en";

const languageToUse = getBestLanguageMatch(deviceLanguage, supportedLanguages);

i18next.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lng: languageToUse,
  fallbackLng: "en",
  debug: __DEV__,
  resources: translations,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
