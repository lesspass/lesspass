var assert = require("assert");

module.exports = {
  "Login logout tests": function(browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible(".fa-sign-in", 5000)
      .click(".fa-sign-in")
      .waitForElementVisible("#baseURL", 5000)
      .assert.value("#baseURL", "https://lesspass.com")
      .setValue("#email", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#fingerprint .fa-cutlery", 5000)
      .waitForElementVisible("#fingerprint .fa-subway", 5000)
      .waitForElementVisible("#fingerprint .fa-plane", 5000)
      .waitForElementVisible("#encryptMasterPassword__btn", 5000)
      .click("#encryptMasterPassword__btn")
      .waitForElementVisible("#fingerprint .fa-university", 5000)
      .waitForElementVisible("#fingerprint .fa-btc", 5000)
      .waitForElementVisible("#fingerprint .fa-subway", 5000)
      .waitForElementVisible("#signInButton", 5000)
      .click("#signInButton")
      .waitForElementVisible("#siteField", 5000);

    browser.end();
  }
};
