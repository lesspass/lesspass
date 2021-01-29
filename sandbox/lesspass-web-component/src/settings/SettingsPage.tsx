import React from "react";
import { useTranslation } from "react-i18next";

type SettingsPageProps = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

const SettingsPage = ({ settings, setSettings }: SettingsPageProps) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const setLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    changeLanguage(language);
    setSettings({
      ...settings,
      language,
    });
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="use-master-password-for-auth-checkbox"
          data-testid="use-master-password-for-auth-checkbox"
          name="useMasterPasswordForAuth"
          checked={settings.useMasterPasswordForAuth}
          onChange={(event) =>
            setSettings({
              ...settings,
              useMasterPasswordForAuth: event.target.checked,
            })
          }
        />
        <label htmlFor="use-master-password-for-auth-checkbox">
          {t("settings.usemymasterpassword")}
        </label>
        <small>{t("settings.usemymasterpassworddescription")}</small>
      </div>

      <div>
        <input
          type="radio"
          id="en-radio-button"
          data-testid="en-radio-button"
          name="language"
          value="en"
          checked={i18n.language === "en"}
          onChange={setLanguage}
        />
        <label htmlFor="en-radio-button">en</label>
        <input
          type="radio"
          id="fr-radio-button"
          data-testid="fr-radio-button"
          name="language"
          value="fr"
          checked={i18n.language === "fr"}
          onChange={setLanguage}
        />
        <label htmlFor="fr-radio-button">fr</label>
        <div>{t("settings.selectlanguage")}</div>
      </div>
    </div>
  );
};

export default SettingsPage;
