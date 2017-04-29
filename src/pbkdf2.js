var pbkdf2 = require("pbkdf2");
var Buffer = require("buffer/").Buffer;
var Promise = require("es6-promise").Promise;

function shouldUseNative() {
  return !!(typeof window !== "undefined" &&
    window.crypto &&
    window.crypto.subtle);
}

function pbkdf2WebCrypto(password, salt, iterations, keylen, digest) {
  var algorithms = {
    sha1: "SHA-1",
    "sha-1": "SHA-1",
    sha256: "SHA-256",
    "sha-256": "SHA-256",
    sha512: "SHA-512",
    "sha-512": "SHA-512"
  };
  return window.crypto.subtle
    .importKey("raw", new Buffer(password), "PBKDF2", false, ["deriveKey"])
    .then(function(key) {
      var algo = {
        name: "PBKDF2",
        salt: new Buffer(salt),
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
          return new Buffer(keyArray).toString("hex");
        });
    });
}

function pbkdf2Browserified(password, salt, iterations, keylen, digest) {
  return new Promise(function(resolve, reject) {
    pbkdf2.pbkdf2(password, salt, iterations, keylen, digest, function(
      error,
      key
    ) {
      if (error) {
        reject("error in pbkdf2");
      } else {
        resolve(key.toString("hex"));
      }
    });
  });
}

module.exports = shouldUseNative() ? pbkdf2WebCrypto : pbkdf2Browserified;
