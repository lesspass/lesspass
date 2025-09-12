import translationCa from "./locales/ca/translation.json";
import translationDe from "./locales/de/translation.json";
import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";
import translationFr from "./locales/fr/translation.json";
import translationIt from "./locales/it/translation.json";
import translationPl from "./locales/pl/translation.json";
import translationPt from "./locales/pt/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationZhCN from "./locales/zh-CN/translation.json";
import translationZhTW from "./locales/zh-TW/translation.json";

export const supportedLanguages = [
  "ca",
  "de",
  "en",
  "es",
  "fr",
  "it",
  "pl",
  "pt",
  "ru",
  "zh-CN",
  "zh-TW",
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const translations = {
  ca: { translation: translationCa },
  de: { translation: translationDe },
  en: { translation: translationEn },
  es: { translation: translationEs },
  fr: { translation: translationFr },
  it: { translation: translationIt },
  pl: { translation: translationPl },
  pt: { translation: translationPt },
  ru: { translation: translationRu },
  "zh-CN": { translation: translationZhCN },
  "zh-TW": { translation: translationZhTW },
} as const;

export type TranslationKeys = typeof translationEn;

export const defaultLanguage: SupportedLanguage = "en";

export function getBestLanguageMatch(
  deviceLanguage: string,
  supportedLangs: readonly string[] = supportedLanguages,
): SupportedLanguage {
  if (supportedLangs.includes(deviceLanguage)) {
    return deviceLanguage as SupportedLanguage;
  }

  const languageCode = deviceLanguage.split("-")[0];
  if (supportedLangs.includes(languageCode)) {
    return languageCode as SupportedLanguage;
  }

  return defaultLanguage;
}

export {
  translationCa,
  translationDe,
  translationEn,
  translationEs,
  translationFr,
  translationIt,
  translationPl,
  translationPt,
  translationRu,
  translationZhCN,
  translationZhTW,
};

export default {
  supportedLanguages,
  translations,
  defaultLanguage,
  getBestLanguageMatch,
};
