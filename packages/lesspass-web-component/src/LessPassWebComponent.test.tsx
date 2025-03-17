import { describe, test, expect } from "vitest";
import { render } from "./tests/renders";
import { server } from "./tests/setupTests";
import { http, HttpResponse } from "msw";
import { LessPassWebComponentInMemory } from "./LessPassWebComponent";
import { defaultSettings, saveSettings } from "./services/settings";

describe("LessPassWebComponentInMemory unauthenticated", () => {
  function renderWebExtensionUnAuthenticated() {
    server.use(
      http.get(
        "https://api.lesspass.com/auth/users/me/",
        () => new HttpResponse(null, { status: 401 }),
      ),
    );

    return render(
      <LessPassWebComponentInMemory
        settings={{
          site: "www.example.org",
          focus: "login",
          isWebExtensionContext: true,
        }}
      />,
    );
  }

  test("Display site provided my the the web extension", async () => {
    const { findByRole, getByLabelText } = renderWebExtensionUnAuthenticated();
    await findByRole("link", { name: /Sign in/i });
    expect(getByLabelText("Site")).toHaveValue("www.example.org");
    expect(getByLabelText("Login")).toHaveFocus();
    expect(getByLabelText("0-9")).toBeChecked();
  });

  test("Clear site if user click on the clear button", async () => {
    const { user, findByRole, getByRole, getByLabelText } =
      renderWebExtensionUnAuthenticated();
    await findByRole("link", { name: /Sign in/i });
    expect(getByLabelText("Site")).toHaveValue("www.example.org");
    await user.click(getByRole("button", { name: /clear/i }));
    expect(getByLabelText("Site")).toHaveValue("");
  });

  test("Display site without subdomain if removeSubDomain is true", async () => {
    saveSettings({
      ...defaultSettings,
      removeSubDomain: true,
      removeTopLevelDomain: false,
    });
    const { findByRole, getByLabelText } = renderWebExtensionUnAuthenticated();
    await findByRole("link", { name: /Sign in/i });
    expect(getByLabelText("Site")).toHaveValue("example.org");
  });

  test("Display site without tld if removeTopLevelDomain is true", async () => {
    saveSettings({
      ...defaultSettings,
      removeSubDomain: false,
      removeTopLevelDomain: true,
    });
    const { findByRole, getByLabelText } = renderWebExtensionUnAuthenticated();
    await findByRole("link", { name: /Sign in/i });
    expect(getByLabelText("Site")).toHaveValue("www.example");
  });

  test("Display site without subdomain and tld if removeSubDomain and removeTopLevelDomain are true", async () => {
    saveSettings({
      ...defaultSettings,
      removeSubDomain: true,
      removeTopLevelDomain: true,
    });
    const { findByRole, getByLabelText } = renderWebExtensionUnAuthenticated();
    await findByRole("link", { name: /Sign in/i });
    expect(getByLabelText("Site")).toHaveValue("example");
  });
});

describe("LessPassWebComponentInMemory authenticated", () => {
  function renderWebExtensionAuthenticated() {
    server.use(
      http.get("https://api.lesspass.com/auth/users/me/", () =>
        HttpResponse.json({ key: "", id: 1, email: "test@lesspass.com" }),
      ),
    );
    server.use(
      http.get("https://api.lesspass.com/passwords/", ({ request }) => {
        const url = new URL(request.url);
        const search = url.searchParams.get("search");
        if (!search) {
          return HttpResponse.json({
            count: 0,
            next: null,
            previous: null,
            results: [],
          });
        }
        if (search === "www.example.org") {
          return HttpResponse.json({
            count: 1,
            next: null,
            previous: null,
            results: [
              {
                id: "3b9e3079-38d2-4208-8b44-53c5fb788088",
                login: "contact@example.org",
                site: "www.example.org",
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
          });
        }
        return HttpResponse.json({
          count: 2,
          next: null,
          previous: null,
          results: [
            {
              id: "7290a9b4-cd43-4169-b65e-8afcbf5e09ac",
              login: "contact@example.org",
              site: "example",
              lowercase: false,
              uppercase: false,
              symbols: false,
              digits: true,
              counter: 1,
              length: 8,
              created: "2024-07-29T17:10:04.639153Z",
              modified: "2025-02-23T12:30:23.129489Z",
            },
            {
              id: "3b9e3079-38d2-4208-8b44-53c5fb788088",
              login: "contact@example.org",
              site: "www.example.org",
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
        });
      }),
    );
    server.use(
      http.get(
        "https://api.lesspass.com/passwords/3b9e3079-38d2-4208-8b44-53c5fb788088/",
        () =>
          HttpResponse.json({
            id: "3b9e3079-38d2-4208-8b44-53c5fb788088",
            login: "contact@example.org",
            site: "www.example.org",
            lowercase: true,
            uppercase: true,
            symbols: true,
            digits: false,
            counter: 1,
            length: 16,
            created: "2017-07-30T18:09:04.901953Z",
            modified: "2023-02-28T14:02:19.719490Z",
          }),
      ),
    );
    server.use(
      http.get(
        "https://api.lesspass.com/passwords/7290a9b4-cd43-4169-b65e-8afcbf5e09ac/",
        () =>
          HttpResponse.json({
            id: "7290a9b4-cd43-4169-b65e-8afcbf5e09ac",
            login: "contact@example.org",
            site: "example",
            lowercase: false,
            uppercase: false,
            symbols: false,
            digits: true,
            counter: 1,
            length: 8,
            created: "2024-07-29T17:10:04.639153Z",
            modified: "2025-02-23T12:30:23.129489Z",
          }),
      ),
    );
    return render(
      <LessPassWebComponentInMemory
        settings={{
          site: "www.example.org",
          focus: "login",
          isWebExtensionContext: true,
        }}
      />,
    );
  }

  test("redirect to password profile page in web extension context", async () => {
    const { findByRole, getByLabelText } = renderWebExtensionAuthenticated();
    await findByRole("button", { name: /delete/i });
    expect(getByLabelText("Site")).toHaveValue("www.example.org");
    expect(getByLabelText("a-z")).toBeChecked();
    expect(getByLabelText("A-Z")).toBeChecked();
    expect(getByLabelText("%!@")).toBeChecked();
    expect(getByLabelText("0-9")).not.toBeChecked();
    expect(getByLabelText("Master password")).toHaveFocus();
  });

  test("redirect to password matching another site when removeSubDomain and removeTopLevelDomain", async () => {
    saveSettings({
      ...defaultSettings,
      removeSubDomain: true,
      removeTopLevelDomain: true,
    });
    const { findByRole, getByLabelText } = renderWebExtensionAuthenticated();
    await findByRole("button", { name: /delete/i });
    expect(getByLabelText("Site")).toHaveValue("example");
    expect(getByLabelText("a-z")).not.toBeChecked();
    expect(getByLabelText("A-Z")).not.toBeChecked();
    expect(getByLabelText("%!@")).not.toBeChecked();
    expect(getByLabelText("0-9")).toBeChecked();
    expect(getByLabelText("Master password")).toHaveFocus();
  });

  test("if user click on LessPass logo, site is cleared and user is redirected to the main page", async () => {
    const { user, findByRole, getByRole, getByLabelText } =
      renderWebExtensionAuthenticated();
    await findByRole("button", { name: /delete/i });
    expect(getByLabelText("Site")).toHaveValue("www.example.org");
    await user.click(getByRole("img", { name: /LessPass/i }));
    expect(getByLabelText("Site")).toHaveValue("");
  });
});
