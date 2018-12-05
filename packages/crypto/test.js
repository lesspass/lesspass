const { stringToArrayBuffer, arrayBufferToHex, getAlgorithm } = require("./index");

test("stringToArrayBuffer", () => {
  expect(stringToArrayBuffer("ȧ")[0]).toBe(200);
  expect(stringToArrayBuffer("ȧ")[1]).toBe(167);
});

test("arrayBufferToHex", () => {
  expect(arrayBufferToHex(new Uint8Array([200, 167]))).toBe("c8a7");
});

test("getAlgorithm", () => {
  expect(getAlgorithm('sha-256')).toBe('SHA-256');
  expect(getAlgorithm('sha256')).toBe('SHA-256');
  expect(getAlgorithm('ShA-256')).toBe('SHA-256');
});
