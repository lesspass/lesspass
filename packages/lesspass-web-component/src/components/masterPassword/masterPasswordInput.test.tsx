import { expect, vi } from "vitest";
import { render } from "../../tests/renders";
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
});
