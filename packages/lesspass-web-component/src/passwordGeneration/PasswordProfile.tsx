import {
  PasswordProfileFromApiWithMasterPassword,
  PasswordProfileWithMasterPassword,
} from "../types";
import {
  defaultPasswordProfile,
  generatePassword,
  type PasswordProfile,
} from "lesspass";
import { ReactNode, useEffect, useState } from "react";
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
import { generateURL } from "./url";
import { useAppDispatch, useAppSelector } from "../store";
import { showInfo } from "../alerts/alertsSlice";
import { resetSettings } from "../settings/settingsSlice";
import { removeSiteSubdomain } from "./site";

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

export type PasswordProfileForm =
  | PasswordProfileWithMasterPassword
  | PasswordProfileFromApiWithMasterPassword;

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
  children,
  onClear,
}: {
  passwordProfile: PasswordProfile;
  focus: keyof PasswordProfileForm;
  children?: ReactNode;
  onClear?: () => void;
}) {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  const { t } = useTranslation();
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(
    null,
  );
  const methods = useForm<PasswordProfileForm>({
    resolver: yupResolver(PasswordProfileFormSchema),
    defaultValues: {
      ...passwordProfile,
      site: settings.removeSubDomain
        ? removeSiteSubdomain(passwordProfile.site)
        : passwordProfile.site,
    },
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
      <div className="mt-4 flex items-center gap-2">
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
            const url = `https://www.lesspass.com/?${generateURL(methods.getValues())}`;
            navigator.clipboard.writeText(url);
            dispatch(
              showInfo(
                t("PasswordProfile.PasswordProfileCopiedInClipboard"),
                undefined,
                3000,
              ),
            );
          }}
          outline
        >
          {t("PasswordProfile.Share")}
        </Button>
        <Button
          type="button"
          onClick={() => {
            methods.reset();
            setGeneratedPassword(null);
            dispatch(resetSettings());
            onClear && onClear();
          }}
          outline
        >
          {t("PasswordProfile.Clear")}
        </Button>
        {children && children}
      </div>
      <GeneratedPassword generatedPassword={generatedPassword} />
    </FormProvider>
  );
}

export function NewPasswordProfile() {
  const { t } = useTranslation();
  const [createPasswordProfile] = useCreatePasswordProfileMutation();
  const navigate = useNavigate();
  const methods = useForm<PasswordProfileForm>({
    resolver: yupResolver(PasswordProfileFormSchema),
    defaultValues: { ...defaultPasswordProfile },
  });
  const { isDirty, isValid } = methods.formState;

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
      <div className="mt-4 flex items-center gap-2">
        <Button
          type="submit"
          form="password-profile-form"
          disabled={!isDirty || !isValid}
        >
          {t("Common.Save")}
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          outline
        >
          {t("Common.Cancel")}
        </Button>
      </div>
    </FormProvider>
  );
}
