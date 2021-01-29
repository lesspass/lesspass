import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../auth/authSlice";

const Nav = () => {
  const { t } = useTranslation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">LessPass</Link>
          </li>
          <li>
            <Link data-testid="password-link"  to="/passwords">{t("nav.passwords")}</Link>
          </li>
          <li>
            <Link data-testid="settings-link" to="/settings">
              {t("nav.settings")}
            </Link>
          </li>
          <li>
            <Link data-testid="my-account-link" to="/my_account">{t("nav.myaccount")}</Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LessPass</Link>
        </li>
        <li>
          <Link data-testid="settings-link" to="/settings">{t("nav.settings")}</Link>
        </li>
        <li>
          <Link data-testid="sign-in-link" to="/signIn">{t("nav.signin")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
