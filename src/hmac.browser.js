require("unibabel");
require("unibabel/unibabel.hex");

module.exports = function(digest, string, salt) {
  var algorithms = {
    sha1: "SHA-1",
    "sha-1": "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha512: "SHA-512",
    "sha-512": "SHA-512"
  };
  return window.crypto.subtle
    .importKey(
      "raw",
      Unibabel.utf8ToBuffer(string),
      {
        name: "HMAC",
        hash: { name: algorithms[digest.toLowerCase()] }
      },
      true,
      ["sign", "verify"]
    )
    .then(function(key) {
      return window.crypto.subtle
        .sign({ name: "HMAC" }, key, Unibabel.utf8ToBuffer(salt || ""))
        .then(function(signature) {
          return Unibabel.bufferToHex(new Uint8Array(signature));
        });
    });
};
