import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

it("Registerform on submit", async () => {
  const mockOnSubmit = jest.fn();
  render(<RegisterForm onSubmit={mockOnSubmit} />);
  const signInForm = screen.getByTestId("register-form");
  expect(signInForm).not.toBe(null);
  const email = screen.getByTestId("email-input");
  fireEvent.change(email, {
    target: {
      value: "contact@example.org",
    },
  });
  const password = screen.getByTestId("password-input");
  fireEvent.change(password, {
    target: {
      value: "password",
    },
  });
  fireEvent.submit(signInForm);
  await waitFor(() => {
    expect(mockOnSubmit.mock.calls.length).toBe(1);
    expect(mockOnSubmit.mock.calls[0][0]).toEqual({
      email: "contact@example.org",
      password: "password",
    });
  });
});

it("Registerform on submit is not triggered if use doesn't accept Terms of service", async () => {
  const mockOnSubmit = jest.fn();
  render(<RegisterForm  onSubmit={mockOnSubmit} />);
  const signInForm = screen.getByTestId("register-form");
  expect(signInForm).not.toBe(null);
  const email = screen.getByTestId("email-input");
  fireEvent.change(email, {
    target: {
      value: "contact@example.org",
    },
  });
  const password = screen.getByTestId("password-input");
  fireEvent.change(password, {
    target: {
      value: "password",
    },
  });
  const tou = screen.getByTestId("term-of-use-checkbox");
  fireEvent.click(tou);
  fireEvent.submit(signInForm);
  await waitFor(() => {
    expect(mockOnSubmit.mock.calls.length).toBe(0);
  });
});
