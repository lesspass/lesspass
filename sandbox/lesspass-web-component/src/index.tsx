import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { initI18n } from "./i18n";
import reduxStore from "./store";
import initLocalStore from "./services/localStore";

const localStore = initLocalStore(window.localStorage);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...">
      <Provider store={reduxStore}>
        <BrowserRouter>
          <I18nextProvider i18n={initI18n(localStore)}>
            <App store={localStore} />
          </I18nextProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
