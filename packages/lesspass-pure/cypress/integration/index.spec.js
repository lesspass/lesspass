describe("LessPass", function() {
  it("successfully loads", function() {
    cy.visit("/");
    cy.wait(500);
  });
  it("should focus site field", function() {
    cy.visit("/");
    cy.wait(500);
    cy.focused().should("have.id", "site");
  });
});
