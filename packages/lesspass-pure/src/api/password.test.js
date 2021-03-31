import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Passwords from "./password";

const mock = new MockAdapter(axios);

test("Passwords.create", () => {
  const password = { login: "text@example.org" };
  mock.onPost("/api/passwords/", password).reply(201, { ...password, id: "1" });
  return Passwords.create(password).then(response => {
    const passwordCreated = response.data;
    expect(passwordCreated.id).toBe("1");
    expect(passwordCreated.login).toBe(password.login);
  });
});

test("Passwords.all", () => {
  mock.onGet("https://api.lesspass.com/passwords/").reply(200, {});
  return Passwords.all().then(response => {
    expect(response.status).toBe(200);
  });
});

test("Passwords.get", () => {
  mock
    .onGet(
      "https://api.lesspass.com/passwords/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/"
    )
    .reply(200, {});
  return Passwords.read({ id: "c8e4f983-8ffe-b705-4064-d3b7aa4a4782" }).then(
    response => {
      expect(response.status).toBe(200);
    }
  );
});

test("Passwords.update", () => {
  const password = {
    id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
    login: "test@example.org"
  };
  mock
    .onPut(
      "https://api.lesspass.com/passwords/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/",
      password
    )
    .reply(200, {});
  return Passwords.update(password).then(response => {
    expect(response.status).toBe(200);
  });
});

test("Passwords.delete", () => {
  mock
    .onDelete(
      "https://api.lesspass.com/passwords/c8e4f983-8ffe-4064-b705-d3b7aa4a4782/"
    )
    .reply(204);
  return Passwords.delete({ id: "c8e4f983-8ffe-4064-b705-d3b7aa4a4782" }).then(
    response => {
      expect(response.status).toBe(204);
    }
  );
});
