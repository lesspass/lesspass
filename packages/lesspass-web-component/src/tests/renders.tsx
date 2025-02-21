import { AppStore, setupStore } from "../store";
import { RenderOptions } from "@testing-library/react";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";
import { render as renderTL } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { server } from "./setupTests";
import { http, HttpResponse } from "msw";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  route?: string;
  store?: AppStore;
}

export function renderWithProviders(
  ui: ReactNode,
  {
    route = "/",
    store = setupStore(),
    ...renderOptions
  }: ExtendedRenderOptions = {},
): any {
  server.use(
    http.get(
      "https://api.lesspass.com/auth/users/me",
      () => new HttpResponse(null, { status: 401 }),
    ),
  );
  function Wrapper({ children }: { children: ReactNode }): ReactNode {
    return (
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </Provider>
      </MemoryRouter>
    );
  }
  return {
    user: userEvent.setup(),
    store,
    ...renderTL(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export function render(element: React.ReactNode): any {
  return {
    user: userEvent.setup(),
    ...renderTL(element),
  };
}
