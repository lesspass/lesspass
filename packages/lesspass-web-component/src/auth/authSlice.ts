import { createSlice } from "@reduxjs/toolkit";
import { authApi, CurrentUser } from "./authApi";

export interface AuthState {
  currentUser: CurrentUser | null;
}

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.currentUser = payload;
        },
      )
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchRejected,
        () => initialState,
      );
  },
});

export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
