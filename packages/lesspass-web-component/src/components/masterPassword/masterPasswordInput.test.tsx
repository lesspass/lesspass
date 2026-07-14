import { expect, vi } from "vitest";
import { render, renderWithProviders } from "../../tests/renders";
import { MasterPasswordInput } from "./masterPasswordInput";
import { useForm } from "react-hook-form";

describe("Master password", () => {
  const ManagedMasterPasswordInput = () => {
    const { register } = useForm<{ password: string }>({
      defaultValues: { password: "" },
    });
    return (
      <form onSubmit={vi.fn()}>
        <label htmlFor="password">Master password</label>
        <MasterPasswordInput
          id="password"
          placeholder="Master password"
          autoComplete="new-password"
          {...register("password")}
        />
      </form>
    );
  };

  test("should display real input value after 500ms", async () => {
    const { user, queryByTestId, findByTestId } = render(
      <ManagedMasterPasswordInput />,
    );
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;
    expect(masterPasswordInput.type).toBe("password");

    await user.type(masterPasswordInput, "password");
    expect(masterPasswordInput).toHaveValue("password");

    const expectedFingerprintIcons = [
      "icon-fa-flask",
      "icon-fa-archive",
      "icon-fa-beer",
    ];

    // check not all expected icons are present when user type
    expect(
      expectedFingerprintIcons.filter(
        (iconName) => queryByTestId(iconName) !== null,
      ).length,
    ).toBeLessThan(3);

    // wait for the expected icons to be present after 500ms
    await findByTestId(expectedFingerprintIcons[0]);
    await findByTestId(expectedFingerprintIcons[1]);
    await findByTestId(expectedFingerprintIcons[2]);

    // now check icons are the expected icons
    expect(
      expectedFingerprintIcons.filter(
        (iconName) => queryByTestId(iconName) !== null,
      ).length,
    ).toBe(3);
  });

  // check that it does not introduce a breaking change
  test("short master password does not block the form", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    await user.type(masterPasswordInput, "short");
    expect(masterPasswordInput).not.toHaveAttribute("minlength");
    expect(masterPasswordInput.checkValidity()).toBe(true);
  });

  test("should not display a safe color while under the minimum length", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    // 9 chars, high zxcvbn entropy
    await user.type(masterPasswordInput, "Tr0ub4d&3");
    const output = document.querySelector("output");
    expect(output?.className).toContain("text-amber-600");
    expect(output?.className).not.toContain("text-green-500");
  });

  test("should display password strength feedback when typing", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    // no feedback before typing
    expect(document.querySelector("output")).toBeNull();

    // feedback appears after typing
    await user.type(masterPasswordInput, "password");
    expect(document.querySelector("output")).not.toBeNull();
  });

  test("should display stronger feedback for a stronger password", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

     // TooShort → "We recommend you use at least 10 characters"
    await user.type(masterPasswordInput, "a");
    const weakLabel = document.querySelector("output")?.textContent;

    // score 4 → "The NSA is going to have a hard time"
    await user.clear(masterPasswordInput); // clear before typing strong password
    await user.type(masterPasswordInput, "correct-horse-battery-staple-42!");
    const strongLabel = document.querySelector("output")?.textContent;

    // different scores for different labels
    expect(weakLabel).not.toBe(strongLabel);
  });

  test("should display translated password strength feedback", async () => {
    const { user, queryByTestId } = renderWithProviders(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    await user.type(masterPasswordInput, "a");
    const output = document.querySelector("output");
    expect(output?.textContent?.trim()).toBe("Too short: we recommend you use at least 10 characters");
  });

  test("should stop showing the too-short warning at exactly 10 characters", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    // 9 chars → amber too-short warning
    await user.type(masterPasswordInput, "Tr0ub4d&3");
    expect(document.querySelector("output")?.className).toContain("text-amber-600");

    // 10th char crosses the boundary → warning gone, real score shown instead
    await user.type(masterPasswordInput, "J");
    expect(document.querySelector("output")?.className).not.toContain("text-amber-600");
  });

  test("should show an unsafe score (not the too-short warning) for a weak but long password", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    // 12 chars but guessable → zxcvbn low score, never amber or safe colors
    await user.type(masterPasswordInput, "aaaaaaaaaaaa");
    const output = document.querySelector("output");
    expect(output?.className).not.toContain("text-amber-600");
    expect(output?.className).not.toContain("text-blue-400");
    expect(output?.className).not.toContain("text-green-500");
  });

  test("should show a safe color for a strong password of sufficient length", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    // long random password → zxcvbn score 4 → green
    await user.type(masterPasswordInput, "wXm#9vLq2$Rk7pZt");
    expect(document.querySelector("output")?.className).toContain("text-green-500");
  });

  test("should hide strength feedback when the input is cleared", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    await user.type(masterPasswordInput, "password");
    expect(document.querySelector("output")).not.toBeNull();

    // clearing the field removes the feedback entirely
    await user.clear(masterPasswordInput);
    expect(document.querySelector("output")).toBeNull();
  });
});
