import reducer, {
  initialState,
  signInStart,
  signInSuccess,
  signInFailure,
  logout,
  selectIsLoading,
  selectError,
  selectIsAuthenticated,
  selectToken,
} from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

test("should return the initial state", () => {
  const nextState = initialState;
  const result = reducer(undefined, {} as PayloadAction);
  expect(result).toEqual(nextState);
});

test("should properly set loading and error state when signInStart", () => {
  const nextState = reducer(initialState, signInStart());
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(false);
  expect(selectIsLoading(rootState)).toEqual(true);
  expect(selectError(rootState)).toEqual(null);
});

it("should properly set loading, error and user information when signInSuccess", () => {
  const payload = { access: "access_token" };
  const nextState = reducer(initialState, signInSuccess(payload));
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(true);
  expect(selectToken(rootState)).toEqual(payload.access);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(null);
});

it("should properly set loading, error and remove user information when signInFailure", () => {
  const error = new Error("Incorrect password");
  const nextState = reducer(
    initialState,
    signInFailure({ error: error.message })
  );
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(false);
  expect(selectToken(rootState)).toEqual(null);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(error.message);
});

it("should properly set loading, error and remove user information when token is null", () => {
  const payload = { access: "access_token" };
  const nextState = reducer(
    reducer(initialState, signInSuccess(payload)),
    logout()
  );
  const rootState = { auth: nextState } as RootState;
  expect(selectIsAuthenticated(rootState)).toEqual(false);
  expect(selectToken(rootState)).toEqual(null);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(null);
});
