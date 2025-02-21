import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSettings, resetSettings, SettingsState } from "./settingsSlice";
import { saveSettings } from "../services/settings";

const settingsMiddleware = createListenerMiddleware();

settingsMiddleware.startListening({
  actionCreator: setSettings,
  effect: (action) => {
    const { payload } = action;
    saveSettings(payload);
  },
});

settingsMiddleware.startListening({
  actionCreator: resetSettings,
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as SettingsState;
    saveSettings(state);
  },
});

export default settingsMiddleware;
