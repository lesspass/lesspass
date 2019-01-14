const assert = require("assert");
const {
  stringToArrayBuffer,
  arrayBufferToHex
} = require("../src/stringEncoding");

describe("stringEncoding", () => {
  it("stringToArrayBuffer", () => {
    assert.equal(stringToArrayBuffer("ȧ")[0], 200);
    assert.equal(stringToArrayBuffer("ȧ")[1], 167);
  });
  it("arrayBufferToHex", () => {
    assert.equal(arrayBufferToHex(new Uint8Array([200, 167])), "c8a7");
  });
});
