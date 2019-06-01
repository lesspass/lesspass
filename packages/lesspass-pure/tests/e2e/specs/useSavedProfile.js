var assert = require("assert");

module.exports = {
  "User set saved profile": function(browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible(".fa-sign-in", 5000)
      .click(".fa-sign-in")
      .setValue("#email", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#encryptMasterPassword__btn", 5000)
      .click("#encryptMasterPassword__btn")
      .waitForElementVisible("#signInButton", 5000)
      .click("#signInButton")
      .waitForElementVisible(".fa-key", 5000)
      .click(".fa-key")
      .waitForElementVisible(".passwordProfile__meta", 5000)
      .click(".passwordProfile__meta")
      .waitForElementVisible("#siteField", 5000)
      .assert.value("#siteField", "example.org")
      .assert.value("#login", "contact@example.org");

    browser.end();
  }
};
