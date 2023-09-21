import { test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import { routes } from "./router";
import { setupStore } from "./store";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "./constant";

export function renderWithRouter(store = {}) {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  return {
    router,
    user: userEvent.setup(),
    ...render(<App router={router} store={setupStore(store)} />),
  };
}

test("Should show LessPass title on the index page", () => {
  renderWithRouter();
  expect(screen.getByText(/LessPass/i)).toBeDefined();
});

test("At startup the site field must be selected", () => {
  renderWithRouter();
  expect(screen.getByLabelText("Site")).toBe(document.activeElement);
});

test("Should allow to navigate to unauthenticated pages", async () => {
  const { user } = renderWithRouter();
  expect(screen.getByLabelText("Site")).toBe(document.activeElement);
  user.click(screen.getByText(/LessPass/i));
  expect(screen.getByLabelText("Site")).toBe(document.activeElement);
  user.click(screen.getByText(/Settings/i));
  await screen.findByText("Settings");
  user.click(screen.getByText(/Sign in/i));
  await screen.findByText("Sign in to LessPass");
});

test("Sould be able to change language between english and french", async () => {
  const { user } = renderWithRouter();
  expect(screen.queryByText(/Se connecter/i)).toBeNull();
  user.click(screen.getByText(/Settings/i));
  await screen.findByText(/fr/i);
  user.click(screen.getByLabelText(/fr/i));
  await screen.findByText(/Se connecter/i);
  expect(screen.queryByText(/Sign in/i)).toBeNull();
  user.click(screen.getByLabelText(/en/i));
  await screen.findByText(/Sign in/i);
  expect(screen.queryByText(/Se connecter/i)).toBeNull();
});

test("Should use the language previously setted by the user", async () => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, "fr");
  const { user } = renderWithRouter();
  expect(screen.queryByText(/Sign in/i)).toBeNull();
  await screen.findByText(/Se connecter/i);
  await screen.findByText(/Options/i);
  user.click(screen.getByText(/Options/i));
  await screen.findByText(/en/i);
  user.click(screen.getByLabelText(/en/i));
  await screen.findByText(/Sign in/i);
  expect(screen.queryByText(/Se connecter/i)).toBeNull();
  expect(localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY)).toBe("en");
});
