describe("Password Generation", function() {
  it("can't decrease counter under 0", function() {
    cy.visit("/");
    cy.get(".showOptions__btn")
      .first()
      .click();
    cy.get("#decreaseCounter__btn").click();
    cy.get("#decreaseCounter__btn").click();
    cy.get("#passwordCounter").should("have.value", "1");
  });
  it("should generate the appropriate password", function() {
    function clickAndAssertOption(cy, button, password1, password2) {
      cy.get(button).click();
      cy.get("#generatePassword__btn").click();
      cy.get("#generated-password").should("have.value", password1);
      cy.get(button).click();
      cy.get("#generatePassword__btn").click();
      cy.get("#generated-password").should("have.value", password2);
    }

    cy.visit("/");
    cy.get("#siteField").type("lesspass.com");
    cy.get("#login").type("test@lesspass.com");
    cy.get("#passwordField").type("test@lesspass.com");
    cy.wait(500);
    cy.get("#fingerprint .fa-cutlery").should("be.visible");
    cy.get("#fingerprint .fa-subway").should("be.visible");
    cy.get("#fingerprint .fa-plane").should("be.visible");
    cy.get("#generatePassword__btn").click();
    cy.get("#generated-password").should("have.value", "hjV@\\5ULp3bIs,6B");
    cy.get(".showOptions__btn")
      .first()
      .click();
    cy.get("#decreaseLength__btn").click();
    cy.get("#passwordLength").should("have.value", "15");
    cy.get("#increaseLength__btn").click();
    cy.get("#increaseLength__btn").click();
    cy.get("#passwordLength").should("have.value", "17");
    cy.get("#generatePassword__btn").click();
    cy.get("#generated-password").should("have.value", "hj@r\\ULp3Is62@HB~");
    cy.get("#decreaseLength__btn").click();
    cy.get("#passwordLength").should("have.value", "16");
    cy.get("#increaseCounter__btn").click();
    cy.get("#passwordCounter").should("have.value", "2");
    cy.get("#generatePassword__btn").click();
    cy.get("#generated-password").should("have.value", "#wOxv!q;URh:k82(");
    cy.get("#passwordCounter")
      .clear()
      .type("1");

    clickAndAssertOption(
      cy,
      "#lowercase__btn",
      "^>_9>+}OV?[3[_U,",
      "hjV@\\5ULp3bIs,6B"
    );
    clickAndAssertOption(
      cy,
      "#uppercase__btn",
      "^>_9>+}ov?[3[_u,",
      "hjV@\\5ULp3bIs,6B"
    );
    clickAndAssertOption(
      cy,
      "#numbers__btn",
      'jCmMpNy=T."+u^ZQ',
      "hjV@\\5ULp3bIs,6B"
    );
    clickAndAssertOption(
      cy,
      "#symbols__btn",
      "XAwlOl5mtjGSY6PA",
      "hjV@\\5ULp3bIs,6B"
    );
  });
  it("should have a min length of 5 and max length of 35", function() {
    cy.visit("/");
    cy.get(".showOptions__btn")
      .first()
      .click();
    cy.get("#passwordLength")
      .clear()
      .type("35");
    cy.get("#increaseLength__btn").click();
    cy.get("#passwordLength").should("have.value", "35");
    cy.get("#passwordLength")
      .clear()
      .type("5");
    cy.get("#decreaseLength__btn").click();
    cy.get("#passwordLength").should("have.value", "5");
  });
  it("should consider counter as string not hex value nrt_328", function() {
    cy.visit("/");
    cy.get("#siteField").type("site");
    cy.get("#login").type("login");
    cy.get("#passwordField").type("test");
    cy.get(".showOptions__btn")
      .first()
      .click();
    cy.get("#passwordCounter")
      .clear()
      .type("10");
    cy.get("#generatePassword__btn").click();
    cy.get("#generated-password").should("have.value", "XFt0F*,r619:+}[.");
  });
  it("should generate password when hit enter nrt_266", function() {
    cy.visit("/");
    cy.get("#siteField").type("lesspass.com");
    cy.get("#login").type("test@lesspass.com");
    cy.get("#passwordField")
      .type("test@lesspass.com")
      .type("{enter}");
    cy.get("#generated-password").should("have.value", "hjV@\\5ULp3bIs,6B");
  });
  it.only("should keep site field in sync nrt_441", function() {
    cy.visit("/");
    cy.get("#login").type("user");
    cy.get("#passwordField").type("password");
    cy.get("#siteField")
      .type("subdomain.domain.com")
      .type("{home}")
      .type("{rightarrow}")
      .type("{backspace}")
      .type("{downarrow}")
      .type("{downarrow}")
      .type("{enter}");
    cy.get("#generatePassword__btn").click();
    cy.get("#generated-password").should("have.value", "ZT^IK2e!t@k$9`*)");
  });
});
