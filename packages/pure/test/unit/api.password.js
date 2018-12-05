import test from "ava";
import nock from "nock";
import Passwords from "../../src/api/password";

const token =
  "ZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt";
const config = { baseURL: "https://lesspass.com", token: token };
const headers = { reqheaders: { Authorization: `JWT ${token}` } };

test("Passwords.create", t => {
  const password = { login: "text@example.org" };
  nock("https://lesspass.com")
    .post("/api/passwords/", password)
    .reply(201, { ...password, id: "1" });
  return Passwords.create(password, config).then(response => {
    const passwordCreated = response.data;
    t.is(passwordCreated.id, "1");
    t.is(passwordCreated.login, password.login);
  });
});

test("Passwords.create set Authorization header", t => {
  const password = { login: "text@example.org" };
  nock("https://lesspass.com", headers)
    .post("/api/passwords/", password)
    .query(true)
    .reply(201, {
      id: "1",
      ...password
    });
  return Passwords.create(password, config).then(response => {
    const passwordCreated = response.data;
    t.is(passwordCreated.id, "1");
    t.is(passwordCreated.login, password.login);
  });
});

test("Passwords.all", t => {
  nock("https://lesspass.com", headers)
    .get("/api/passwords/")
    .query(true)
    .reply(200, {});
  return Passwords.all(config).then(response => {
    t.is(response.status, 200);
  });
});

test("Passwords.get", t => {
  nock("https://lesspass.com", headers)
    .get("/api/passwords/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/")
    .query(true)
    .reply(200, {});
  return Passwords.read(
    { id: "c8e4f983-8ffe-b705-4064-d3b7aa4a4782" },
    config
  ).then(response => {
    t.is(response.status, 200);
  });
});

test("Passwords.update", t => {
  const password = {
    id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
    login: "test@example.org"
  };
  nock("https://lesspass.com", headers)
    .put("/api/passwords/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/", password)
    .query(true)
    .reply(200, {});
  return Passwords.update(password, config).then(response => {
    t.is(response.status, 200);
  });
});

test("Passwords.delete", t => {
  nock("https://lesspass.com", headers)
    .delete("/api/passwords/c8e4f983-8ffe-4064-b705-d3b7aa4a4782/")
    .query(true)
    .reply(204);
  return Passwords.delete(
    { id: "c8e4f983-8ffe-4064-b705-d3b7aa4a4782" },
    config
  ).then(response => {
    t.is(response.status, 204);
  });
});
