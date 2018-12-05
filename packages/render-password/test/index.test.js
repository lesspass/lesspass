const assert = require("assert");
const renderPassword = require("../src/index");

test("render password use remainder of long division between entropy and set of chars length as an index", () => {
  const options = {
    length: 16,
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true
  };
  assert.equal(
    "W",
    renderPassword(
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
      options
    )[0]
  );
});
test("render password use quotient as second entropy recursively", () => {
  const options = {
    length: 16,
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true
  };
  assert.equal(
    "H",
    renderPassword(
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
      options
    )[1]
  );
});
test("render password has default length of 16", () => {
  const options = {
    length: 16,
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true
  };
  const password = renderPassword(
    "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
    options
  );
  assert.equal(16, password.length);
});
test("render password can specify length", () => {
  const options = {
    length: 20,
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true
  };
  const password = renderPassword(
    "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
    options
  );
  assert.equal(20, password.length);
});
test("render password return at least one char in every characters set", () => {
  const entropy =
    "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
  const passwordProfile = {
    length: 6,
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true
  };
  const generatedPassword = renderPassword(entropy, passwordProfile);
  let passwordLength = generatedPassword.length;
  let lowercaseOk = false;
  let uppercaseOk = false;
  let digitsOk = false;
  let symbolsOk = false;
  for (passwordLength; passwordLength > 0; passwordLength -= 1) {
    if (
      "abcdefghijklmnopqrstuvwxyz".indexOf(
        generatedPassword[passwordLength - 1]
      ) !== -1
    ) {
      lowercaseOk = true;
    }
    if (
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
        generatedPassword[passwordLength - 1]
      ) !== -1
    ) {
      uppercaseOk = true;
    }
    if ("0123456789".indexOf(generatedPassword[passwordLength - 1]) !== -1) {
      digitsOk = true;
    }
    if (
      "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".indexOf(
        generatedPassword[passwordLength - 1]
      ) !== -1
    ) {
      symbolsOk = true;
    }
  }
  assert.equal(6, generatedPassword.length);
  assert(
    lowercaseOk && uppercaseOk && digitsOk && symbolsOk,
    "there is no at least one char in every characters set"
  );
});
