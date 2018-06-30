var assert = require("assert");

module.exports = {
  "Password generation key press non regression test #266": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("#siteField")
      .setValue("#siteField", "lesspass.com")
      .setValue("#login", "test@lesspass.com")
      .setValue("#passwordField", ["test@lesspass.com", browser.Keys.ENTER])
      .waitForElementVisible("#generated-password")
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B");

    browser.end();
  }
};
