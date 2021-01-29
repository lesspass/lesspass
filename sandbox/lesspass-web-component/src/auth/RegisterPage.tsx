import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SignInForm
        id="sign-in-form"
        onSubmit={(credential) => console.log(credential)}
      />
      {t("auth.alreadyhaveanaccount")}
      <Link to="/signIn">sign in</Link>
    </div>
  );
};

export default RegisterPage;
