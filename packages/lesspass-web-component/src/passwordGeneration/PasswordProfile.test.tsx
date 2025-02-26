import { test, expect } from "vitest";
import { renderWithProviders } from "../tests/renders";
import PasswordProfile from "./PasswordProfile";
import { defaultPasswordProfile } from "lesspass";

test("PasswordProfileForm site is focused", async () => {
  const { getByLabelText } = renderWithProviders(
    <PasswordProfile
      focus="site"
      passwordProfile={{ ...defaultPasswordProfile }}
    />,
  );

  const site = getByLabelText("Site");
  expect(site).toHaveFocus();
});

test("PasswordProfileForm masterPassword is focused", async () => {
  const { getByLabelText } = renderWithProviders(
    <PasswordProfile
      focus="masterPassword"
      passwordProfile={{ ...defaultPasswordProfile }}
    />,
  );

  const masterPassword = getByLabelText("Master password");
  expect(masterPassword).toHaveFocus();
});

test("Should generate a password", async () => {
  const { user, getByRole, findByRole, getByLabelText, queryByText } =
    renderWithProviders(
      <PasswordProfile
        focus="masterPassword"
        passwordProfile={{ ...defaultPasswordProfile }}
      />,
    );
  const site = getByLabelText("Site");
  await user.type(site, "example.org");

  const login = getByLabelText("Login");
  await user.type(login, "contact@example.org");

  const masterPassword = getByLabelText("Master password");
  await user.type(masterPassword, "password");

  const generateButton = getByRole("button", { name: /Generate & Copy/i });
  await user.click(generateButton);

  await findByRole("button", { name: /Show/i });
  expect(queryByText("WHLpUL)e00[iHR+w")).toBeNull();
  await user.click(getByRole("button", { name: /Show/i }));
  expect(queryByText("WHLpUL)e00[iHR+w")).toBeVisible();
});

test("Should generate a password with different options", async () => {
  const { user, findByRole, getByRole, getByLabelText, queryByText } =
    renderWithProviders(
      <PasswordProfile
        focus="masterPassword"
        passwordProfile={{ ...defaultPasswordProfile }}
      />,
    );

  const site = getByLabelText("Site");
  await user.type(site, "example.org");

  const login = getByLabelText("Login");
  await user.type(login, "contact@example.org");

  const masterPassword = getByLabelText("Master password");
  await user.type(masterPassword, "password");

  const lowercase = getByLabelText("a-z");
  await user.click(lowercase);

  const uppercase = getByLabelText("A-Z");
  await user.click(uppercase);

  const digits = getByLabelText("0-9");
  await user.click(digits);

  const symbols = getByLabelText("%!@");
  await user.click(symbols);

  const generateButton = getByRole("button", { name: /Generate & Copy/i });
  expect(generateButton).toBeDisabled();

  await user.click(lowercase);

  const length = getByLabelText("Length");
  await user.clear(length);
  await user.type(length, "15");
  // await user.type(length, '{arrowdown}'); waiting for pr https://github.com/testing-library/user-event/pull/1272

  const counter = getByLabelText("Counter");
  await user.clear(counter);
  await user.type(counter, "2");
  // await user.type(counter, '{arrowup}'); waiting for pr https://github.com/testing-library/user-event/pull/1272

  await user.click(generateButton);
  await findByRole("button", { name: /Show/i });
  await user.click(getByRole("button", { name: /Show/i }));
  expect(queryByText("ctuwwpkmfszumca")).toBeVisible();
});
