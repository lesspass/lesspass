import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PasswordProfile } from "lesspass";
import { defaultSettings, getSettings } from "../services/settings";

export type SettingsState = Pick<
  PasswordProfile,
  | "site"
  | "login"
  | "lowercase"
  | "uppercase"
  | "digits"
  | "symbols"
  | "length"
  | "counter"
> & {
  encryptMasterPasswordAtLogin: boolean;
  focus: keyof PasswordProfile | "masterPassword";
  isWebExtensionContext: boolean;
};

const initialState: SettingsState = getSettings();

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (_, action: PayloadAction<SettingsState>) => {
      return { ...action.payload };
    },
    resetSettings: () => {
      return { ...defaultSettings };
    },
  },
});

export const { setSettings, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
