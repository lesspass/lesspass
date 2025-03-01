import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSettings, resetSettings } from "./settingsSlice";
import { saveSettings } from "../services/settings";
import { RootState } from "../store";

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
    const state = listenerApi.getState() as RootState;
    saveSettings(state.settings);
  },
});

export default settingsMiddleware;
