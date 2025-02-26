import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import store from "./store";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
