import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { useAppDispatch } from "../store";
import { showSuccess, showError } from "../alerts/alertsSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field, Label, ErrorMessage } from "../components/fieldset";
import { Input } from "../components/input";
import { Title } from "../components/heading";
import { Button } from "../components/button";
import { useResetPasswordMutation } from "./authApi";
import { useTranslation } from "react-i18next";

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

interface FormValues {
  email: string;
}

const ForgotPasswordForm = ({
  id,
  onSubmit,
  className = "",
}: {
  id: string;
  onSubmit: (data: FormValues) => void;
  className?: string;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "" },
    resolver: yupResolver(ForgotPasswordSchema),
  });

  return (
    <form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor="forgot_password_form-email">Email</Label>
        <Input
          id="forgot_password_form-email"
          data-testid="forgot_password_form-email"
          placeholder="iamawesome@example.org"
          {...register("email")}
        />
        <ErrorMessage message={errors.email?.message} />
      </Field>
    </form>
  );
};

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-1 gap-4">
      <Title>{t("ForgotPasswordPage.ResetYourPassword")}</Title>
      <ForgotPasswordForm
        id="forgot_password_form"
        onSubmit={(values) => {
          const { email } = values;
          resetPassword(email)
            .unwrap()
            .then(() => {
              dispatch(
                showSuccess(
                  t("ForgotPasswordPage.ConfirmLinkSendTitle"),
                  t("ForgotPasswordPage.ConfirmLinkSendMessage", { email }),
                ),
              );
              navigate("/auth/SignIn");
            })
            .catch((error) => {
              let title = t("ForgotPasswordPage.UnableToChangeYourPassword");
              let message = error.message;
              if (error.code === "auth/user-not-found") {
                title = t("ForgotPasswordPage.UnknownEmail");
                message = t("ForgotPasswordPage.UserDoesNotExists");
              }
              dispatch(showError(title, message));
            });
        }}
      />
      <div className="grid grid-cols-2 items-center gap-4">
        <Button
          type="submit"
          form="forgot_password_form"
          className="w-full justify-center"
        >
          {t("Common.Send")}
        </Button>
        <Link to="/auth/SignIn" className="w-full text-center">
          {t("Common.Cancel")}
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
