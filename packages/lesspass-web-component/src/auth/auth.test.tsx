import { test, expect } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../tests/setupTests";
import {
  ACCESS_TOKEN_LOCAL_STORAGE_KEY,
  REFRESH_TOKEN_LOCAL_STORAGE_KEY,
  BASE_URL_LOCAL_STORAGE_KEY,
} from "../services/constant";
import { renderWithProviders } from "../tests/renders";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { App } from "../App";

test("When the user sign in tokens and base url are saved on local storage", async () => {
  const { user, findByRole, getByRole, queryByRole, getByLabelText } =
    renderWithProviders(<App />);
  await findByRole("link", { name: /Sign in/i });
  await user.click(getByRole("link", { name: /Sign in/i }));

  server.use(
    http.post("https://api.example.org/auth/jwt/create/", () =>
      HttpResponse.json({
        refresh:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        access:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
      }),
    ),
  );
  server.use(
    http.get("https://api.example.org/auth/users/me/", () =>
      HttpResponse.json({ key: "", id: 1, email: "test@lesspass.com" }),
    ),
  );

  expect(
    getByRole("heading", { name: /Sign in to LessPass/i }),
  ).toBeInTheDocument();

  const baseUrl = getByLabelText(/LessPass server/i);
  await user.clear(baseUrl);
  await user.type(baseUrl, "https://api.example.org");
  expect(getByLabelText(/LessPass server/i)).toHaveValue(
    "https://api.example.org",
  );

  const email = getByLabelText("Email");
  await user.type(email, "contact@example.org");
  expect(getByLabelText("Email")).toHaveValue("contact@example.org");

  const masterPassword = getByLabelText(/Master password/i);
  await user.type(masterPassword, "password");
  expect(getByLabelText(/Master password/i)).toHaveValue("password");

  const signInButton = getByRole("button", { name: /Sign in/i });
  await user.click(signInButton);

  await waitForElementToBeRemoved(() =>
    queryByRole("link", { name: /Sign in/i }),
  );

  expect(localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)).toBe(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.lLgLXPO4CrjE68Q8_I9KdADR_E3mEsE-5B8aDwj0UX4",
  );
  expect(localStorage.getItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY)).toBe(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  );
  expect(localStorage.getItem(BASE_URL_LOCAL_STORAGE_KEY)).toBe(
    "https://api.example.org",
  );
});
