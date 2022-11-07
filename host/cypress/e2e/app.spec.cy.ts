describe("Navigation", () => {
  it("should render pages", () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="loadApp1"]').click()
    cy.url().should('contains', 'http://localhost:3000/app1');
    cy.get('[data-cy="loadApp2"]').click()
    cy.url().should('contains', 'http://localhost:3000/app2');
    cy.get('.inline-block').click();    
  });
});
