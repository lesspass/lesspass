var assert = require("assert");

module.exports = {
  "Password reset": function(browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible(".fa-sign-in", 5000)
      .click(".fa-sign-in")
      .waitForElementVisible("#login__forgot-password-btn", 5000)
      .click("#login__forgot-password-btn")
      .waitForElementVisible("#password-reset__reset-password-btn", 5000)
      .click("#password-reset__reset-password-btn");

    browser.getLog(function(logs) {
      logs = logs.filter(function(log) {
        return ["DEBUG", "INFO"].indexOf(log.level) === -1;
      });
      assert(
        logs.length === 0,
        "Console log error(s):\n" + JSON.stringify(logs, null, 2)
      );
    });

    browser.end();
  }
};
