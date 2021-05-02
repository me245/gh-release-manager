describe('Main', () => {
  it('should display header text', () => {
    cy.visit('/');
    cy.contains('p', "Hello Vite + React!");
  });
});