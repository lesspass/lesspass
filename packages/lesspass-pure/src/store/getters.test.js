import * as getters from "./getters";

test("passwordURL", () => {
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

  expect(getters.passwordURL(state)).toBe(
    "https://lesspass.com/#/?passwordProfileEncoded=eyJsb2dpbiI6InRlc3RAZXhhbXBsZS5vcmciLCJzaXRlIjoiZXhhbXBsZS5vcmciLCJ1cHBlcmNhc2UiOnRydWUsImxvd2VyY2FzZSI6dHJ1ZSwibnVtYmVycyI6dHJ1ZSwic3ltYm9scyI6ZmFsc2UsImxlbmd0aCI6MTYsImNvdW50ZXIiOjEsInZlcnNpb24iOjJ9"
  );
});

test("passwordURL encode uri component", () => {
  const state = {
    password: {
      login: "contact@lesspass.com"
    },
    baseURL: "https://lesspass.com"
  };

  expect(getters.passwordURL(state)).toBe(
    "https://lesspass.com/#/?passwordProfileEncoded=eyJsb2dpbiI6ImNvbnRhY3RAbGVzc3Bhc3MuY29tIn0%3D"
  );
});

test("isAuthenticated", () => {
  const state = {
    authenticated: true
  };
  expect(getters.isAuthenticated(state)).toBe(true);
  expect(getters.isGuest(state)).toBe(false);
});

test("isGuest", () => {
  const state = {
    authenticated: false
  };
  expect(getters.isAuthenticated(state)).toBe(false);
  expect(getters.isGuest(state)).toBe(true);
});
