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

  // 10 because of nist protocol
  test("should have a minimun lenght of 10", () => {
    const{ queryByTestId } = render(<ManagedMasterPasswordInput />);
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;
    expect(masterPasswordInput).toHaveAttribute("minlength", "10");
  })

  test("should display password strength feedback when typing", async () => {
    const { user, queryByTestId } = render (<ManagedMasterPasswordInput />);
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

     // score 0 → "Unacceptable"
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
    expect(output?.textContent).toBe("Unacceptable");
  });
});
