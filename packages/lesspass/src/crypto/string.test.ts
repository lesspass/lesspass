import { expect, test } from "vitest";
import { stringToArrayBuffer, arrayBufferToHex } from "./string";

test("stringToArrayBuffer", () => {
  expect(stringToArrayBuffer("ȧ")[0]).toBe(200);
  expect(stringToArrayBuffer("ȧ")[1]).toBe(167);
});

test("arrayBufferToHex", () => {
  expect(arrayBufferToHex(new Uint8Array([200, 167]))).toBe("c8a7");
});
