import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignInForm from "./SignInForm";

it("SignInform on submit", async () => {
  const mockOnSubmit = jest.fn();
  render(<SignInForm onSubmit={mockOnSubmit} />);
  const signInForm = screen.getByTestId("sign-in-form");
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
