describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit('http://localhost:3000/');
    // cy.url().should('contains', 'http://localhost:3000/app1');
    // cy.url().should('contains', 'http://localhost:3000/app2');
    cy.get('.inline-block').click();    
  });
});
