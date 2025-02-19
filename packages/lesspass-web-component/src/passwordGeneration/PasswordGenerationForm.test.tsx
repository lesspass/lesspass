import { test, expect, vi } from "vitest";
import { render } from "../setupTests";
import PasswordGenerationForm from "./PasswordGenerationForm";
import { waitFor } from "@testing-library/react";

test("PasswordGenerationForm site is focused", async () => {
  const mockOnSubmit = vi.fn();

  const { getByLabelText } = render(
    <PasswordGenerationForm onSubmit={mockOnSubmit} />,
  );

  const site = getByLabelText("Site");
  expect(site).toHaveFocus();
});

test("PasswordGenerationForm onSubmit with the default values", async () => {
  const mockOnSubmit = vi.fn();

  const { user, getByLabelText, getByRole } = render(
    <PasswordGenerationForm onSubmit={mockOnSubmit} />,
  );

  const site = getByLabelText("Site");
  await user.type(site, "example.org");

  const login = getByLabelText("Login");
  await user.type(login, "contact@example.org");

  const masterPassword = getByLabelText("Master password");
  await user.type(masterPassword, "password");

  const submitButton = getByRole("button", { name: "Generate & Copy" });
  await user.click(submitButton);

  await waitFor(() => {
    expect(mockOnSubmit.mock.calls.length).toBe(1);
    expect(mockOnSubmit.mock.calls[0][0]).toEqual({
      site: "example.org",
      login: "contact@example.org",
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true,
      length: 16,
      counter: 1,
    });
    expect(mockOnSubmit.mock.calls[0][1]).toEqual("password");
  });
});

test("PasswordGenerationForm onSubmit with differents options", async () => {
  const mockOnSubmit = vi.fn();

  const { user, getByLabelText, getByRole } = render(
    <PasswordGenerationForm onSubmit={mockOnSubmit} />,
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

  const submitButton = getByRole("button", { name: /Generate & Copy/i });
  expect(submitButton).toBeDisabled();

  await user.click(lowercase);

  const length = getByLabelText("Length");
  await user.clear(length);
  await user.type(length, "15");
  // await user.type(length, '{arrowdown}'); waiting for pr https://github.com/testing-library/user-event/pull/1272

  const counter = getByLabelText("Counter");
  await user.clear(counter);
  await user.type(counter, "2");
  // await user.type(counter, '{arrowup}'); waiting for pr https://github.com/testing-library/user-event/pull/1272

  await user.click(submitButton);

  await waitFor(() => {
    expect(mockOnSubmit.mock.calls.length).toBe(1);
    expect(mockOnSubmit.mock.calls[0][0]).toEqual({
      site: "example.org",
      login: "contact@example.org",
      lowercase: true,
      uppercase: false,
      digits: false,
      symbols: false,
      length: 15,
      counter: 2,
    });
    expect(mockOnSubmit.mock.calls[0][1]).toEqual("password");
  });
});
