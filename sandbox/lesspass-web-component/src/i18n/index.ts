import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";
import { SETTINGS_KEY } from "../services/localStore";
import defaultSettings from "../settings/defaultSettings";

export function initI18n(store: Store) {
  const lang = window.navigator.languages
    ? window.navigator.languages[0]
    : window.navigator.language;
  let shortLang = lang;
  if (shortLang.indexOf("-") !== -1) shortLang = shortLang.split("-")[0];
  if (shortLang.indexOf("_") !== -1) shortLang = shortLang.split("_")[0];

  const settings = (store.getItem(SETTINGS_KEY) as Settings) || defaultSettings;
  const { language } = settings;

  i18n.use(initReactI18next).init({
    resources,
    lng: language || shortLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
  return i18n;
}
