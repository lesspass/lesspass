import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import { useTranslation } from "react-i18next";

const SignInPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SignInForm
        id="sign-in-form"
        onSubmit={(credential) => console.log(credential)}
      />
      {t("auth.donthaveanaccount")}
      <Link data-testid="register-link" to="/register">
        register
      </Link>
    </div>
  );
};

export default SignInPage;
