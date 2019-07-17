const LessPassFingerprint = require("lesspass-fingerprint");
const LessPassEntropy = require("lesspass-entropy");
const LessPassRenderPassword = require("lesspass-render-password");

function generatePassword(site, login, masterPassword, passwordProfile) {
  return LessPassEntropy.calcEntropy(
    {
      site,
      login,
      options: {
        counter: passwordProfile.counter
      }
    },
    masterPassword
  ).then(entropy => {
    const options = {
      length: passwordProfile.length,
      lowercase: passwordProfile.lowercase,
      uppercase: passwordProfile.uppercase,
      digits: passwordProfile.numbers,
      symbols: passwordProfile.symbols
    };
    const generatedPassword = LessPassRenderPassword.renderPassword(
      entropy,
      options
    );
    return Promise.resolve(generatedPassword);
  });
}

function createFingerprint(string) {
  return LessPassFingerprint.createHmac("sha256", string).then(hmac => {
    const fingerprint = LessPassFingerprint.createFingerprint(hmac);
    return Promise.resolve(fingerprint);
  });
}

module.exports = {
  generatePassword,
  createFingerprint
};
