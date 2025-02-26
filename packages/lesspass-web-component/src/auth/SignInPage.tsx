import LoginForm from "./SignInForm";
import { Button } from "../components/button";
import { Title } from "../components/heading";
import { useLazyGetCurrentUserQuery, useSignInMutation } from "./authApi";
import { Link, useLocation, useNavigate } from "react-router";
import { setBaseUrl } from "../services/baseUrl";
import { HelpMessage } from "../components/fieldset";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../store";
import { defaultPasswordProfile, generatePassword } from "lesspass";
import { showError } from "../alerts/alertsSlice";

function SignInPage() {
  const { encryptMasterPasswordAtLogin } = useAppSelector(
    (state) => state.settings,
  );
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [login] = useSignInMutation();
  const [getCurrentUser] = useLazyGetCurrentUserQuery();

  return (
    <div className="grid grid-cols-1 gap-4">
      <Title>{t("SignInPage.SignInToLessPass")}</Title>
      <div>
        <LoginForm
          id="sign-in-form"
          onSubmit={async ({ baseUrl, email, masterPassword }) => {
            const { from } = location.state || {
              from: { pathname: "/" },
            };
            setBaseUrl(baseUrl);
            const generatedPassword = await generatePassword(
              { ...defaultPasswordProfile, site: "lesspass.com", login: email },
              masterPassword,
            );
            const password = encryptMasterPasswordAtLogin
              ? generatedPassword
              : masterPassword;
            login({ email, password })
              .unwrap()
              .then(() => {
                getCurrentUser()
                  .unwrap()
                  .then(() => navigate(from));
              })
              .catch(() => {
                dispatch(
                  showError(
                    t("SignInPage.UnableToSignInTitle"),
                    t("SignInPage.UnableToSignInMessage"),
                  ),
                );
              });
          }}
        />
        <div className="text-right text-sm/6">
          <Link to="/auth/forgotPassword">
            {t("SignInPage.ForgotPassword")}
          </Link>
        </div>
      </div>
      <div>
        <Button
          type="submit"
          form="sign-in-form"
          className="w-full justify-center"
        >
          {t("SignInPage.SignIn")}
        </Button>
      </div>
      <div>
        <HelpMessage message={t("SignInPage.LessPassServerDecommissioned")} />
      </div>
    </div>
  );
}

export default SignInPage;
