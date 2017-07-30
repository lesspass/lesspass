var assert = require("assert");

module.exports = {
  "Login logout tests": function(browser) {
    browser
      .url(browser.launch_url)
      .pause(1000)
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
      .waitForElementVisible(".passwordProfile__site")
      .click(".passwordProfile__site")
      .waitForElementVisible("#site")
      .assert.value("#site", "example.org")
      .assert.value("#login", "contact@example.org");

    browser.end();
  }
};
