var assert = require("assert");

module.exports = {
  "Can save password profile": function(browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible(".fa-sign-in", 5000)
      .click(".fa-sign-in")
      .setValue("#email", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#encryptMasterPassword__btn", 5000)
      .click("#encryptMasterPassword__btn")
      .waitForElementVisible("#fingerprint .fa-university", 5000)
      .waitForElementVisible("#fingerprint .fa-btc", 5000)
      .waitForElementVisible("#fingerprint .fa-subway", 5000)
      .waitForElementVisible("#signInButton", 5000)
      .click("#signInButton")
      .waitForElementVisible("#siteField", 5000)
      .setValue("#siteField", "lesspass.com")
      .pause(100)
      .setValue("#login", "test@lesspass.com")
      .pause(100)
      .setValue("#passwordField", "test@lesspass.com")
      .pause(100)
      .waitForElementVisible("#generatePassword__btn", 5000)
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password", 5000)
      .waitForElementVisible(".fa-save", 5000);

    browser.end();
  }
};
