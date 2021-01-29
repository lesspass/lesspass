import React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import App from "./App";
import { Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { initI18n } from "./i18n";
import reduxStore from "./store";
import { fakeLocalStore } from "./services/localStore";

export const InitApp = ({
  store,
  history = createMemoryHistory(),
}: {
  store: Store;
  history?: MemoryHistory;
}) => {
  return (
    <Provider store={reduxStore}>
      <Router history={history}>
        <I18nextProvider i18n={initI18n(store)}>
          <App store={store} />
        </I18nextProvider>
      </Router>
    </Provider>
  );
};

beforeAll(() => {
  jest.useFakeTimers();
  jest.runAllTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

test("at startup master-password-input should be visible", async () => {
  render(<InitApp store={fakeLocalStore()} />);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(masterPasswordInput).toBeInTheDocument();
    expect(masterPasswordInput.type).toBe("password");
    expect(masterPasswordInput.value).toBe("");
  });
});

test("at startup master-password-input should be focused", async () => {
  render(<InitApp store={fakeLocalStore()} />);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(masterPasswordInput).toBe(document.activeElement);
  });
});

test("at startup unlock page is not present if master password is in store", () => {
  render(<InitApp store={fakeLocalStore({ masterPassword: "password" })} />);
  const passwordGeneratorForm = screen.queryByTestId("password-generator-form");
  expect(passwordGeneratorForm).toBeInTheDocument();
});

test("at startup save-master-password-checkbox should be visible", async () => {
  render(<InitApp store={fakeLocalStore()} />);
  const saveMasterPasswordCheckbox = screen.queryByTestId(
    "save-master-password-checkbox"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(saveMasterPasswordCheckbox).toBeInTheDocument();
    expect(saveMasterPasswordCheckbox.type).toBe("checkbox");
    expect(saveMasterPasswordCheckbox.checked).toBe(true);
  });
});

test("hit enter on unlock page save master password in store", async () => {
  const store = fakeLocalStore();
  expect(store.getItem("masterPassword")).not.toBe("hit enter");
  render(<InitApp store={store} />);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  expect(masterPasswordInput).toBeInTheDocument();
  fireEvent.change(masterPasswordInput, { target: { value: "hit enter" } });
  fireEvent.submit(masterPasswordInput);
  expect(store.getItem("masterPassword")).toBe("hit enter");
  await waitFor(() => {
    expect(screen.queryByTestId("password-generator-form")).toBeInTheDocument();
  });
});

test("click save button and uncheck save-master-password-checkbox don't save it local storage", async () => {
  const store = fakeLocalStore();
  expect(store.getItem("masterPassword")).toBeNull();
  render(<InitApp store={store} />);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  expect(masterPasswordInput).toBeInTheDocument();
  fireEvent.change(masterPasswordInput, {
    target: { value: "master password" },
  });
  const saveMasterPasswordCheckbox = screen.queryByTestId(
    "save-master-password-checkbox"
  ) as HTMLInputElement;
  fireEvent.click(saveMasterPasswordCheckbox);
  const submitButton = screen.queryByTestId("unlock") as HTMLButtonElement;
  fireEvent.click(submitButton);
  expect(store.getItem("masterPassword")).toBeNull();
  await waitFor(() => {
    expect(screen.queryByTestId("password-generator-form")).toBeInTheDocument();
  });
});

test("lock button is present if master password in local storage and redirect to root url", async () => {
  render(<InitApp store={fakeLocalStore({ masterPassword: "password" })} />);
  const lockButton = screen.queryByTestId("lock-button") as HTMLButtonElement;
  expect(lockButton).toBeInTheDocument();
  fireEvent.click(lockButton);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(masterPasswordInput).toBeInTheDocument();
  });
});

test("click on unlock with save-master-password-checkbox false save value in localstorage", async () => {
  const store = fakeLocalStore();
  render(<InitApp store={store} />);
  const saveMasterPasswordCheckbox = screen.queryByTestId(
    "save-master-password-checkbox"
  ) as HTMLInputElement;
  fireEvent.click(saveMasterPasswordCheckbox);
  await waitFor(() => {
    expect(saveMasterPasswordCheckbox).toBeInTheDocument();
    expect(saveMasterPasswordCheckbox.type).toBe("checkbox");
    expect(saveMasterPasswordCheckbox.checked).toBe(false);
    expect(store.getItem("settings")).toBeNull();
  });
  const submitButton = screen.queryByTestId("unlock") as HTMLButtonElement;
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(store.getItem("settings")).toMatchObject({
      saveMasterPassword: false,
    });
  });
});

test("save-master-password-checkbox is unchecked if user already choose not to save master password", async () => {
  render(
    <InitApp
      store={fakeLocalStore({ settings: { saveMasterPassword: false } })}
    />
  );
  const saveMasterPasswordCheckbox = screen.queryByTestId(
    "save-master-password-checkbox"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(saveMasterPasswordCheckbox).toBeInTheDocument();
    expect(saveMasterPasswordCheckbox.type).toBe("checkbox");
    expect(saveMasterPasswordCheckbox.checked).toBe(false);
  });
});

test("click on unlock with save-master-password-checkbox false and remove master password from localstorage", async () => {
  const store = fakeLocalStore({ masterPassword: "password" });
  render(<InitApp store={store} />);
  const lockButton = screen.queryByTestId("lock-button") as HTMLButtonElement;
  fireEvent.click(lockButton);
  const saveMasterPasswordCheckbox = screen.queryByTestId(
    "save-master-password-checkbox"
  ) as HTMLInputElement;
  fireEvent.click(saveMasterPasswordCheckbox);
  const submitButton = screen.queryByTestId("unlock") as HTMLButtonElement;
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(store.getItem("masterPassword")).toBeNull();
  });
});

test("routing pages unauth", async () => {
  const history = createMemoryHistory();
  render(
    <InitApp
      history={history}
      store={fakeLocalStore({ masterPassword: "password" })}
    />
  );
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByText(/lesspass/i) as HTMLLinkElement);
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByTestId("settings-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/settings");
  expect(screen.queryByText(/passwords/i)).toBeNull();
  fireEvent.click(screen.queryByTestId("sign-in-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/signIn");
  fireEvent.click(screen.queryByTestId("register-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/register");
  expect(screen.queryByTestId("my-account-link")).toBeNull();
});

test("routing pages auth", async () => {
  const history = createMemoryHistory();
  render(
    <InitApp
      history={history}
      store={fakeLocalStore({
        masterPassword: "password",
        access_token: "access_token",
      })}
    />
  );
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByText(/lesspass/i) as HTMLLinkElement);
  expect(history.location.pathname).toBe("/");
  fireEvent.click(screen.queryByTestId("settings-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/settings");
  await waitFor(() => {
    expect(
      screen.queryByText(/passwords/i) as HTMLLinkElement
    ).toBeInTheDocument();
  });
  fireEvent.click(screen.queryByText(/passwords/i) as HTMLLinkElement);
  expect(history.location.pathname).toBe("/passwords");
  expect(screen.queryByTestId("sign-in-link")).toBeNull();
  expect(screen.queryByTestId("register-link")).toBeNull();
  fireEvent.click(screen.queryByTestId("my-account-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/my_account");
});

test("test i18n fr", async () => {
  render(<InitApp store={fakeLocalStore({ masterPassword: "password" })} />);
  expect(screen.queryByText(/se connecter/i)).toBeNull();
  fireEvent.click(screen.queryByTestId("settings-link") as HTMLLinkElement);
  fireEvent.click(screen.queryByLabelText(/fr/i) as HTMLInputElement);
  expect(screen.queryByText(/se connecter/i)).toBeInTheDocument();
  fireEvent.click(screen.queryByLabelText(/en/i) as HTMLInputElement);
  expect(screen.queryByText(/sign in/i)).toBeInTheDocument();
});

test("password generator page can't be reach if master password is not unlocked", async () => {
  const history = createMemoryHistory();
  render(<InitApp history={history} store={fakeLocalStore()} />);
  const masterPasswordInput = screen.queryByTestId(
    "master-password-input"
  ) as HTMLInputElement;
  fireEvent.change(masterPasswordInput, {
    target: { value: "p" },
  });
  fireEvent.click(screen.queryByText(/lesspass/i) as HTMLLinkElement);
  await waitFor(() => {
    expect(history.location.pathname).toBe("/unlock");
  });
});
