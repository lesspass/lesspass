import {
  defaultPasswordProfile,
  generatePassword,
  type PasswordProfile,
} from "lesspass";
import { useEffect, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/input";
import { MasterPasswordInput } from "../components/masterPassword/masterPasswordInput";
import { Field, Label } from "../components/fieldset";
import { Button } from "../components/button";
import GeneratedPassword from "./GeneratedPassword";
import { useNavigate } from "react-router";
import { useCreatePasswordProfileMutation } from "../passwordProfiles/passwordProfilesApi";
import PasswordProfileLogin from "./PasswordProfileLogin";
import PasswordProfileOptions from "./PasswordProfileOptions";
import { useTranslation } from "react-i18next";

export const PasswordProfileFormSchema = Yup.object()
  .shape({
    site: Yup.string().default(defaultPasswordProfile.site),
    login: Yup.string().default(defaultPasswordProfile.login),
    masterPassword: Yup.string().required(),
    lowercase: Yup.boolean().default(defaultPasswordProfile.lowercase),
    uppercase: Yup.boolean().default(defaultPasswordProfile.uppercase),
    digits: Yup.boolean().default(defaultPasswordProfile.digits),
    symbols: Yup.boolean().default(defaultPasswordProfile.symbols),
    length: Yup.number().default(defaultPasswordProfile.length),
    counter: Yup.number().default(defaultPasswordProfile.counter),
  })
  .test(
    "atLeastOneOptionIsChecked",
    "One of lowercase, uppercase, digits or symbols is required",
    (value) =>
      value.lowercase || value.uppercase || value.digits || value.symbols,
  );

export type PasswordProfileForm = PasswordProfile & { masterPassword: string };

export function PasswordProfileForm({
  id = "password-profile-form",
  focus = "site",
  onSubmit,
}: {
  id?: string;
  onSubmit: (values: PasswordProfile, masterPassword: string) => void;
  focus?: keyof PasswordProfileForm;
}) {
  const { t } = useTranslation();
  const { register, handleSubmit, setFocus } =
    useFormContext<PasswordProfileForm>();

  useEffect(() => {
    setFocus(focus, { shouldSelect: true });
  }, [setFocus]);

  return (
    <form
      id={id}
      onSubmit={handleSubmit((values) => {
        const { masterPassword, ...passwordProfile } = values;
        onSubmit(passwordProfile, masterPassword);
      })}
      className="overflow-x-scroll"
    >
      <Field>
        <Label htmlFor="site">{t("PasswordProfile.Site")}</Label>
        <Input id="site" {...register("site")} />
      </Field>
      <PasswordProfileLogin />
      <Field>
        <Label htmlFor="masterPassword">
          {t("PasswordProfile.MasterPassword")}
        </Label>
        <MasterPasswordInput
          id="masterPassword"
          {...register("masterPassword")}
        />
      </Field>
      <PasswordProfileOptions />
    </form>
  );
}

export default function PasswordProfile({
  passwordProfile,
  focus,
}: {
  passwordProfile: PasswordProfile;
  focus: keyof PasswordProfileForm;
}) {
  const { t } = useTranslation();
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(
    null,
  );
  const methods = useForm<PasswordProfileForm>({
    resolver: yupResolver(PasswordProfileFormSchema),
    defaultValues: passwordProfile,
  });

  return (
    <FormProvider {...methods}>
      <PasswordProfileForm
        focus={focus}
        onSubmit={(passwordProfile, masterPassword) => {
          generatePassword(passwordProfile, masterPassword).then(
            (generatedPassword) => {
              setGeneratedPassword(generatedPassword);
              return navigator.clipboard.writeText(generatedPassword);
            },
          );
        }}
      />
      <div className="flex items-center gap-2 mt-4">
        <Button
          type="submit"
          form="password-profile-form"
          disabled={!methods.formState.isDirty || !methods.formState.isValid}
          className="w-full justify-center"
        >
          {t("PasswordProfile.GenerateAndCopy")}
        </Button>
        <Button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          outline
        >
          {t("PasswordProfile.Clear")}
        </Button>
      </div>
      <GeneratedPassword generatedPassword={generatedPassword} />
    </FormProvider>
  );
}

export function NewPasswordProfile() {
  const [createPasswordProfile] = useCreatePasswordProfileMutation();
  const navigate = useNavigate();
  const methods = useForm<PasswordProfileForm>({
    resolver: yupResolver(PasswordProfileFormSchema),
    defaultValues: { ...defaultPasswordProfile },
  });

  return (
    <FormProvider {...methods}>
      <PasswordProfileForm
        focus="site"
        onSubmit={async (passwordProfile) => {
          createPasswordProfile(passwordProfile)
            .unwrap()
            .then((newPasswordProfile) =>
              navigate(`/passwordProfiles/${newPasswordProfile.id}/`),
            );
        }}
      />
      <div className="flex items-center gap-2 mt-4">
        <Button
          type="submit"
          form="password-profile-form"
          disabled={!methods.formState.isDirty || !methods.formState.isValid}
        >
          Save
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          outline
        >
          Cancel
        </Button>
      </div>
    </FormProvider>
  );
}
