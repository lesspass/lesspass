import mutations from "./mutations";
import * as types from "./mutation-types";
import defaultPassword from "./defaultPassword";

test("LOGOUT", () => {
  const LOGOUT = mutations[types.LOGOUT];
  const state = {
    isAuthenticated: true
  };
  LOGOUT(state);
  expect(state.isAuthenticated).toBe(false);
});

test("RESET_PASSWORD set default password", () => {
  const RESET_PASSWORD = mutations[types.RESET_PASSWORD];
  const state = {
    password: { counter: 2 },
    defaultPassword: { counter: 1 }
  };
  RESET_PASSWORD(state);
  expect(state.password.counter).toBe(1);
});

test("LOGOUT clean user personal info", () => {
  const LOGOUT = mutations[types.LOGOUT];
  const state = {
    password: { counter: 2 },
    passwords: [{ id: "1", site: "test@example.org" }],
    defaultPassword: { counter: 1 }
  };
  LOGOUT(state);
  expect(state.passwords.length).toBe(0);
  expect(state.password.counter).toBe(2);
});

test("LOGIN", () => {
  const LOGIN = mutations[types.LOGIN];
  const state = { isAuthenticated: false };
  LOGIN(state);
  expect(state.isAuthenticated).toBe(true);
});

test("SET_PASSWORD", () => {
  const SET_PASSWORD = mutations[types.SET_PASSWORD];
  const state = { password: null };
  SET_PASSWORD(state, { password: { uppercase: true, counter: 2 } });
  expect(state.password.counter).toBe(2);
  expect(state.password.uppercase).toBe(true);
});

test("SET_PASSWORD immutable", () => {
  const SET_PASSWORD = mutations[types.SET_PASSWORD];
  const state = {};
  const password = { counter: 2 };
  SET_PASSWORD(state, { password });
  password.counter = 1;
  expect(state.password.counter).toBe(2);
});

test("SET_DEFAULT_OPTIONS", () => {
  const SET_DEFAULT_OPTIONS = mutations[types.SET_DEFAULT_OPTIONS];
  const state = {
    defaultPassword: {
      site: "",
      login: "",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    }
  };
  SET_DEFAULT_OPTIONS(state, { options: { symbols: false, length: 30 } });
  expect(state.defaultPassword.length).toBe(30);
  expect(state.defaultPassword.symbols).toBe(false);
});

test("SET_PASSWORDS", () => {
  const SET_PASSWORDS = mutations[types.SET_PASSWORDS];
  const state = {
    passwords: []
  };
  SET_PASSWORDS(state, { passwords: [{ site: "site1" }, { site: "site2" }] });
  expect(state.passwords[0].site).toBe("site1");
  expect(state.passwords[1].site).toBe("site2");
});

test("DELETE_PASSWORD", () => {
  const DELETE_PASSWORD = mutations[types.DELETE_PASSWORD];
  const state = {
    passwords: [
      { id: "1", site: "site1" },
      { id: "2", site: "site2" }
    ]
  };
  expect(state.passwords.length).toBe(2);
  DELETE_PASSWORD(state, { id: "1" });
  expect(state.passwords.length).toBe(1);
});

test("DELETE_PASSWORD replace state.password with state.defaultPassword", () => {
  const DELETE_PASSWORD = mutations[types.DELETE_PASSWORD];
  const state = {
    passwords: [
      { id: "1", length: 30 },
      { id: "2", length: 16 }
    ],
    password: { id: "1", length: 30 },
    defaultPassword: { length: 16 }
  };
  DELETE_PASSWORD(state, { id: "1" });
  expect(state.password.length).toBe(16);
});

test("LOAD_PASSWORD_PROFILE", () => {
  const state = {
    password: {
      login: "",
      site: "",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    },
    passwords: [
      {
        id: "b89fdd8e-8e82-475a-ace4-91bcbd2042dc",
        login: "contact@example.org",
        site: "subdomaine.example.org",
        lowercase: true,
        uppercase: true,
        symbols: true,
        numbers: true,
        counter: 1,
        length: 16,
        version: 2
      },
      {
        id: "7cbadebf-49c8-4136-a579-6ee5beb6de7c",
        login: "contact@example.org",
        site: "www.example.org",
        lowercase: true,
        uppercase: false,
        symbols: false,
        numbers: true,
        counter: 1,
        length: 8,
        version: 2
      },
      {
        id: "31a50139-4add-4486-b553-5e33b4540640",
        login: "contact@example.org",
        site: "lesspass.com",
        lowercase: true,
        uppercase: true,
        symbols: true,
        numbers: true,
        counter: 1,
        length: 12,
        version: 1
      }
    ],
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
    },
    lastUse: null
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "www.example.org" });
  expect(state.password).toEqual(state.passwords[1]);
});

test("LOAD_PASSWORD_PROFILE do nothing if id not empty", () => {
  const state = {
    password: {
      id: "1",
      site: "example.org"
    },
    passwords: []
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "lesspass.com" });
  expect(state.password.site).toBe("example.org");
});

test("LOAD_PASSWORD_PROFILE with passwords", () => {
  const state = {
    password: {
      site: ""
    },
    passwords: [
      { id: "1", site: "www.example.org" },
      { id: "2", site: "www.google.com" }
    ]
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "www.google.com" });
  expect(state.password.id).toBe("2");
  expect(state.password.site).toBe("www.google.com");
});

test("LOAD_PASSWORD_PROFILE with no site keep password profile", () => {
  const state = {
    password: {
      id: "1",
      site: "example.org",
      login: "contact@example.org",
      length: 8,
      version: 2
    },
    passwords: []
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "" });
  expect(state.password.id).toBe("1");
  expect(state.password.site).toBe("example.org");
  expect(state.password.login).toBe("contact@example.org");
  expect(state.password.length).toBe(8);
  expect(state.password.version).toBe(2);
});

test("LOAD_PASSWORD_PROFILE no passwords", () => {
  const state = {
    password: {
      site: ""
    },
    passwords: []
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "account.google.com" });
  expect(state.password.site).toBe("account.google.com");
});

test("LOAD_PASSWORD_PROFILE multiple accounts matching criteria", () => {
  const state = {
    password: {
      site: ""
    },
    passwords: [
      { id: "1", site: "www.example.org" },
      { id: "2", site: "www.google.com" },
      { id: "3", site: "account.google.com" }
    ]
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "www.google.com" });
  expect(state.password.id).toBe("2");
  expect(state.password.site).toBe("www.google.com");
});

test("LOAD_PASSWORD_PROFILE multiple accounts matching criteria order doesn't matter", () => {
  const state = {
    password: {
      site: ""
    },
    passwords: [
      { id: "1", site: "www.example.org" },
      { id: "2", site: "account.google.com" },
      { id: "3", site: "www.google.com" }
    ]
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "www.google.com" });
  expect(state.password.id).toBe("3");
  expect(state.password.site).toBe("www.google.com");
});

test("LOAD_PASSWORD_PROFILE ends matching criteria nrt #285", () => {
  const state = {
    password: {
      site: ""
    },
    passwords: [{ id: "1", site: "account.google.com" }]
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "www.google.com" });
  expect(state.password.id).toBe("1");
  expect(state.password.site).toBe("account.google.com");
});

test("LOAD_PASSWORD_PROFILE without www", () => {
  const state = {
    password: {
      site: ""
    },
    passwords: [{ id: "1", site: "reddit.com" }]
  };
  const LOAD_PASSWORD_PROFILE = mutations[types.LOAD_PASSWORD_PROFILE];
  LOAD_PASSWORD_PROFILE(state, { site: "www.reddit.com" });
  expect(state.password.id).toBe("1");
  expect(state.password.site).toBe("reddit.com");
});

test("SET_SITE default state", () => {
  const state = {
    password: defaultPassword,
    passwords: [],
    defaultPassword: defaultPassword,
    lastUse: null
  };
  const SET_SITE = mutations[types.SET_SITE];
  SET_SITE(state, { site: "www.example.org" });
  expect(state.password.site).toEqual("www.example.org");
});

test("SET_MESSAGE", () => {
  const SET_MESSAGE = mutations[types.SET_MESSAGE];
  const state = {};
  SET_MESSAGE(state, {
    message: { text: "success message", status: "success" }
  });
  expect(state.message.text).toBe("success message");
  expect(state.message.status).toBe("success");
});

test("CLEAN_MESSAGE", () => {
  const CLEAN_MESSAGE = mutations[types.CLEAN_MESSAGE];
  const state = { message: { text: "error message", status: "error" } };
  CLEAN_MESSAGE(state);
  expect(state.message.text).toBe("");
  expect(state.message.status).toBe("success");
});
