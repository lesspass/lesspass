import test from "ava";
import * as getters from "../../src/store/getters";

test("passwordURL", t => {
  const state = {
    password: {
      login: "test@example.org",
      site: "example.org",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
      length: 16,
      counter: 1,
      version: 2
    },
    baseURL: "https://lesspass.com"
  };

  t.is(
    getters.passwordURL(state),
    "https://lesspass.com/#/?login=test@example.org&site=example.org&uppercase=true&lowercase=true&numbers=true&symbols=false&length=16&counter=1&version=2"
  );
});

test("isDefaultProfile", t => {
  const state = {
    password: {
      login: "test@example.org",
      site: "example.org",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    },
    defaultPassword: {
      login: "",
      site: "",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    }
  };
  t.true(getters.isDefaultProfile(state));
});

test("isDefaultProfile false", t => {
  const state = {
    password: {
      login: "test@example.org",
      site: "example.org",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
      length: 32,
      counter: 1,
      version: 1
    },
    defaultPassword: {
      login: "",
      site: "",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    }
  };
  t.false(getters.isDefaultProfile(state));
});

test("isAuthenticated", t => {
  const state = {
    authenticated: true
  };
  t.true(getters.isAuthenticated(state));
  t.false(getters.isGuest(state));
});

test("isGuest", t => {
  const state = {
    authenticated: false
  };
  t.false(getters.isAuthenticated(state));
  t.true(getters.isGuest(state));
});
