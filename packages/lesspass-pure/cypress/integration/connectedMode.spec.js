describe("Connected Mode", function() {
  it("can save a password profile on connected mode", function() {
    cy.visit("/");
    cy.wait(500);
    cy.get(".fa-sign-in").click();
    cy.get("#email").type("test@lesspass.com");
    cy.get("#passwordField").type("test@lesspass.com");
    cy.get("#fingerprint .fa-cutlery").should("be.visible");
    cy.get("#fingerprint .fa-subway").should("be.visible");
    cy.get("#fingerprint .fa-plane").should("be.visible");
    cy.get("#signInButton").click();
    cy.wait(500);
    cy.get("#siteField").type("lesspass.com");
    cy.get("#login").type("test@lesspass.com");
    cy.get("#passwordField").type("test@lesspass.com");
    cy.get("#generatePassword__btn").click();
    cy.get("#generated-password").should("have.value", "hjV@\\5ULp3bIs,6B");
    cy.get(".fa-save").should("be.visible");
    cy.get(".fa-user")
      .first()
      .click();
    cy.get("#signOutButton").should("be.visible");
    cy.get("#signOutButton").click();
    cy.get(".fa-save").should("not.exist");
  });
  it("can log in and log out", function() {
    cy.visit("/");
    cy.wait(500);
    cy.get(".fa-sign-in").click();
    cy.get("#email").type("test@lesspass.com");
    cy.get("#passwordField").type("test@lesspass.com");
    cy.wait(1000);
    cy.get("#signInButton").click();
    cy.get("#siteField").should("be.visible");
    cy.get(".fa-key").should("be.visible");
    cy.get(".fa-user")
      .first()
      .click();
    cy.get("#signOutButton").click();
    cy.get(".fa-key").should("not.exist");
  });
  it("reset password page", function() {
    cy.visit("/");
    cy.wait(500);
    cy.get(".fa-sign-in").click();
    cy.get("#login__forgot-password-btn").click();
    cy.get("#password-reset__reset-password-btn").click();
  });
  it("use saved profile", function() {
    cy.visit("/");
    cy.wait(500);
    cy.get(".fa-sign-in").click();
    cy.get("#email").type("test@lesspass.com");
    cy.get("#passwordField").type("test@lesspass.com");
    cy.wait(500);
    cy.get("#signInButton").click();
    cy.get(".fa-key").click();
    cy.get(".passwordProfile__meta")
      .first()
      .click();
    cy.get("#siteField").should("have.value", "example.org");
    cy.get("#login").should("have.value", "contact@example.org");
    cy.get(".fa-user")
      .first()
      .click();
    cy.get("#signOutButton").click();
  });
});
