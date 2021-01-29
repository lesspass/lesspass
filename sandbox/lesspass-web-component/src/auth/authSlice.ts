import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../services/api";
import { RootState, AppDispatch } from "../store";

export type AuthState = {
  isLoading: boolean;
  token: AccessToken | null;
  error: string | null;
};

export const initialState: AuthState = {
  isLoading: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signInSuccess(state, action: PayloadAction<SignInResponsePayload>) {
      const { access } = action.payload;
      state.token = access;
      state.isLoading = false;
      state.error = null;
    },
    signInFailure(state, action) {
      const { error } = action.payload;
      state.isLoading = false;
      state.token = null;
      state.error = error;
    },
    logout(state) {
      state.isLoading = false;
      state.token = null;
      state.error = null;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;
export const selectError = (state: RootState) => state.auth.error;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsAuthenticated = createSelector(
  [selectToken],
  (token) => token !== null
);

export const signIn = ({ email, password }: SignInRequestPayload) => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(signInStart());
    const tokens = await api.signIn({ email, password });
    dispatch(signInSuccess(tokens));
  } catch (error) {
    dispatch(signInFailure({ error }));
  }
};
