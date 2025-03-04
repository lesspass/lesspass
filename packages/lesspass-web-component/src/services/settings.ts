import { defaultPasswordProfile } from "lesspass";
import { SettingsState } from "../settings/settingsSlice";
import { LESSPASS_SETTINGS } from "./constant";

export function saveSettings(settings: SettingsState) {
  try {
    window.localStorage.setItem(LESSPASS_SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error(`Error can't set settings:`, settings, error);
  }
}

export const defaultSettings: SettingsState = {
  ...defaultPasswordProfile,
  encryptMasterPasswordAtLogin: true,
  focus: "site",
  isWebExtensionContext: false,
  removeSubDomain: false,
};

export function getSettings(): SettingsState {
  try {
    const settings = window.localStorage.getItem(LESSPASS_SETTINGS);
    if (settings) {
      const savedSettings = JSON.parse(settings);
      return {
        ...defaultSettings,
        ...savedSettings,
      };
    }
    return { ...defaultSettings };
  } catch (error) {
    return { ...defaultSettings };
  }
}
