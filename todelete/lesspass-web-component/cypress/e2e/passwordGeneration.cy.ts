it("should generate the correct password when user fill the form with the default options", () => {
  cy.visit("/");
  cy.findByLabelText("Site").type("lesspass.com");
  cy.findByLabelText("Login").type("test@lesspass.com");
  cy.findByLabelText("Master Password").type("test@lesspass.com");
  cy.findByRole("button", { name: /Generate & copy/i }).click();
  cy.findByText("hjV@\\5ULp3bIs,6B").should("be.visible");
});
