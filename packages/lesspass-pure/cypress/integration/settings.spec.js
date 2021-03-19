const getLogin = () => cy.get("#login");
const getLowercase = () => cy.get("#options #lowercase__btn");
const getUppercase = () => cy.get("#options #uppercase__btn");
const getNumbers = () => cy.get("#options #numbers__btn");
const getSymbols = () => cy.get("#options #symbols__btn");
const getLength = () => cy.get("#options #passwordLength");
const getCounter = () => cy.get("#options #passwordCounter");

function editSettings() {
  getLogin()
    .clear()
    .type("New login");
  getLowercase()
    .click()
    .should("not.be.checked");
  getUppercase()
    .click()
    .should("not.be.checked");
  getNumbers()
    .click()
    .should("not.be.checked");
  getSymbols()
    .click()
    .should("not.be.checked");
  getLength()
    .clear()
    .type("5");
  getCounter()
    .clear()
    .type("2");
}

function checkSettingsEdited() {
  getLogin().should("have.value", "New login");
  getLowercase().should("not.be.checked");
  getUppercase().should("not.be.checked");
  getNumbers().should("not.be.checked");
  getSymbols().should("not.be.checked");
  getLength().should("have.value", "5");
  getCounter().should("have.value", "2");
}

describe("Settings", function() {
  it("should start with default values", () => {
    cy.visit("/#/settings");
    cy.wait(500);
    getLogin().should("have.value", "");
    getLowercase().should("be.checked");
    getUppercase().should("be.checked");
    getNumbers().should("be.checked");
    getSymbols().should("be.checked");
    getLength().should("have.value", "16");
    getCounter().should("have.value", "1");
  });

  it("should redirect to the home page when saving", () => {
    cy.visit("/#/settings");
    cy.wait(500);
    cy.get("#btn-submit-settings").click();
    cy.location().should(location => {
      expect(location.pathname).to.eq("/");
    });
  });

  it("should pass on the settings to the password generator page after save", () => {
    cy.visit("/#/settings");
    cy.wait(500);
    editSettings();
    cy.get("#btn-submit-settings").click();
    checkSettingsEdited();
  });

  it("should still show the saved settings when going back to the settings page", () => {
    cy.visit("/#/settings");
    cy.wait(500);
    editSettings();
    cy.get("#btn-submit-settings").click();
    cy.visit("/#/settings");
    cy.wait(500);
    checkSettingsEdited();
  });
});
