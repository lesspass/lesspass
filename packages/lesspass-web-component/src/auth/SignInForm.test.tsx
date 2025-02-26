import { expect, test, vi } from "vitest";
import SignInForm from "./SignInForm";
import { renderWithProviders } from "../tests/renders";
import { waitFor } from "@testing-library/dom";

test("SignInForm on submit", async () => {
  const mockOnSubmit = vi.fn();
  const { getByRole, getByLabelText, user } = renderWithProviders(
    <div>
      <SignInForm id="sign-in-form" onSubmit={mockOnSubmit} />
      <button type="submit" form="sign-in-form">
        Sign in
      </button>
    </div>,
  );

  const baseUrl = getByLabelText(/LessPass server/i);
  await user.clear(baseUrl);
  await user.type(baseUrl, "https://api.example.org");

  const email = getByLabelText("Email");
  await user.type(email, "contact@example.org");

  const masterPassword = getByLabelText("Master password");
  await user.type(masterPassword, "password");

  const signInButton = getByRole("button", { name: "Sign in" });
  await user.click(signInButton);

  await waitFor(() => {
    expect(mockOnSubmit.mock.calls.length).toBe(1);
    expect(mockOnSubmit.mock.calls[0][0]).toEqual({
      baseUrl: "https://api.example.org",
      email: "contact@example.org",
      masterPassword: "password",
    });
  });
});
