describe('basic e2e tests', () => {
  it('should return a webpage', () => {
    cy.visit('/')
  })

  it('should display the word hidden with underscores', () => {
    cy.visit('/')
        .get('div.centered')
        .contains('_')
        .should('be.visible')

    cy.visit('/')
        .get('div.centered')
        .invoke('text')
        .should('match', /(_)+/)
  })
})
