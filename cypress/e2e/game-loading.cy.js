describe('the game loads properly', () => {
  it('should not return an error when loading the index page', () => {
    cy.visit('/')
  })
})

describe('the word is hidden when the game starts', () => {
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
