import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectIsAuthenticated } from "../auth/authSlice";

export default function Header() {
  const { t } = useTranslation();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LessPass</Link>
        </li>
        <li>
          <Link to="/settings">{t("Header.settingsLink")}</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/myaccount">{t("Header.myAccount")}</Link>
          </li>
        ) : (
          <li>
            <Link to="/signin">{t("Header.signInLink")}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
