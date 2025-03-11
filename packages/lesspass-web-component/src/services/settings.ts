import { defaultPasswordProfile } from "lesspass";
import { SettingsState } from "../settings/settingsSlice";
import { LESSPASS_SETTINGS } from "./constant";
import { cleanSite } from "./site";

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
  focus: "auto",
  isWebExtensionContext: false,
  removeSubDomain: false,
  removeTopLevelDomain: false,
};

export function getSettings(
  userSettings: Partial<SettingsState> = {},
): SettingsState {
  try {
    const settings = window.localStorage.getItem(LESSPASS_SETTINGS);
    if (settings) {
      const savedSettings = JSON.parse(settings);
      return cleanSite({
        ...defaultSettings,
        ...savedSettings,
        ...userSettings,
      });
    }
    return { ...defaultSettings, ...userSettings };
  } catch (error) {
    return { ...defaultSettings };
  }
}
