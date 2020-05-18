const LessPassFingerprint = require("lesspass-fingerprint");
const LessPassEntropy = require("lesspass-entropy");
const LessPassRenderPassword = require("lesspass-render-password");

function generatePassword(p1, p2, p3, p4) {
  const isAPIv10 = p3 === undefined;
  if (!isAPIv10) {
    console.warn(
      "LessPass generatePassword API changed. Please update your code. Old API will be removed on version 10."
    );
  }
  const site = isAPIv10 ? p1.site : p1;
  const login = isAPIv10 ? p1.login : p2;
  const masterPassword = isAPIv10 ? p2 : p3;
  const length = isAPIv10 ? p1.length : p4.length;
  const counter = isAPIv10 ? p1.counter : p4.counter;
  const lowercase = isAPIv10 ? p1.lowercase : p4.lowercase;
  const uppercase = isAPIv10 ? p1.uppercase : p4.uppercase;
  const digits = isAPIv10 ? p1.digits : p4.numbers;
  const symbols = isAPIv10 ? p1.symbols : p4.symbols;

  return LessPassEntropy.calcEntropy(
    {
      site,
      login,
      options: {
        counter
      }
    },
    masterPassword
  ).then(entropy => {
    const options = {
      length,
      lowercase,
      uppercase,
      digits,
      symbols
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
