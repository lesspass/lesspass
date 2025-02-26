import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authReducer } from "./auth/authSlice";
import { api } from "./api";
import alertsReducer from "./alerts/alertsSlice";
import authMiddleware from "./auth/authMiddleware";
import settingsReducer from "./settings/settingsSlice";
import settingsMiddleware from "./settings/settingsMiddleware";

export const rootReducer = combineReducers({
  alerts: alertsReducer,
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  settings: settingsReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(api.middleware)
        .prepend(authMiddleware.middleware)
        .prepend(settingsMiddleware.middleware),
  });
}

const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
