var assert = require("assert");

module.exports = {
  "Password generation tests": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("#site")
      .setValue("#site", "lesspass.com")
      .setValue("#login", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#fingerprint .fa-cutlery")
      .waitForElementVisible("#fingerprint .fa-subway")
      .waitForElementVisible("#fingerprint .fa-plane")
      .waitForElementVisible("#generatePassword__btn")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
      .assert.value('#generated-password', 'hjV@\\5ULp3bIs,6B');

    browser.end();
  }
};
