import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../services/api";
import { RootState, AppDispatch } from "../store";

export type PasswordsState = {
  isLoading: boolean;
  results: PasswordProfile[];
  error: string | null;
};

export const initialState: PasswordsState = {
  isLoading: false,
  results: [],
  error: null,
};

const passwordsSlice = createSlice({
  name: "passwords",
  initialState,
  reducers: {
    getPasswordsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getPasswordsSuccess(state, action: PayloadAction<GetPasswordsResponsePayload>) {
      const { results } = action.payload;
      state.isLoading = false;
      state.results = results.map((r) => ({
        id: r.id,
        site: r.site,
        login: r.login,
        lowercase: r.lowercase,
        uppercase: r.uppercase,
        digits: r.numbers,
        symbols: r.symbols,
        length: r.length,
        counter: r.counter,
      }));
      state.error = null;
    },
    getPasswordsFailure(state, action) {
      const { error } = action.payload;
      state.isLoading = false;
      state.results = [];
      state.error = error;
    },
  },
});

export const {
  getPasswordsStart,
  getPasswordsSuccess,
  getPasswordsFailure,
} = passwordsSlice.actions;

export default passwordsSlice.reducer;

export const selectPasswords = (state: RootState) => state.passwords.results;
export const selectError = (state: RootState) => state.passwords.error;
export const selectIsLoading = (state: RootState) => state.passwords.isLoading;

export const getPasswords = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPasswordsStart());
    const results = await api.getPasswords();
    dispatch(getPasswordsSuccess(results));
  } catch (error) {
    dispatch(getPasswordsFailure({ error }));
  }
};
