import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import authReducer, { authSuccessful } from "./auth/authSlice";
import {
  REFRESH_TOKEN_LOCAL_STORAGE_KEY,
  BASE_URL_LOCAL_STORAGE_KEY,
} from "./constant";

const rootReducer = combineReducers({
  auth: authReducer,
});

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: authSuccessful,
  effect: async (action, listenerApi) => {
    localStorage.setItem(
      REFRESH_TOKEN_LOCAL_STORAGE_KEY,
      action.payload.refresh,
    );
    localStorage.setItem(BASE_URL_LOCAL_STORAGE_KEY, action.payload.baseUrl);
    listenerApi.cancelActiveListeners();
  },
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(listenerMiddleware.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
