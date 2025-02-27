import { test, expect } from "vitest";
import { renderWithProviders } from "./tests/renders";
import { App } from "./App";

test("Should show LessPass image on the index page", async () => {
  const { getByRole, findByRole } = renderWithProviders(<App />);
  await findByRole("link", { name: /Sign in/i });
  expect(getByRole("img", { name: /LessPass/i })).toBeInTheDocument();
});

test("At startup the site field must be selected", async () => {
  const { findByRole, getByLabelText } = renderWithProviders(<App />);
  await findByRole("link", { name: /Sign in/i });
  expect(getByLabelText("Site")).toHaveFocus();
});

test("Should allow to navigate to unauthenticated pages", async () => {
  const { user, getByLabelText, getByRole, findByRole } = renderWithProviders(
    <App />,
  );
  await findByRole("link", { name: /Sign in/i });
  expect(getByLabelText("Site")).toHaveFocus();
  await user.click(getByRole("link", { name: /Passwords/i }));
  expect(
    getByRole("heading", { name: /Sign in to LessPass/i }),
  ).toBeInTheDocument();
  await user.click(getByRole("link", { name: /Settings/i }));
  expect(getByRole("heading", { name: /Settings/i })).toBeInTheDocument();
  await user.click(getByRole("link", { name: /Sign in/i }));
  expect(
    getByRole("heading", { name: /Sign in to LessPass/i }),
  ).toBeInTheDocument();

  await user.click(getByRole("link", { name: /Forgot password/i }));
  expect(
    getByRole("heading", { name: /Reset your password/i }),
  ).toBeInTheDocument();
  await user.click(getByRole("link", { name: /Cancel/i }));
  expect(
    getByRole("heading", { name: /Sign in to LessPass/i }),
  ).toBeInTheDocument();
  await user.click(getByRole("img", { name: /LessPass/i }));
  expect(getByLabelText("Site")).toHaveFocus();
});
