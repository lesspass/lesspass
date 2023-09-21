import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "../store";
import {
  signIn as apiSignIn,
  refreshTokens as apiRefreshTokens,
  AccessToken,
  RefreshToken,
  AuthSuccessResponsePayload,
  setBaseUrl
} from "lesspass-api";

export type AuthState = {
  isLoading: boolean;
  accessToken: AccessToken | null;
  error: string | null;
};

export const initialState: AuthState = {
  isLoading: false,
  accessToken: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authIsLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    authSuccessful(
      state,
      action: PayloadAction<{ baseUrl: string } & AuthSuccessResponsePayload>,
    ) {
      const { access } = action.payload;
      state.accessToken = access;
      state.isLoading = false;
      state.error = null;
    },
    authFailed(state, action) {
      const { error } = action.payload;
      state.isLoading = false;
      state.accessToken = null;
      state.error = error;
    },
    logout(state) {
      state.isLoading = false;
      state.accessToken = null;
      state.error = null;
    },
  },
});

export const { authIsLoading, authSuccessful, authFailed, logout } =
  authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectError = (state: RootState) => state.auth.error;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuthenticated = createSelector(
  [selectAccessToken],
  (accessToken) => accessToken !== null,
);

export function refreshTokens(baseUrl: string, refreshToken: RefreshToken) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authIsLoading());
      setBaseUrl(baseUrl)
      const tokens = await apiRefreshTokens(refreshToken);
      dispatch(
        authSuccessful({
          baseUrl,
          ...tokens,
        }),
      );
      return Promise.resolve(tokens);
    } catch (error) {
      dispatch(logout());
      return Promise.reject("Refresh tokens failed");
    }
  };
}

export function signIn(baseUrl: string, email: string, password: string) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authIsLoading());
      setBaseUrl(baseUrl)
      const tokens = await apiSignIn(email, password);
      dispatch(
        authSuccessful({
          baseUrl,
          ...tokens,
        }),
      );
    } catch (error) {
      dispatch(authFailed({ error }));
    }
  };
}
