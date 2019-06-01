var assert = require("assert");

module.exports = {
  "Password generation key press non regression test #266": function(browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#siteField", 5000)
      .setValue("#siteField", "lesspass.com")
      .setValue("#login", "test@lesspass.com")
      .setValue("#passwordField", ["test@lesspass.com", browser.Keys.ENTER])
      .waitForElementVisible("#generated-password", 5000)
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B");

    browser.end();
  }
};
