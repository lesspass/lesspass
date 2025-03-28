import { expect, test } from "vitest";
import { getAlgorithm } from "./algo";

test("getAlgorithm", () => {
  expect(getAlgorithm("sha-256")).toBe("SHA-256");
  expect(getAlgorithm("sha256")).toBe("SHA-256");
  expect(getAlgorithm("ShA-256")).toBe("SHA-256");
});
