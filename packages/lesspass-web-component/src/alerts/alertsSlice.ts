import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../store";
import { IAlert } from "./Alerts";
import { authApi } from "../auth/authApi";

export interface AlertsState {
  [key: string]: IAlert;
}

const initialState: AlertsState = {};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<IAlert>) => {
      state[action.payload.id] = action.payload;
    },
    hideAlert: (state, action: PayloadAction<IAlert>) => {
      delete state[action.payload.id];
    },
    hideAllAlerts: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      () => initialState,
    );
  },
});

export const { showAlert, hideAlert, hideAllAlerts } = alertsSlice.actions;

export const selectAlerts = (state: RootState) => state.alerts;

function showAndHideAfterXSeconds(
  title = "",
  message = "",
  type: "success" | "danger" | "info" = "success",
  duration = 10000,
) {
  return (dispatch: AppDispatch) => {
    const alert: IAlert = {
      id: `${Date.now().toString()}:${title}`,
      title,
      message,
      type,
    };
    dispatch(showAlert(alert));
    setTimeout(() => dispatch(hideAlert(alert)), duration);
  };
}

export function showInfo(
  title: string,
  message: string = "",
  duration: number = 10000,
) {
  return showAndHideAfterXSeconds(title, message, "info", duration);
}

export function showSuccess(
  title: string,
  message: string = "",
  duration: number = 10000,
) {
  return showAndHideAfterXSeconds(title, message, "success", duration);
}

export function showError(
  title: string,
  message: string = "",
  duration: number = 10000,
) {
  return showAndHideAfterXSeconds(title, message, "danger", duration);
}

export default alertsSlice.reducer;
