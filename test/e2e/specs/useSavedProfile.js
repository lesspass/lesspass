var assert = require("assert");

module.exports = {
  "User set saved profile": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible(".fa-sign-in")
      .click(".fa-sign-in")
      .setValue("#email", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#encryptMasterPassword__btn")
      .click("#encryptMasterPassword__btn")
      .waitForElementVisible("#signInButton")
      .click("#signInButton")
      .waitForElementVisible(".fa-key")
      .click(".fa-key")
      .waitForElementVisible(".passwordProfile__meta")
      .click(".passwordProfile__meta")
      .waitForElementVisible("#siteField")
      .assert.value("#siteField", "example.org")
      .assert.value("#login", "contact@example.org");

    browser.end();
  }
};
