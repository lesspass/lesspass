const crypto = require("crypto");

module.exports = function(password, salt, iterations, keylen, digest) {
  return new Promise(function(resolve, reject) {
    crypto.pbkdf2(password, salt, iterations, keylen, digest, function(
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
};
