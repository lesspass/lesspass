import { test, expect } from "vitest";
import { render } from "../tests/renders";
import GeneratedPassword from "./GeneratedPassword";

test("GeneratedPassword show password", async () => {
  const { user, queryByText, getByRole, findByRole } = render(
    <GeneratedPassword generatedPassword="password" />,
  );
  await findByRole("button", { name: /Show/i });
  expect(queryByText("**********")).toBeVisible();
  expect(queryByText("password")).toBeNull();
  await user.click(getByRole("button", { name: /Show/i }));
  expect(queryByText("**********")).toBeNull();
  expect(queryByText("password")).toBeVisible();
});
