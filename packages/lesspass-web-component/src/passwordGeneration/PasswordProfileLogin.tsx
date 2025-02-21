import { useFormContext } from "react-hook-form";
import { Input } from "../components/input";
import { Field, Label } from "../components/fieldset";
import { useTranslation } from "react-i18next";

export default function PasswordProfileLogin() {
  const { t } = useTranslation();
  const { register } = useFormContext();
  return (
    <Field>
      <Label htmlFor="login">{t("PasswordProfile.Login")}</Label>
      <Input id="login" {...register("login")} />
    </Field>
  );
}
