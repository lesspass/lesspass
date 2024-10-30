import { test, expect } from "vitest";
import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import { routes } from "./router";
import { setupStore } from "./store";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "./constant";
import { render } from "./setupTests";

export function renderWithRouter(store = {}) {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  return {
    router,
    ...render(<App router={router} store={setupStore(store)} />),
  };
}

test("Should show LessPass title on the index page", () => {
  const { getByText } = renderWithRouter();
  expect(getByText(/LessPass/i)).toBeDefined();
});

test("At startup the site field must be selected", () => {
  const { getByLabelText } = renderWithRouter();
  expect(getByLabelText("Site")).toBe(document.activeElement);
});

test("Should allow to navigate to unauthenticated pages", async () => {
  const { user, getByLabelText, getByText, findByText } = renderWithRouter();
  expect(getByLabelText("Site")).toBe(document.activeElement);
  user.click(getByText(/LessPass/i));
  expect(getByLabelText("Site")).toBe(document.activeElement);
  user.click(getByText(/Settings/i));
  await findByText("Settings");
  user.click(getByText(/Sign in/i));
  await findByText("Sign in to LessPass");
});

test("Sould be able to change language between english and french", async () => {
  const { user, queryByText, findByText, getByText, getByLabelText } =
    renderWithRouter();
  expect(queryByText(/Se connecter/i)).toBeNull();
  user.click(getByText(/Settings/i));
  await findByText(/fr/i);
  user.click(getByLabelText(/fr/i));
  await findByText(/Se connecter/i);
  expect(queryByText(/Sign in/i)).toBeNull();
  user.click(getByLabelText(/en/i));
  await findByText(/Sign in/i);
  expect(queryByText(/Se connecter/i)).toBeNull();
});

test("Should use the language previously setted by the user", async () => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, "fr");
  const { user, queryByText, findByText, getByText, getByLabelText } =
    renderWithRouter();
  expect(queryByText(/Sign in/i)).toBeNull();
  await findByText(/Se connecter/i);
  await findByText(/Options/i);
  user.click(getByText(/Options/i));
  await findByText(/en/i);
  user.click(getByLabelText(/en/i));
  await findByText(/Sign in/i);
  expect(queryByText(/Se connecter/i)).toBeNull();
  expect(localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY)).toBe("en");
});
