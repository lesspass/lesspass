const { stringToArrayBuffer, arrayBufferToHex, getAlgorithm } = require("lesspass-crypto");

module.exports = function hmac(digest, string, salt) {
  return window.crypto.subtle
    .importKey(
      "raw",
      stringToArrayBuffer(string),
      {
        name: "HMAC",
        hash: { name: getAlgorithm(digest) }
      },
      true,
      ["sign", "verify"]
    )
    .then(key =>
      window.crypto.subtle
        .sign({ name: "HMAC" }, key, stringToArrayBuffer(salt || ""))
        .then(signature => arrayBufferToHex(signature))
    );
};
