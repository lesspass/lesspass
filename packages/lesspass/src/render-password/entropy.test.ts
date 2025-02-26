import { expect, test } from "vitest";
import entropy from "./entropy";

test("consumeEntropy", () => {
  const password = entropy.consumeEntropy("", BigInt(4 * 4 + 2), "abcd", 2);
  expect("ca").toBe(password.value);
  expect("1").toBe(password.entropy.toString());
});
