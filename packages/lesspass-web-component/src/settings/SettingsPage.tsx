import { useTranslation } from "react-i18next";
import { Title } from "../components/heading";
import { useAppSelector } from "../store";
import SettingsForm from "./SettingsForm";

export default function SettingsPage() {
  const settings = useAppSelector((state) => state.settings);
  const { t } = useTranslation();

  return (
    <div>
      <Title className="mb-2">{t("Settings.Title")}</Title>
      <SettingsForm settings={settings} />
    </div>
  );
}
