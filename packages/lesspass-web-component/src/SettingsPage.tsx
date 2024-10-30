import { useTranslation } from "react-i18next";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "./constant";

type SupportedLanguage = "en" | "fr";

export default function SettingsPage() {
  const { t, i18n } = useTranslation();

  const setLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value as SupportedLanguage;
    i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, language);
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <input
          type="radio"
          id="en-language-button"
          name="language"
          value="en"
          checked={i18n.language === "en"}
          onChange={setLanguage}
        />
        <label htmlFor="en-language-button">en</label>
        <input
          type="radio"
          id="fr-language-button"
          name="language"
          value="fr"
          checked={i18n.language === "fr"}
          onChange={setLanguage}
        />
        <label htmlFor="fr-language-button">fr</label>
        <div>{t("SettingsPage.selectLanguage")}</div>
      </div>
    </div>
  );
}
