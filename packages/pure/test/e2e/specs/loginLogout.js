var assert = require("assert");

module.exports = {
  "Login logout tests": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible(".fa-sign-in")
      .click(".fa-sign-in")
      .waitForElementVisible("#baseURL")
      .assert.value("#baseURL", "https://lesspass.com")
      .setValue("#email", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#fingerprint .fa-cutlery")
      .waitForElementVisible("#fingerprint .fa-subway")
      .waitForElementVisible("#fingerprint .fa-plane")
      .waitForElementVisible("#encryptMasterPassword__btn")
      .click("#encryptMasterPassword__btn")
      .waitForElementVisible("#fingerprint .fa-university")
      .waitForElementVisible("#fingerprint .fa-btc")
      .waitForElementVisible("#fingerprint .fa-subway")
      .waitForElementVisible("#signInButton")
      .click("#signInButton")
      .waitForElementVisible("#siteField");

    browser.end();
  }
};
