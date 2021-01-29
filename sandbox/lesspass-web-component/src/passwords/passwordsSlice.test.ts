import reducer, {
  initialState,
  getPasswordsStart,
  getPasswordsSuccess,
  getPasswordsFailure,
  selectIsLoading,
  selectError,
  selectPasswords,
} from "./passwordsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

test("should return the initial state", () => {
  const nextState = initialState;
  const result = reducer(undefined, {} as PayloadAction);
  expect(result).toEqual(nextState);
});

test("should properly set loading and error state when getPasswordsStart", () => {
  const nextState = reducer(initialState, getPasswordsStart());
  const rootState = { passwords: nextState } as RootState;
  expect(selectPasswords(rootState)).toEqual([]);
  expect(selectIsLoading(rootState)).toEqual(true);
  expect(selectError(rootState)).toEqual(null);
});

it("should properly set loading, error and state when getPasswordsSuccess", () => {
  const payload = {
    results: [
      {
        id: "p1",
        site: "lesspass.com",
        login: "contact@lesspass.com",
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 16,
        counter: 1,
      },
    ],
  };
  const nextState = reducer(initialState, getPasswordsSuccess(payload));
  const rootState = { passwords: nextState } as RootState;
  expect(selectPasswords(rootState)).toEqual([
    {
      id: "p1",
      site: "lesspass.com",
      login: "contact@lesspass.com",
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true,
      length: 16,
      counter: 1,
    },
  ]);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(null);
});

it("should properly set loading, error and state getPasswordsFailure", () => {
  const error = new Error("Incorrect password");
  const nextState = reducer(
    initialState,
    getPasswordsFailure({ error: error.message })
  );
  const rootState = { passwords: nextState } as RootState;
  expect(selectPasswords(rootState)).toEqual([]);
  expect(selectIsLoading(rootState)).toEqual(false);
  expect(selectError(rootState)).toEqual(error.message);
});
