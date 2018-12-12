import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import stateReconciler from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import settingsReducer from "./settings/settingsReducer";
import authReducer from "./auth/authReducer";
import errorsReducer from "./errors/errorsReducer";
import profilesReducer from "./password/profilesReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  errors: errorsReducer,
  profiles: profilesReducer
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler,
  whitelist: ["settings", "auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
