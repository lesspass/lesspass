import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import User from "@/api/user";

const mock = new MockAdapter(axios);

test("login", () => {
  const access = "12345";
  const refresh = "67890";
  const user = { email: "test@example.org", password: "password" };
  mock
    .onPost("https://api.lesspass.com/auth/jwt/create/", user)
    .reply(201, { access, refresh });
  return User.login(user).then(response => {
    expect(response.data.access).toBe(access);
    expect(response.data.refresh).toBe(refresh);
  });
});

test("register", () => {
  const user = { email: "test@example.org", password: "password" };
  mock
    .onPost("https://api.lesspass.com/auth/users/", user)
    .reply(201, { email: user.email, pk: 1 });
  return User.register(user).then(response => {
    expect(response.data.email).toBe(user.email);
  });
});

test("resetPassword", () => {
  var email = "test@lesspass.com";
  mock
    .onPost("https://api.lesspass.com/auth/users/reset_password/", { email })
    .reply(204);
  return User.resetPassword({ email }).then(response => {
    expect(response.status).toBe(204);
  });
});

test("confirmResetPassword", () => {
  var newPassword = {
    uid: "MQ",
    token: "5g1-2bd69bd6f6dcd73f8124",
    new_password: "password1",
    re_new_password: "password1"
  };
  mock
    .onPost(
      "https://api.lesspass.com/auth/users/reset_password_confirm/",
      newPassword
    )
    .reply(204);
  return User.confirmResetPassword({
    uid: "MQ",
    token: "5g1-2bd69bd6f6dcd73f8124",
    password: "password1"
  }).then(response => {
    expect(response.status).toBe(204);
  });
});
