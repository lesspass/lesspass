import { http, HttpResponse } from "msw";
import { expect, test } from "vitest";
import { server } from "./mocks/node";
import {
  signIn,
  refreshTokens,
  getPasswords,
  updatePassword,
  deletePassword,
  defaultBaseUrl,
  setBaseUrl,
} from ".";

test("signIn", async () => {
  const expectedTokens = {
    refresh:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    access:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
  };
  const email = "test@lesspass.com";
  const password = "password";
  server.use(
    http.post(
      "https://api.lesspass.com/auth/jwt/create/",
      async ({ request }) => {
        const payload = await request.json();
        expect(payload).toEqual({ email, password });
        return HttpResponse.json(expectedTokens);
      },
    ),
  );
  const tokens = await signIn(email, password);
  expect(tokens).toEqual(expectedTokens);
});

test("refreshTokens", async () => {
  const expectedTokens = {
    refresh:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.56Hg2Q94o6JPPVY_N3pIxqups6R_YY40U1o35O1BNRE",
    access:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
  };
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  server.use(
    http.post(
      "https://api.lesspass.com/auth/jwt/refresh/",
      async ({ request }) => {
        const payload = await request.json();
        expect(payload).toEqual({ refresh: refreshToken });
        return HttpResponse.json(expectedTokens);
      },
    ),
  );
  const tokens = await refreshTokens(refreshToken);
  expect(tokens).toEqual(expectedTokens);
});

test("getPasswords", async () => {
  const expectedPasswords = {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        id: "3b9e3079-38d2-4208-8b44-53c5fb788088",
        login: "contact@example.org",
        site: "example.org",
        lowercase: true,
        uppercase: true,
        symbols: true,
        digits: false,
        counter: 1,
        length: 16,
        created: "2017-07-30T18:09:04.901953Z",
        modified: "2023-02-28T14:02:19.719490Z",
      },
    ],
  };

  server.use(
    http.get("https://api.lesspass.com/passwords/", () => {
      return HttpResponse.json(expectedPasswords);
    }),
  );
  const passwords = await getPasswords();
  expect(passwords).toEqual(expectedPasswords);
});

test("updatePassword", async () => {
  const password = {
    id: "3b9e3079-38d2-4208-8b44-53c5fb788088",
    login: "contact@example.org",
    site: "example.org",
    lowercase: true,
    uppercase: true,
    symbols: true,
    digits: false,
    counter: 1,
    length: 16,
    created: "2017-07-30T18:09:04.901953Z",
    modified: "2023-02-28T14:02:19.719490Z",
  };

  server.use(
    http.put(
      "https://api.lesspass.com/passwords/3b9e3079-38d2-4208-8b44-53c5fb788088/",
      async ({ request }) => {
        const payload = await request.json();
        expect(payload).toEqual(password);
        return HttpResponse.json(password);
      },
    ),
  );
  const updatedPassword = await updatePassword(password);
  expect(updatedPassword).toEqual(password);
});

test("deletePassword", async () => {
  const password = {
    id: "3b9e3079-38d2-4208-8b44-53c5fb788088",
    login: "contact@example.org",
    site: "example.org",
    lowercase: true,
    uppercase: true,
    symbols: true,
    digits: false,
    counter: 1,
    length: 16,
    created: "2017-07-30T18:09:04.901953Z",
    modified: "2023-02-28T14:02:19.719490Z",
  };

  server.use(
    http.delete(
      "https://api.lesspass.com/passwords/3b9e3079-38d2-4208-8b44-53c5fb788088/",
      () => {
        return new HttpResponse(null, { status: 204 });
      },
    ),
  );
  await deletePassword(password);
});

test("defaultBaseUrl", () => {
  expect(defaultBaseUrl).toBe("https://api.lesspass.com");
});

test("setBaseUrl", async () => {
  const expectedTokens = {
    refresh:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    access:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
  };
  server.use(
    http.post("https://api.example.org/auth/jwt/create/", () => {
      return HttpResponse.json(expectedTokens);
    }),
  );

  setBaseUrl("https://api.example.org");
  const tokens = await signIn("test@lesspass.com", "password");
  expect(tokens).toEqual(expectedTokens);
});
