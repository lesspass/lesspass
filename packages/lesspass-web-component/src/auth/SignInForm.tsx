import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field, Label, ErrorMessage } from "../components/fieldset";
import { Input } from "../components/input";
import { MasterPasswordInput } from "../components/masterPassword/masterPasswordInput";
import { getBaseUrl } from "../services/baseUrl";
import { useTranslation } from "react-i18next";

export const SignInSchema = Yup.object({
  baseUrl: Yup.string().required("LessPass server URL is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  masterPassword: Yup.string().required("Master password is mandatory"),
});

type SignInForm = {
  baseUrl: string;
  email: string;
  masterPassword: string;
};

export default function SignInForm({
  id,
  onSubmit,
  className = "",
}: {
  id: string;
  onSubmit: (data: SignInForm) => void;
  className?: string;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInForm>({
    defaultValues: { baseUrl: getBaseUrl(), email: "", masterPassword: "" },
    resolver: yupResolver(SignInSchema),
  });
  return (
    <form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor="sign-in-form__baseUrl">
          {t("SignInForm.LessPassServer")}
        </Label>
        <Input id="sign-in-form__baseUrl" {...register("baseUrl")} />
        <ErrorMessage message={errors.email?.message} />
      </Field>
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
        <Label htmlFor="password">{t("SignInForm.MasterPassword")}</Label>
        <MasterPasswordInput
          id="password"
          autoComplete="new-password"
          {...register("masterPassword")}
        />
        <ErrorMessage message={errors.masterPassword?.message} />
      </Field>
    </form>
  );
}
