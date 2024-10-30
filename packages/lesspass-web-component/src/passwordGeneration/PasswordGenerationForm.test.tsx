import { test, expect } from "vitest";
import { render } from "../setupTests";
import PasswordGenerationForm from "./PasswordGenerationForm";

test("Site field must be selected", () => {
  const { getByLabelText } = render(<PasswordGenerationForm />);
  expect(getByLabelText("Site")).toBe(document.activeElement);
});
