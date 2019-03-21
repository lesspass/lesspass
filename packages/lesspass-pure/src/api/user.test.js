import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import User from "./user";

const mock = new MockAdapter(axios);

test("login", () => {
  const token = "5e0651";
  const user = { email: "test@example.org", password: "password" };
  mock
    .onPost("/api/tokens/auth/", user)
    .reply(201, { token });
  return User.login(user, {
    baseURL: "https://lesspass.com"
  }).then(response => {
    expect(response.token).toBe(token);
  });
});

test("register", () => {
  const user = { email: "test@example.org", password: "password" };
  mock
    .onPost("/api/auth/register/", user)
    .reply(201, { email: user.email, pk: 1 });
  return User.register(user, {
    baseURL: "https://lesspass.com"
  }).then(response => {
    expect(response.email).toBe(user.email);
  });
});

test("resetPassword", () => {
  var email = "test@lesspass.com";
  mock
    .onPost("/api/auth/password/reset/", { email })
    .reply(204);
  return User.resetPassword(
    { email },
    { baseURL: "https://lesspass.com" }
  ).then(data => {
    expect(data.status).toBe(204);
  });
});

test("confirmResetPassword", () => {
  var newPassword = {
    uid: "MQ",
    token: "5g1-2bd69bd6f6dcd73f8124",
    new_password: "password1"
  };
  mock
    .onPost("/api/auth/password/reset/confirm/", newPassword)
    .reply(204);
  return User.confirmResetPassword(newPassword, {
    baseURL: "https://lesspass.com"
  }).then(data => {
    expect(data.status).toBe(204);
  });
});

test("refresh token", () => {
  const token = "3e3231";
  const newToken =
    "wibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIi";
  mock
    .onPost("/api/tokens/refresh/", { token })
    .reply(200, { token: newToken });
  return User.requestNewToken(
    { token },
    { baseURL: "https://lesspass.com" }
  ).then(refreshedToken => {
    expect(refreshedToken).toBe(newToken);
  });
});
