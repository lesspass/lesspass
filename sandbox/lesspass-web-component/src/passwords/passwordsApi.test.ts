import configureMockStore from "redux-mock-store";
import { mocked } from "ts-jest/utils";
import thunk from "redux-thunk";
import * as api from "../services/api";

import {
  PasswordsState,
  initialState,
  getPasswords,
  getPasswordsStart,
  getPasswordsSuccess,
  getPasswordsFailure,
} from "./passwordsSlice";

import { AppDispatch } from "../store";

jest.mock("../services/api");

const mockedApi = mocked(api, true);

const mockedStore = configureMockStore<PasswordsState, AppDispatch>([thunk]);

test("creates both getPasswordsStart and getPasswordsSuccess when getPasswords succeeds", async () => {
  const responsePayload = {
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
  const store = mockedStore(initialState);
  mockedApi.getPasswords.mockResolvedValueOnce(responsePayload);

  await store.dispatch(getPasswords());

  const expectedActions = [
    getPasswordsStart(),
    getPasswordsSuccess(responsePayload),
  ];
  expect(store.getActions()).toEqual(expectedActions);
});

test("creates both getPasswordsStart and getPasswordsFailure when getPasswords fails", async () => {
  const responseError = new Error("Invalid credentials");
  const store = mockedStore(initialState);
  mockedApi.getPasswords.mockRejectedValueOnce(responseError);

  await store.dispatch(getPasswords());

  const expectedActions = [
    getPasswordsStart(),
    getPasswordsFailure({ error: responseError }),
  ];
  expect(store.getActions()).toEqual(expectedActions);
});
