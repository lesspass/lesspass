import { NewPasswordProfile } from "../passwordGeneration/PasswordProfile";
import { Title } from "../components/heading";
import { useTranslation } from "react-i18next";

export default function PasswordProfilePage() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <Title>{t("NewPasswordProfilePage.NewPassword")}</Title>
      </div>
      <NewPasswordProfile />
    </div>
  );
}
