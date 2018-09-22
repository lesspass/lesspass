import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { default as stateReconciler } from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import ConfigReducer from "./Config/ConfigReducer";

const rootReducer = combineReducers({
  config: ConfigReducer
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler,
  whitelist: ["config"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
