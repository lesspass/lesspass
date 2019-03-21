var assert = require("assert");

module.exports = {
  "Can save password profile": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible(".fa-sign-in")
      .click(".fa-sign-in")
      .setValue("#email", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#encryptMasterPassword__btn")
      .click("#encryptMasterPassword__btn")
      .waitForElementVisible("#fingerprint .fa-university")
      .waitForElementVisible("#fingerprint .fa-btc")
      .waitForElementVisible("#fingerprint .fa-subway")
      .waitForElementVisible("#signInButton")
      .click("#signInButton")
      .waitForElementVisible("#siteField")
      .setValue("#siteField", "lesspass.com")
      .pause(100)
      .setValue("#login", "test@lesspass.com")
      .pause(100)
      .setValue("#passwordField", "test@lesspass.com")
      .pause(100)
      .waitForElementVisible("#generatePassword__btn")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
      .waitForElementVisible(".fa-save");

    browser.end();
  }
};
