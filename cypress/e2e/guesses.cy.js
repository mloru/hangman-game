it('asks for a character guess', () => {
  cy.visit('/')
      .get('div.centered')
      .get('div.guess')
      .get('div')
      .contains("What's your next guess?")
      .should('be.visible')
      .next('div')
      .get('input[type="text"]')
      .next('button[type="button"]#confirmGuess')
      .contains('Confirm')
})

describe('handles invalid characters', () => {
  it('reports an error if guess is an invalid character', () => {
    cy.visit('/')
        .get('input.guess')
        .type('1')
        .get('button[type="button"]#confirmGuess')
        .click()
        .get('input.guess')
        .should('have.css', 'border')
        .should('include', '2px solid rgb(255, 0, 0)')
  })

  it('removes the error class when the user changes the input', () => {
    cy.visit('/')
        .get('input.guess')
        .clear()
        .should('not.have.css', 'border: 2px solid rgb(255, 0, 0)')

    cy.visit('/')
        .get('input.guess')
        .type('a')
        .should('not.have.css', 'border: 2px solid rgb(255, 0, 0)')
  })
})

it('accepts valid guesses', () => {
  cy.visit('/')
      .get('div#word > span:first-of-type')
      .invoke('attr', 'x-data', '{ hidden:false }')
      .invoke('attr', 'x-data', '{ hidden:true }')
      .then(($el) => {
        let letter = $el.text()
        cy.get('input.guess')
            .type(letter)
      })
      .invoke('attr', 'x-data', '{ hidden:true }')
      .get('button[type="button"]#confirmGuess')
      .click()
      .get('div#word > span:first-of-type')
      .should('have.attr', 'x-data', '{ hidden:false }')
      // TODO: come asserire che l'innerHtml dell elemento è letter? Lo scope di letter é limitato alla closure sopra
})
