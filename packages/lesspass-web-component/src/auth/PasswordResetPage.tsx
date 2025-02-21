import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { useAppDispatch } from "../store";
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

export const PasswordResetConfirmSchema = Yup.object({
  password: Yup.string()
    .min(8, "Your new password is too short")
    .required("Your new password is required"),
});

interface FormValues {
  password: string;
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
    defaultValues: { password: "" },
    resolver: yupResolver(PasswordResetConfirmSchema),
  });
  return (
    <form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor="password_confirm-password">
          {t("PasswordResetConfirmForm.NewPassword")}
        </Label>
        <Input
          {...register("password")}
          id="password_confirm-password"
          data-testid="password_confirm-password"
          placeholder={t("PasswordResetConfirmForm.NewPassword")}
          name="password"
          type="password"
        />
        <ErrorMessage message={errors.password?.message} />
      </Field>
    </form>
  );
};

const PasswordResetPage = () => {
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
        onSubmit={(values) => {
          const { password } = values;
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
      <div className="flex items-center mt-6 mb-4 gap-4">
        <Button type="submit" form="password_reset_form" color="blue">
          {t("Common.Change")}
        </Button>
        <Link to="/auth/signIn">{t("Common.Cancel")}</Link>
      </div>
    </div>
  );
};

export default PasswordResetPage;
