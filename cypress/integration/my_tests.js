describe('My Tests', () => {
  it('Visits our application locally', () => {
    cy.visit('http://localhost:3000')
  })

  it('Finds filter buttons', () => {
    cy.contains('Best Match')
    cy.contains('Total Stars')
  })

  it('Returns with no search results on unsuccessful search', function () {
    cy.get('input[name="search_term"]').as('searchText');
    cy.get('@searchText').type('mjdiekcndsalei');
    cy.get('[data-cy=searchSubmit]').click();
    cy.request('https://api.github.com/search/repositories?q=mjdiekcndsalei+language')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('items').to.have.lengthOf(0)
      })
    cy.contains('There are no results for that search term.')
  });

  it('Searches for the keyword Tetris', () => {
    cy.get('input[name="search_term').focus().clear();
    cy.get('input[name="search_term"]').as('searchText');
    cy.get('@searchText').type('Tetris');
    cy.get('[data-cy=searchSubmit]').click();

    cy.request('https://api.github.com/search/repositories?q=Tetris+language')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('items').and.length.be.greaterThan(0)
      })
  })

  it('Sorts our search results by Stars', () => {
    cy.get('[data-cy=sortStar]').click();
  })

  it('Filters our search results by Python language', () => {
    cy.get('input[name="language').focus().clear();
    cy.get('input[name="language"]').as('filterText');
    cy.get('@filterText').type('Python');
  })

  it('Clicks on one of our search results and opens Details Page', () => {
    cy.get('input[name="language').focus().clear();
    cy.get('input[name="language"]').as('filterText');
    cy.get('@filterText').type('Python');
    cy.contains('Cool-Programming-Challenges').click() // Click on first element containing this name
  })

  it('Exits the Repo Details screen', () => {
    cy.get('[data-cy=fadedDiv]').click('topRight');
  })

  it('Sorts our search results back to Best Match', () => {
    cy.get('[data-cy=sortBest]').click();
  })
})