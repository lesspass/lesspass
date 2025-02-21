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

function showAndHideAfter10s(
  title = "",
  message = "",
  type: "success" | "danger" | "warning" = "success",
) {
  return (dispatch: AppDispatch) => {
    const alert: IAlert = {
      id: `${Date.now().toString()}:${title}`,
      title,
      message,
      type,
    };
    dispatch(showAlert(alert));
    setTimeout(() => dispatch(hideAlert(alert)), 10000);
  };
}

export function showSuccess(title: string, message: string = "") {
  return showAndHideAfter10s(title, message, "success");
}

export function showError(title: string, message: string = "") {
  return showAndHideAfter10s(title, message, "danger");
}

export default alertsSlice.reducer;
