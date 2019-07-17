describe("LessPass", function() {
  it("successfully loads", function() {
    cy.visit("/");
  });
  it("should focus site field", function() {
    cy.visit("/");
    cy.focused()
    .should('have.id', 'siteField')
  });
});
