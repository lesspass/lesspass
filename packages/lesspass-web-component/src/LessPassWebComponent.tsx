import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { setupStore } from "./store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { App } from "./App";
import { getSettings } from "./services/settings";
import { SettingsState } from "./settings/settingsSlice";

export default function LessPassWebComponent({
  settings,
}: {
  settings: Partial<SettingsState>;
}) {
  return (
    <MemoryRouter>
      <Provider
        store={setupStore({ settings: { ...getSettings(), ...settings } })}
      >
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </MemoryRouter>
  );
}
