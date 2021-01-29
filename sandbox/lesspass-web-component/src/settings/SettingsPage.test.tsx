import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { InitApp } from "../App.test";
import { createMemoryHistory } from "history";
import { fakeLocalStore } from "../services/localStore";

test("test settings page when local storage is empty", async () => {
  const history = createMemoryHistory();
  render(
    <InitApp
      history={history}
      store={fakeLocalStore({ masterPassword: "password" })}
    />
  );
  fireEvent.click(screen.queryByTestId("settings-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/settings");

  const useMasterPasswordForAuth = screen.queryByTestId(
    "use-master-password-for-auth-checkbox"
  ) as HTMLInputElement;

  await waitFor(() => {
    expect(useMasterPasswordForAuth).toBeInTheDocument();
    expect(useMasterPasswordForAuth.type).toBe("checkbox");
    expect(useMasterPasswordForAuth.checked).toBe(true);
  });

  const frRadioButton = screen.queryByTestId(
    "fr-radio-button"
  ) as HTMLInputElement;
  const enRadioButton = screen.queryByTestId(
    "en-radio-button"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(enRadioButton).toBeInTheDocument();
    expect(enRadioButton.type).toBe("radio");
    expect(enRadioButton.checked).toBe(true);
    expect(frRadioButton).toBeInTheDocument();
    expect(frRadioButton.type).toBe("radio");
    expect(frRadioButton.checked).toBe(false);
  });
});

test("test settings page when local storage has saved info", async () => {
  const history = createMemoryHistory();
  render(
    <InitApp
      history={history}
      store={fakeLocalStore({
        masterPassword: "password",
        settings: { useMasterPasswordForAuth: false, language: "fr" },
      })}
    />
  );
  fireEvent.click(screen.queryByTestId("settings-link") as HTMLLinkElement);
  expect(history.location.pathname).toBe("/settings");

  const useMasterPasswordForAuth = screen.queryByTestId(
    "use-master-password-for-auth-checkbox"
  ) as HTMLInputElement;

  await waitFor(() => {
    expect(useMasterPasswordForAuth).toBeInTheDocument();
    expect(useMasterPasswordForAuth.type).toBe("checkbox");
    expect(useMasterPasswordForAuth.checked).toBe(false);
  });

  const frRadioButton = screen.queryByTestId(
    "fr-radio-button"
  ) as HTMLInputElement;
  const enRadioButton = screen.queryByTestId(
    "en-radio-button"
  ) as HTMLInputElement;
  await waitFor(() => {
    expect(enRadioButton.checked).toBe(false);
    expect(frRadioButton.checked).toBe(true);
  });
});

test("click on option save them in local store", async () => {
  const store = fakeLocalStore({ masterPassword: "password" });
  render(<InitApp store={store} />);
  fireEvent.click(screen.queryByTestId("settings-link") as HTMLLinkElement);
  const frRadioButton = screen.queryByTestId(
    "fr-radio-button"
  ) as HTMLInputElement;
  fireEvent.click(frRadioButton);
  await waitFor(() => {
    expect(store.getItem("settings")).toMatchObject({
      useMasterPasswordForAuth: true,
      language: "fr",
    });
  });
});
