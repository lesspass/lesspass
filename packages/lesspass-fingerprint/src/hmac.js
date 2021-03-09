const crypto = require("crypto");

module.exports = function (digest, string, salt) {
  return new Promise((resolve) => {
    resolve(
      crypto
        .createHmac(digest, string)
        .update(salt || "")
        .digest("hex")
    );
  });
};
