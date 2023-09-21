import reducer, {
  initialState,
  authIsLoading,
  authSuccessful,
  authFailed,
  logout,
  selectIsLoading,
  selectError,
  selectIsAuthenticated,
  selectAccessToken,
} from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

test("should return the initial state", () => {
  const nextState = initialState;
  const result = reducer(undefined, {} as PayloadAction);
  expect(result).toEqual(nextState);
});

test("should properly set loading and error state when authIsLoading", () => {
  const nextState = reducer(initialState, authIsLoading());
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(false);
  expect(selectIsLoading(rootState)).toEqual(true);
  expect(selectError(rootState)).toEqual(null);
});

it("should properly set loading, error and user information when signInSuccess", () => {
  const baseUrl = "https://api.lesspass.com";
  const payload = { access: "access_token", refresh: "refresh_token" };
  const nextState = reducer(
    initialState,
    authSuccessful({ baseUrl, ...payload }),
  );
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(true);
  expect(selectAccessToken(rootState)).toEqual(payload.access);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(null);
});

it("should properly set loading, error and remove user information when signInFailure", () => {
  const error = new Error("Incorrect password");
  const nextState = reducer(initialState, authFailed({ error: error.message }));
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(false);
  expect(selectAccessToken(rootState)).toEqual(null);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(error.message);
});

it("should properly set loading, error and remove user information when logout", () => {
  const baseUrl = "https://api.lesspass.com";
  const payload = { access: "access_token", refresh: "refresh_token" };
  const nextState = reducer(
    reducer(initialState, authSuccessful({ baseUrl, ...payload })),
    logout(),
  );
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(false);
  expect(selectAccessToken(rootState)).toEqual(null);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(null);
});
