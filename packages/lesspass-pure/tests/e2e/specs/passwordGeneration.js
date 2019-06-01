var assert = require("assert");

function clickAndAssertOption(browser, button, password1, password2) {
  browser
    .waitForElementVisible(button, 5000)
    .click(button)
    .click("#generatePassword__btn")
    .waitForElementVisible("#generated-password", 5000)
    .assert.value("#generated-password", password1)
    .click(button)
    .click("#generatePassword__btn")
    .waitForElementVisible("#generated-password", 5000)
    .assert.value("#generated-password", password2);
}

module.exports = {
  "Password generation tests": function(browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#siteField", 5000)
      .setValue("#siteField", "lesspass.com")
      .setValue("#login", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#fingerprint .fa-cutlery", 5000)
      .waitForElementVisible("#fingerprint .fa-subway", 5000)
      .waitForElementVisible("#fingerprint .fa-plane", 5000)
      .waitForElementVisible("#generatePassword__btn", 5000)
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password", 5000)
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B")
      .click(".showOptions__btn")
      .waitForElementVisible("#decreaseLength__btn", 5000)
      .click("#decreaseLength__btn")
      .assert.value("#passwordLength", "15")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password", 5000)
      .assert.value("#generated-password", "h6j@r\\ULp3!CIs6")
      .click("#increaseLength__btn")
      .assert.value("#passwordLength", "16")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password", 5000)
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B")
      .waitForElementVisible("#decreaseCounter__btn", 5000)
      .click("#increaseCounter__btn")
      .assert.value("#passwordCounter", "2")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password", 5000)
      .assert.value("#generated-password", "#wOxv!q;URh:k82(")
      .click("#decreaseCounter__btn")
      .assert.value("#passwordCounter", "1")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password", 5000)
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B");

    clickAndAssertOption(
      browser,
      "#lowercase__btn",
      "^>_9>+}OV?[3[_U,",
      "hjV@\\5ULp3bIs,6B"
    );
    clickAndAssertOption(
      browser,
      "#uppercase__btn",
      "^>_9>+}ov?[3[_u,",
      "hjV@\\5ULp3bIs,6B"
    );
    clickAndAssertOption(
      browser,
      "#numbers__btn",
      'jCmMpNy=T."+u^ZQ',
      "hjV@\\5ULp3bIs,6B"
    );
    clickAndAssertOption(
      browser,
      "#symbols__btn",
      "XAwlOl5mtjGSY6PA",
      "hjV@\\5ULp3bIs,6B"
    );

    browser.end();
  }
};
