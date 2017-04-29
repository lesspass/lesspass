var v1 = require("./v1");
var v2 = require("./v2");
var createHMAC = require("create-hmac");
var Buffer = require("buffer/").Buffer;
var Promise = require("es6-promise").Promise;

module.exports = {
  generatePassword: function(site, login, masterPassword, options) {
    if (typeof options !== "undefined" && options.version === 1) {
      return v1.generatePassword(site, login, masterPassword, options);
    }
    return v2.generatePassword(site, login, masterPassword, options);
  },
  createFingerprint: function(str) {
    return new Promise(function(resolve) {
      resolve(createHMAC("sha256", new Buffer(str)).digest("hex"));
    });
  }
};
