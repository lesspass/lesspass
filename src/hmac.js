var crypto = require("crypto");

module.exports = function(digest, string, salt) {
  return new Promise(function(resolve) {
    var hmac = crypto.createHmac(digest, string);
    resolve(hmac.update(salt || "").digest("hex"));
  });
};
