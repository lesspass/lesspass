import { test, expect } from "vitest";
import { renderWithProviders } from "./tests/renders";
import { getSettings } from "./services/settings";
import { setupStore } from "./store";
import { App } from "./App";

test("Can send site to the App (Used by the web extension)", async () => {
  const { findByRole, getByLabelText } = renderWithProviders(<App />, {
    store: setupStore({
      settings: {
        ...getSettings(),
        site: "https://lesspass.com",
        focus: "masterPassword",
      },
    }),
  });

  await findByRole("link", { name: /Sign in/i });
  expect(getByLabelText("Site")).toHaveValue("https://lesspass.com");
  expect(getByLabelText("Master password")).toHaveFocus();
});
