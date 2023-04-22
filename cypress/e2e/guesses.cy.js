describe('a character is highlighted when clicked', () => {
  it('should highlight a character with a red border when the user clicks on it', () => {
    cy.visit('/')
        .get('div.centered')
        .contains('_')
        .should('be.visible')
        .click()
        .should('have.css', 'border', '2px solid red')
        .should('have.css', 'border-radius', '5px')
  })
})
