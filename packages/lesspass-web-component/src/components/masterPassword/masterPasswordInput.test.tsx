import { expect, vi } from "vitest";
import { render } from "../../tests/renders";
import { MasterPasswordInput } from "./masterPasswordInput";
import { useForm } from "react-hook-form";
import { waitFor } from "@testing-library/dom";

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
    // vi.useFakeTimers();
    const { user, queryByTestId, queryByTitle, findByTitle } = render(
      <ManagedMasterPasswordInput />,
    );
    const masterPasswordInput = queryByTestId("password") as HTMLInputElement;
    expect(masterPasswordInput.type).toBe("password");

    await user.type(masterPasswordInput, "password");
    expect(masterPasswordInput).toHaveValue("password");

    await waitFor(() => {
      expect(
        queryByTitle("icon-fa-flask") === null ||
          queryByTitle("icon-fa-archive") === null ||
          queryByTitle("icon-fa-beer") === null,
      ).toBe(true);
    });

    // vi.advanceTimersByTime(500);
    // bug in RTL async and useFakeTimers https://github.com/testing-library/user-event/issues/1115
    await findByTitle("icon-fa-flask");
    await waitFor(() => {
      expect(queryByTitle("icon-fa-flask")).toBeInTheDocument();
      expect(queryByTitle("icon-fa-archive")).toBeInTheDocument();
      expect(queryByTitle("icon-fa-beer")).toBeInTheDocument();
    });
    // vi.useRealTimers();
  });
});
