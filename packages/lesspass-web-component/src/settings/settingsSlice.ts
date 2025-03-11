import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PasswordProfile } from "lesspass";
import { defaultSettings, getSettings } from "../services/settings";

export const FocusFields = ["site", "login", "masterPassword", "auto"] as const;
export type FocusField = (typeof FocusFields)[number];

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
  focus: FocusField;
  isWebExtensionContext: boolean;
  removeSubDomain: boolean;
  removeTopLevelDomain: boolean;
};

const initialState: SettingsState = getSettings();

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      return { ...state, ...action.payload };
    },
    resetSettings: () => {
      return { ...defaultSettings };
    },
  },
});

export const { setSettings, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
