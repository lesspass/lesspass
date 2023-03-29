import { stringToArrayBuffer, arrayBufferToHex } from "./stringEncoding";

describe("stringEncoding", () => {
  it("stringToArrayBuffer", () => {
    expect(stringToArrayBuffer("ȧ")[0]).toBe(200);
    expect(stringToArrayBuffer("ȧ")[1]).toBe(167);
  });
  it("arrayBufferToHex", () => {
    expect(arrayBufferToHex(new Uint8Array([200, 167]))).toBe("c8a7");
  });
});
