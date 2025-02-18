import {
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter,
} from "react-router-dom";
import { routes } from "./router";
import { I18nextProvider } from "react-i18next";
import { initI18n, defaultLanguage } from "./i18n";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "./constant";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { RefreshTokens } from "./auth/RefreshTokens";
import "./App.css";

function InnerApp({
  store,
  router,
}: {
  store: ReturnType<typeof setupStore>;
  router:
    | ReturnType<typeof createBrowserRouter>
    | ReturnType<typeof createMemoryRouter>;
}) {
  const language =
    (localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) as string) ||
    defaultLanguage;

  return (
    <div className="app">
      <I18nextProvider i18n={initI18n(language)}>
        <Provider store={store}>
          <RefreshTokens>
            <RouterProvider router={router} />
          </RefreshTokens>
        </Provider>
      </I18nextProvider>
    </div>
  );
}

function App({
  store = setupStore(),
  router = createBrowserRouter(routes),
}: {
  store?: ReturnType<typeof setupStore>;
  router?: ReturnType<typeof createBrowserRouter>;
}) {
  return <InnerApp store={store} router={router} />;
}

export function AppInMemory() {
  return <InnerApp store={setupStore()} router={createMemoryRouter(routes)} />;
}

export default App;
