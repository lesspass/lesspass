var v1 = require("./v1");
var v2 = require("./v2");
var hmac = require("./hmac");

module.exports = {
  generatePassword: function(site, login, masterPassword, options) {
    if (typeof options !== "undefined" && options.version === 1) {
      return v1.generatePassword(site, login, masterPassword, options);
    }
    return v2.generatePassword(site, login, masterPassword, options);
  },
  createFingerprint: function(str) {
    return hmac("sha256", str);
  }
};
