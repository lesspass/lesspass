import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import stateReconciler from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import ConfigReducer from "./config/configReducer";
import AuthReducer from "./auth/authReducer";
import ErrorsReducer from "./errors/errorsReducer";

const rootReducer = combineReducers({
  config: ConfigReducer,
  auth: AuthReducer,
  errors: ErrorsReducer
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler,
  whitelist: ["config", "auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
