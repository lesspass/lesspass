import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PasswordGeneratorForm from "./PasswordGeneratorForm";

test("PasswordGeneratorForm", async () => {
  const onPasswordGenerated = jest.fn();
  render(
    <PasswordGeneratorForm
      masterPassword="password"
      onPasswordGenerated={onPasswordGenerated}
    />
  );

  const siteInput = screen.queryByTestId("site-input") as HTMLInputElement;
  expect(siteInput.type).toBe("text");
  expect(siteInput.value).toBe("");
  fireEvent.change(siteInput, {
    target: { value: "www.lesspass.com" },
  });

  const loginInput = screen.queryByTestId("login-input") as HTMLInputElement;
  expect(loginInput.type).toBe("text");
  expect(loginInput.value).toBe("");
  fireEvent.change(loginInput, {
    target: { value: "contact@lesspass.com" },
  });

  const uppercaseCheckbox = screen.queryByTestId(
    "uppercase-checkbox"
  ) as HTMLInputElement;
  fireEvent.click(uppercaseCheckbox);

  const digitsCheckbox = screen.queryByTestId(
    "digits-checkbox"
  ) as HTMLInputElement;
  fireEvent.click(digitsCheckbox);

  const symbolsCheckbox = screen.queryByTestId(
    "symbols-checkbox"
  ) as HTMLInputElement;
  fireEvent.click(symbolsCheckbox);

  const lengthInput = screen.queryByTestId("length-input") as HTMLInputElement;
  expect(lengthInput.type).toBe("number");
  expect(lengthInput.value).toBe("16");
  fireEvent.change(lengthInput, {
    target: { value: "17" },
  });

  const counterInput = screen.queryByTestId(
    "counter-input"
  ) as HTMLInputElement;
  expect(counterInput.type).toBe("number");
  expect(counterInput.value).toBe("1");
  fireEvent.change(counterInput, {
    target: { value: "2" },
  });

  const generatePasswordButton = screen.queryByTestId(
    "generate-password-button"
  ) as HTMLInputElement;
  fireEvent.click(generatePasswordButton);

  await waitFor(() =>
    expect(onPasswordGenerated).toHaveBeenCalledWith("sfexxbwympdakofqp")
  );
});

test("site field is selected when we mount the password generator form", () => {
  render(
    <PasswordGeneratorForm
      masterPassword="password"
      onPasswordGenerated={jest.fn()}
    />
  );
  const siteInput = screen.queryByTestId("site-input") as HTMLInputElement;
  expect(siteInput).toBe(document.activeElement);
});
