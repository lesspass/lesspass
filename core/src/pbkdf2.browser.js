require("unibabel");
require("unibabel/unibabel.hex");

module.exports = function(password, salt, iterations, keylen, digest) {
  var algorithms = {
    sha1: "SHA-1",
    "sha-1": "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha512: "SHA-512",
    "sha-512": "SHA-512"
  };
  return window.crypto.subtle
    .importKey("raw", Unibabel.utf8ToBuffer(password), "PBKDF2", false, [
      "deriveKey"
    ])
    .then(function(key) {
      var algo = {
        name: "PBKDF2",
        salt: Unibabel.utf8ToBuffer(salt),
        iterations: iterations,
        hash: algorithms[digest.toLowerCase()]
      };
      return window.crypto.subtle.deriveKey(
        algo,
        key,
        {
          name: "AES-CTR",
          length: keylen * 8
        },
        true,
        ["encrypt", "decrypt"]
      );
    })
    .then(function(derivedKey) {
      return window.crypto.subtle
        .exportKey("raw", derivedKey)
        .then(function(keyArray) {
          return Unibabel.bufferToHex(new Uint8Array(keyArray));
        });
    });
};
