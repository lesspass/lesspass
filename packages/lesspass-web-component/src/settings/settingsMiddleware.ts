import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSettings, resetSettings } from "./settingsSlice";
import { saveSettings } from "../services/settings";
import { RootState } from "../store";

const settingsMiddleware = createListenerMiddleware();

settingsMiddleware.startListening({
  actionCreator: setSettings,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const { payload } = action;
    saveSettings({ ...state.settings, ...payload });
  },
});

settingsMiddleware.startListening({
  actionCreator: resetSettings,
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    saveSettings(state.settings);
  },
});

export default settingsMiddleware;
