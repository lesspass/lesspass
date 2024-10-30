import { test, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../setupTests";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../App.test";
import {
  REFRESH_TOKEN_LOCAL_STORAGE_KEY,
  BASE_URL_LOCAL_STORAGE_KEY,
} from "../constant";

test("When the user sign in refresh token and base url are saved on local storage", async () => {
  server.use(
    http.post("https://api.example.org/auth/jwt/create/", () => {
      return HttpResponse.json({
        refresh:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        access:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
      });
    }),
  );
  const { user } = renderWithRouter();

  user.click(screen.getByText(/Sign In/i));
  await screen.findByText("Sign in to LessPass");

  await user.type(
    screen.getByLabelText(/LessPass server/i),
    "https://api.example.org",
  );
  await user.type(screen.getByLabelText(/email/i), "test@lesspass.com");
  await user.type(
    screen.getByLabelText(/password/i),
    "test@lesspass.com{enter}",
  );

  await screen.findByText("LessPass");
  await screen.findByText("My account");

  expect(localStorage.getItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY)).toBe(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  );
  expect(localStorage.getItem(BASE_URL_LOCAL_STORAGE_KEY)).toBe(
    "https://api.example.org",
  );
});

test("If one refresh token is saved in localStorage, the access token is refreshed", async () => {
  localStorage.setItem(
    REFRESH_TOKEN_LOCAL_STORAGE_KEY,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  );
  server.use(
    http.post("https://api.lesspass.com/auth/jwt/refresh/", () => {
      return HttpResponse.json({
        refresh:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.56Hg2Q94o6JPPVY_N3pIxqups6R_YY40U1o35O1BNRE",
        access:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
      });
    }),
  );
  renderWithRouter();

  await screen.findByText("LessPass");
  await screen.findByText("My account");

  expect(localStorage.getItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY)).toBe(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.56Hg2Q94o6JPPVY_N3pIxqups6R_YY40U1o35O1BNRE",
  );
  expect(localStorage.getItem(BASE_URL_LOCAL_STORAGE_KEY)).toBe(
    "https://api.lesspass.com",
  );
});
