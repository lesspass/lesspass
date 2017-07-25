import test from "ava";
import * as getters from "../../src/store/getters";

test("version", t => {
  const state = {
    password: { version: 1 },
    defaultPassword: { version: 2 }
  };
  const version = getters.version(state);
  t.is(version, 1);
});

test("version no password return default password version", t => {
  const state = {
    password: null,
    defaultPassword: { version: 2 }
  };
  const version = getters.version(state);
  t.is(version, 2);
});

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
