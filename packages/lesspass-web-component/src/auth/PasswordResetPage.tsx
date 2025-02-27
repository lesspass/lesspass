import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../store";
import { showSuccess, showError } from "../alerts/alertsSlice";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field, Label, ErrorMessage } from "../components/fieldset";
import { Input } from "../components/input";
import { Title } from "../components/heading";
import { Button } from "../components/button";
import { useConfirmResetPasswordMutation } from "./authApi";
import { useTranslation } from "react-i18next";
import { MasterPasswordInput } from "../components/masterPassword/masterPasswordInput";
import { defaultPasswordProfile, generatePassword } from "lesspass";

export const PasswordResetConfirmSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  masterPassword: Yup.string()
    .min(8, "Your new password is too short")
    .required("Your new password is required"),
});

interface FormValues {
  email: string;
  masterPassword: string;
}

const PasswordResetConfirmForm = ({
  id,
  onSubmit,
  className,
}: {
  id: string;
  className?: string;
  onSubmit: (data: FormValues) => void;
}) => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "", masterPassword: "" },
    resolver: yupResolver(PasswordResetConfirmSchema),
  });
  return (
    <form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor="username">{t("SignInForm.Email")}</Label>
        <Input
          id="username"
          placeholder={t("SignInForm.UsernamePlaceholder")}
          {...register("email")}
        />
        <ErrorMessage message={errors.email?.message} />
      </Field>
      <Field>
        <Label htmlFor="password_confirm-password">
          {t("PasswordResetConfirmForm.NewPassword")}
        </Label>
        <MasterPasswordInput
          id="password_confirm-password"
          autoComplete="new-password"
          placeholder={t("PasswordProfile.MasterPassword")}
          {...register("masterPassword")}
        />
        <ErrorMessage message={errors.masterPassword?.message} />
      </Field>
    </form>
  );
};

const PasswordResetPage = () => {
  const { encryptMasterPasswordAtLogin } = useAppSelector(
    (state) => state.settings,
  );
  const { t } = useTranslation();
  const { uid = "", token = "" } = useParams();
  const navigate = useNavigate();
  const [confirmResetPassword] = useConfirmResetPasswordMutation();
  const dispatch = useAppDispatch();
  return (
    <div>
      <Title className="mb-4">{t("PasswordResetPage.ChangePassword")}</Title>
      <PasswordResetConfirmForm
        id="password_reset_form"
        onSubmit={async ({ email, masterPassword }) => {
          const generatedPassword = await generatePassword(
            { ...defaultPasswordProfile, site: "lesspass.com", login: email },
            masterPassword,
          );
          const password = encryptMasterPasswordAtLogin
            ? generatedPassword
            : masterPassword;
          confirmResetPassword({ uid, token, password })
            .unwrap()
            .then(() => {
              dispatch(
                showSuccess(
                  t("PasswordResetPage.PasswordChangedSuccessfullyTitle"),
                  t("PasswordResetPage.PasswordChangedSuccessfullyMessage"),
                ),
              );
              navigate("/auth/signIn");
            })
            .catch(() => {
              dispatch(
                showError(
                  t("PasswordResetPage.CantChangePasswordTitle"),
                  t("PasswordResetPage.CantChangePasswordMessage"),
                ),
              );
            });
        }}
      />
      <div className="mt-6 mb-4 flex items-center gap-4">
        <Button type="submit" form="password_reset_form" color="blue">
          {t("Common.Change")}
        </Button>
        <Link to="/auth/signIn">{t("Common.Cancel")}</Link>
      </div>
    </div>
  );
};

export default PasswordResetPage;
