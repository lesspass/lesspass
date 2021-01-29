import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import passwords from "./passwords/passwordsSlice";

const rootReducer = combineReducers({ auth, passwords });

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;
