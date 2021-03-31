const getLogin = () => cy.get("#login");
const getLowercase = () => cy.get("#options #lowercase__btn");
const getUppercase = () => cy.get("#options #uppercase__btn");
const getNumbers = () => cy.get("#options #numbers__btn");
const getSymbols = () => cy.get("#options #symbols__btn");
const getLength = () => cy.get("#options #passwordLength");
const getCounter = () => cy.get("#options #passwordCounter");
const getBaseURL = () => cy.get("#baseURL");
const encryptMasterPassword = () => cy.get("#encryptMasterPassword");

describe("Settings", function() {
  it("should start with default values", () => {
    cy.visit("/#/settings");
    getLogin().should("have.value", "");
    getLowercase().should("be.checked");
    getUppercase().should("be.checked");
    getNumbers().should("be.checked");
    getSymbols().should("be.checked");
    getLength().should("have.value", "16");
    getCounter().should("have.value", "1");
    getBaseURL().should("have.value", "https://api.lesspass.com");
    encryptMasterPassword().should("be.checked");
  });

  it("should redirect to the home page when saving", () => {
    cy.visit("/#/settings");
    cy.get("#btn-submit-settings").click();
    cy.location().should(location => {
      expect(location.pathname).to.eq("/");
    });
  });

  it("should update the password generator page after changing the settings", () => {
    cy.visit("/#/settings");
    getLogin()
      .clear()
      .type("New login");
    getLowercase().click();
    getUppercase().click();
    getNumbers().click();
    getSymbols().click();
    getLength()
      .clear()
      .type("5");
    getCounter()
      .clear()
      .type("2");
    cy.get("#btn-submit-settings").click();
    getLogin().should("have.value", "New login");
    getLowercase().should("not.be.checked");
    getUppercase().should("not.be.checked");
    getNumbers().should("not.be.checked");
    getSymbols().should("not.be.checked");
    getLength().should("have.value", "5");
    getCounter().should("have.value", "2");
  });

  it("should still show the saved settings when going back to the settings page", () => {
    cy.visit("/#/settings");
    getLogin()
      .clear()
      .type("New login");
    getLowercase().click();
    getUppercase().click();
    getNumbers().click();
    getSymbols().click();
    getLength()
      .clear()
      .type("5");
    getCounter()
      .clear()
      .type("2");
    getBaseURL()
      .clear()
      .type("https://api.example.org");
    encryptMasterPassword().click();
    cy.get("#btn-submit-settings").click();
    cy.visit("/#/settings");
    getLogin().should("have.value", "New login");
    getLowercase().should("not.be.checked");
    getUppercase().should("not.be.checked");
    getNumbers().should("not.be.checked");
    getSymbols().should("not.be.checked");
    getLength().should("have.value", "5");
    getCounter().should("have.value", "2");
    getBaseURL().should("have.value", "https://api.example.org");
    encryptMasterPassword().should("not.be.checked");
  });
});
