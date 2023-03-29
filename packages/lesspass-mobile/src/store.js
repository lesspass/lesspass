import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import stateReconciler from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import settingsReducer from "./settings/settingsReducer";
import authReducer from "./auth/authReducer";
import errorsReducer from "./errors/errorsReducer";
import profilesReducer from "./password/profilesReducer";
import profileReducer from "./profiles/profileReducer";
import messagesReducer from "./messages/messagesReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  errors: errorsReducer,
  profile: profileReducer,
  profiles: profilesReducer,
  messages: messagesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler,
  whitelist: ["settings", "auth", "messages"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
