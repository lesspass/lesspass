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

  // check that warning is empty before the user types
  test("should not display a warning before the user types", async () => {
    const { queryByTestId } = render(<ManagedMasterPasswordInput />);
    expect(queryByTestId("password-warning")).toBeNull();
  });

  // check that warning appears for all 9 characters
  test("should warn while the master password is too short", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    await user.type(masterPasswordInput, "123456789");
    const warning = queryByTestId("password-warning");
    expect(warning).not.toBeNull();
    expect(warning?.className).toContain("text-amber-600");
  });

  // check that warning disappears after 10th character
  test("should stop warning once the master password is long enough", async () => {
    const { user, queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;

    await user.type(masterPasswordInput, "1234567890");
    expect(queryByTestId("password-warning")).toBeNull();
  });
});
