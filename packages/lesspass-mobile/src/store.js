import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import settingsReducer from './settings/settingsReducer';
import authReducer from './auth/authReducer';
import errorsReducer from './errors/errorsReducer';
import profilesReducer from './password/profilesReducer';
import profileReducer from './profiles/profileReducer';
import messagesReducer from './messages/messagesReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  errors: errorsReducer,
  profile: profileReducer,
  profiles: profilesReducer,
  messages: messagesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler,
  whitelist: ['settings', 'auth', 'messages'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
