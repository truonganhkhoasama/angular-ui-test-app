describe('Angular UI Test App', () => {
  it('should display the title', () => {
    cy.visit('/');
    cy.contains('Angular UI Test App').should('be.visible');
  });

  it('should display initial users', () => {
    cy.visit('/');
    cy.contains('Alice').should('be.visible');
    cy.contains('Bob').should('be.visible');
    cy.contains('Charlie').should('be.visible');
  });

  it('should add a new user', () => {
    cy.visit('/');
    cy.get('[data-testid="user-input"]').type('David');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('David').should('be.visible');
  });

  it('should handle empty user input', () => {
    cy.visit('/');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('David').should('not.exist'); //check that no new user is added
  });


  it('should clear the input field after adding a user', () => {
    cy.visit('/');
    cy.get('[data-testid="user-input"]').type('Eve');
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="user-input"]').should('have.value', '');
  });

  it('should handle special characters in user input', () => {
    cy.visit('/');
    cy.get('[data-testid="user-input"]').type('Eva-Maria!');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('Eva-Maria!').should('be.visible');
  });

  it('should handle long user input', () => {
    cy.visit('/');
    cy.get('[data-testid="user-input"]').type('ThisIsALongUsernameThatShouldTestInputLimits');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('ThisIsALongUsernameThatShouldTestInputLimits').should('be.visible');

  });

  it('should handle numbers in user input', () => {
    cy.visit('/');
    cy.get('[data-testid="user-input"]').type('User123');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('User123').should('be.visible');
  });


  it('should handle multiple user additions', () => {
    cy.visit('/');
    cy.get('[data-testid="user-input"]').type('Frank');
    cy.get('[data-testid="add-button"]').click();
    cy.get('[data-testid="user-input"]').type('Grace');
    cy.get('[data-testid="add-button"]').click();
    cy.contains('Frank').should('be.visible');
    cy.contains('Grace').should('be.visible');
  });
});