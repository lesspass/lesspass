import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../components/button";
import PasswordProfileLogin from "../passwordGeneration/PasswordProfileLogin";
import PasswordProfileOptions from "../passwordGeneration/PasswordProfileOptions";
import { useAppDispatch } from "../store";
import {
  SettingsState,
  setSettings,
  resetSettings,
  FocusField,
} from "./settingsSlice";
import { defaultSettings } from "../services/settings";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Checkbox, CheckboxItem } from "../components/checkbox";
import { Label } from "../components/fieldset";
import { Select } from "../components/select";

export const SettingsFormSchema = Yup.object()
  .shape({
    site: Yup.string().default(defaultSettings.site),
    login: Yup.string().default(defaultSettings.login),
    lowercase: Yup.boolean().default(defaultSettings.lowercase),
    uppercase: Yup.boolean().default(defaultSettings.uppercase),
    digits: Yup.boolean().default(defaultSettings.digits),
    symbols: Yup.boolean().default(defaultSettings.symbols),
    length: Yup.number().default(defaultSettings.length),
    counter: Yup.number().default(defaultSettings.counter),
    encryptMasterPasswordAtLogin: Yup.boolean().default(
      defaultSettings.encryptMasterPasswordAtLogin,
    ),
    focus: Yup.string<FocusField>().default(defaultSettings.focus),
    isWebExtensionContext: Yup.boolean().default(
      defaultSettings.isWebExtensionContext,
    ),
    removeSubDomain: Yup.boolean().default(defaultSettings.removeSubDomain),
    removeTopLevelDomain: Yup.boolean().default(
      defaultSettings.removeTopLevelDomain,
    ),
  })
  .test(
    "atLeastOneOptionIsChecked",
    "One of lowercase, uppercase, digits or symbols is required",
    (value) =>
      value.lowercase || value.uppercase || value.digits || value.symbols,
  );

export default function SettingsForm({
  settings,
}: {
  settings: SettingsState;
}) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const methods = useForm<SettingsState>({
    resolver: yupResolver(SettingsFormSchema),
    defaultValues: settings,
  });
  const { isDirty, isValid } = methods.formState;

  useEffect(() => {
    methods.reset(settings);
  }, [settings]);

  return (
    <FormProvider {...methods}>
      <form
        id="default-password-profile-form"
        onSubmit={methods.handleSubmit((newSettings) => {
          dispatch(setSettings(newSettings));
        })}
        className="flex flex-col gap-4 overflow-x-scroll"
      >
        <div>
          <div className="mb-2">
            <Label>{t("PasswordProfile.Site")}</Label>
            <CheckboxItem className="pl-1">
              <Checkbox
                id="removeSubDomain"
                {...methods.register("removeSubDomain")}
              />
              <Label htmlFor="removeSubDomain">
                {t("Settings.removeSubDomain")}
              </Label>
            </CheckboxItem>
            <CheckboxItem className="pl-1">
              <Checkbox
                id="removeTopLevelDomain"
                {...methods.register("removeTopLevelDomain")}
              />
              <Label htmlFor="removeTopLevelDomain">
                {t("Settings.removeTopLevelDomain")}
              </Label>
            </CheckboxItem>
          </div>
          <PasswordProfileLogin />
          <PasswordProfileOptions />
        </div>
        <div>
          <Label>{t("Settings.FocusField")}</Label>
          <Select {...methods.register("focus")}>
            <option value="auto">{t("Settings.FocusAuto")}</option>
            <option value="site">{t("PasswordProfile.Site")}</option>
            <option value="login">{t("PasswordProfile.Login")}</option>
            <option value="masterPassword">
              {t("PasswordProfile.MasterPassword")}
            </option>
          </Select>
        </div>
        <div>
          <Label>{t("Settings.SignIn")}</Label>
          <CheckboxItem className="pl-1">
            <Checkbox
              id="encryptMasterPasswordAtLogin"
              {...methods.register("encryptMasterPasswordAtLogin")}
            />
            <Label htmlFor="encryptMasterPasswordAtLogin">
              {t("Settings.EncryptMyMasterPassword")}
            </Label>
          </CheckboxItem>
        </div>
      </form>
      <div className="mt-4 flex items-center gap-2">
        <Button
          type="submit"
          form="default-password-profile-form"
          disabled={!isDirty || !isValid}
        >
          {t("Common.Save")}
        </Button>
        <Button
          type="button"
          onClick={() => {
            dispatch(resetSettings());
          }}
          outline
        >
          {t("Common.Reset")}
        </Button>
      </div>
    </FormProvider>
  );
}
