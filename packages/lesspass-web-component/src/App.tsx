import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./router";
import { I18nextProvider } from "react-i18next";
import { initI18n, defaultLanguage } from "./i18n";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "./constant";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { RefreshTokens } from "./auth/RefreshTokens";

function App({
  store = setupStore(),
  router = createBrowserRouter(routes),
}: {
  store?: ReturnType<typeof setupStore>;
  router?: ReturnType<typeof createBrowserRouter>;
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

export default App;
