const pbkdf2 = require("./pbkdf2");

function calcEntropy(profile, masterPassword) {
  const { site, login, options, crypto } = profile;
  const defaultOptions = { counter: 1 };
  const { counter } = options || defaultOptions;
  const salt = site + login + counter.toString(16);
  const defaultCrypto = { iterations: 100000, keylen: 32, digest: "sha256" };
  const { iterations, keylen, digest } = crypto || defaultCrypto;
  return pbkdf2(masterPassword, salt, iterations, keylen, digest);
}

function isSupported() {
  try {
    return calcEntropy(
      {
        site: "lesspass.com",
        login: "♥",
        options: {
          uppercase: true,
          lowercase: true,
          digits: true,
          symbols: true,
          length: 16,
          counter: 1
        },
        crypto: {
          method: "pbkdf2",
          iterations: 1,
          keylen: 32,
          digest: "sha256"
        }
      },
      "tHis is a g00d! password"
    ).then(entropy => {
      if (
        entropy ===
        "e99e20abab609cc4564ef137acb540de20d9b92dcc5cda58f78ba431444ef2da"
      ) {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    });
  } catch (e) {
    return Promise.resolve(false);
  }
}

module.exports = {
  isSupported,
  calcEntropy
};
