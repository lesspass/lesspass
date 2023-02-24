import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Passwords from "@/api/password";

const mock = new MockAdapter(axios);

test("Passwords.create on old server replace numbers field after creation", () => {
  mock
    .onPost("https://api.lesspass.com/passwords/", {
      login: "text@example.org",
      digits: false,
      numbers: false,
    })
    .reply(201, { id: "p1", login: "text@example.org", numbers: false });
  const password = { login: "text@example.org", digits: false };
  return Passwords.create(password).then((response) => {
    expect(response.status).toBe(201);
    expect(response.data).toEqual({
      id: "p1",
      login: "text@example.org",
      digits: false,
    });
  });
});

test("Passwords.create on new server keeps digits", () => {
  mock
    .onPost("https://api.lesspass.com/passwords/", {
      login: "text@example.org",
      digits: false,
      numbers: false,
    })
    .reply(201, { id: "p1", login: "text@example.org", digits: false });
  const password = { login: "text@example.org", digits: false };
  return Passwords.create(password).then((response) => {
    expect(response.status).toBe(201);
    expect(response.data).toEqual({
      id: "p1",
      login: "text@example.org",
      digits: false,
    });
  });
});

test("Passwords.all on old server transform numbers into digits", () => {
  mock.onGet("https://api.lesspass.com/passwords/").reply(200, {
    results: [{ id: "p1", numbers: false }],
  });
  return Passwords.all().then((response) => {
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      results: [{ id: "p1", digits: false }],
    });
  });
});

test("Passwords.all on new server keeps digits", () => {
  mock.onGet("https://api.lesspass.com/passwords/").reply(200, {
    results: [{ id: "p2", digits: false }],
  });
  return Passwords.all().then((response) => {
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      results: [{ id: "p2", digits: false }],
    });
  });
});

test("Passwords.get on old server replace numbers with digits", () => {
  mock
    .onGet(
      "https://api.lesspass.com/passwords/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/"
    )
    .reply(200, { id: "p1", numbers: false });
  return Passwords.read({ id: "c8e4f983-8ffe-b705-4064-d3b7aa4a4782" }).then(
    (response) => {
      expect(response.status).toBe(200);
      expect(response.data).toEqual({ id: "p1", digits: false });
    }
  );
});

test("Passwords.get on new server keeps digits", () => {
  mock
    .onGet(
      "https://api.lesspass.com/passwords/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/"
    )
    .reply(200, { id: "p1", digits: false });
  return Passwords.read({ id: "c8e4f983-8ffe-b705-4064-d3b7aa4a4782" }).then(
    (response) => {
      expect(response.status).toBe(200);
      expect(response.data).toEqual({ id: "p1", digits: false });
    }
  );
});

test("Passwords.update on old server replace numbers field after update", () => {
  mock
    .onPut(
      "https://api.lesspass.com/passwords/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/",
      {
        id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
        login: "test@example.org",
        digits: true,
        numbers: true,
      }
    )
    .reply(200, {
      id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
      login: "test@example.org",
      numbers: true,
    });

  const password = {
    id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
    login: "test@example.org",
    digits: true,
  };

  return Passwords.update(password).then((response) => {
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
      login: "test@example.org",
      digits: true,
    });
  });
});

test("Passwords.update on new  keeps digits", () => {
  mock
    .onPut(
      "https://api.lesspass.com/passwords/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/",
      {
        id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
        login: "test@example.org",
        digits: true,
        numbers: true,
      }
    )
    .reply(200, {
      id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
      login: "test@example.org",
      digits: true,
    });

  const password = {
    id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
    login: "test@example.org",
    digits: true,
  };

  return Passwords.update(password).then((response) => {
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      id: "c8e4f983-4064-8ffe-b705-d3b7aa4a4782",
      login: "test@example.org",
      digits: true,
    });
  });
});

test("Passwords.delete", () => {
  mock
    .onDelete(
      "https://api.lesspass.com/passwords/c8e4f983-8ffe-4064-b705-d3b7aa4a4782/"
    )
    .reply(204);
  return Passwords.delete({ id: "c8e4f983-8ffe-4064-b705-d3b7aa4a4782" }).then(
    (response) => {
      expect(response.status).toBe(204);
    }
  );
});
