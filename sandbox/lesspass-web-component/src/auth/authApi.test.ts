import configureMockStore from "redux-mock-store";
import { mocked } from "ts-jest/utils";
import thunk from "redux-thunk";
import * as api from "../services/api";
import {
  AuthState,
  initialState,
  signIn,
  signInStart,
  signInSuccess,
  signInFailure,
} from "./authSlice";

import { AppDispatch } from "../store";

jest.mock("../services/api");

const mockedApi = mocked(api, true);

const mockedStore = configureMockStore<AuthState, AppDispatch>([thunk]);

test("creates both signInStart and signInSuccess when signIn succeeds", async () => {
  const requestPayload = {
    email: "contact@example.org",
    password: "password",
  };
  const responsePayload = {
    access: "access_token",
    refresh: "refresh_token",
  };
  const store = mockedStore(initialState);
  mockedApi.signIn.mockResolvedValueOnce(responsePayload);

  await store.dispatch(signIn(requestPayload));

  const expectedActions = [signInStart(), signInSuccess(responsePayload)];
  expect(store.getActions()).toEqual(expectedActions);
});

test("creates both signInStart and signInFailure when signIn fails", async () => {
  const requestPayload = {
    email: "contact@example.org",
    password: "wrong password",
  };
  const responseError = new Error("Invalid credentials");
  const store = mockedStore(initialState);
  mockedApi.signIn.mockRejectedValueOnce(responseError);

  await store.dispatch(signIn(requestPayload));

  const expectedActions = [
    signInStart(),
    signInFailure({ error: responseError }),
  ];
  expect(store.getActions()).toEqual(expectedActions);
});
