var assert = require("assert");

function clickAndAssertOption(browser, button, password1, password2) {
  browser
    .waitForElementVisible(button)
    .click(button)
    .click("#generatePassword__btn")
    .waitForElementVisible("#generated-password")
    .assert.value("#generated-password", password1)
    .click(button)
    .click("#generatePassword__btn")
    .waitForElementVisible("#generated-password")
    .assert.value("#generated-password", password2);
}

module.exports = {
  "Password generation tests": function(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible("#siteField")
      .setValue("#siteField", "lesspass.com")
      .setValue("#login", "test@lesspass.com")
      .setValue("#passwordField", "test@lesspass.com")
      .waitForElementVisible("#fingerprint .fa-cutlery")
      .waitForElementVisible("#fingerprint .fa-subway")
      .waitForElementVisible("#fingerprint .fa-plane")
      .waitForElementVisible("#generatePassword__btn")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B")
      .click(".showOptions__btn")
      .waitForElementVisible("#decreaseLength__btn")
      .click("#decreaseLength__btn")
      .assert.value("#passwordLength", "15")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
      .assert.value("#generated-password", "h6j@r\\ULp3!CIs6")
      .click("#increaseLength__btn")
      .assert.value("#passwordLength", "16")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
      .assert.value("#generated-password", "hjV@\\5ULp3bIs,6B")
      .waitForElementVisible("#decreaseCounter__btn")
      .click("#increaseCounter__btn")
      .assert.value("#passwordCounter", "2")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
      .assert.value("#generated-password", "#wOxv!q;URh:k82(")
      .click("#decreaseCounter__btn")
      .assert.value("#passwordCounter", "1")
      .click("#generatePassword__btn")
      .waitForElementVisible("#generated-password")
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
