it('asks for a character guess', () => {
  cy.visit('/')
      .get('div.centered')
      .get('div.guess')
      .get('span')
      .contains("What's your next guess?")
      .should('be.visible')
      .next('input[type="text"]')
})
