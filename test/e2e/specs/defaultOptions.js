var assert = require("assert");

module.exports = {
  "Set default options": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("#site")
      .setValue("#site", "lesspass.com")
      .setValue("#login", "test@lesspass.com")
      .click(".showOptions__btn")
      .waitForElementVisible("#saveOptions__btn")
      .click("#saveOptions__btn")
      .click("#title")
      .refresh()
      .assert.value("#site", "lesspass.com")
      .assert.value("#login", "test@lesspass.com");

    browser.end();
  }
};
