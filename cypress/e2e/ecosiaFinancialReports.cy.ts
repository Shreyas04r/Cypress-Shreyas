// Scenario 1: Validate Image, News links and Search text functionality
// Description: User has to navigate to the mojeek website, search for text - “How can we contribute to a greener planet?”
// and look out for this link, across all the pages from search result - https://earth.org/6-ways-to-go-greener-in-food-production/

// Validation Points:
// Open any browser
// User navigates to the website - https://www.mojeek.com/
// Click on Images link and Verify if user is navigated to this URL - Image Search | Mojeek
// Click on News and Verify if user is navigated to this URL - News - Mojeek
// In the Search text box, Input - How can we contribute to a greener planet?
// To look out for this link, across all the pages from search result - https://earth.org/6-ways-to-go-greener-in-food-production/

describe('Mojeek Navigation and Search', () => {
  it('Should navigate to the homepage', () => {
    cy.visit(' https://www.mojeek.com/');
  });

  it('Should navigate to the Images section', () => {
    cy.visit(' https://www.mojeek.com/');
    cy.get('.pre-nav > :nth-child(2) > a').click();
    cy.url().should('include', 'images');
  });

  it('Should navigate to the News section', () => {
    cy.visit('https://www.mojeek.com/');
    cy.get('.pre-nav > :nth-child(3) > a').click();
    cy.url().should('include', 'news');
  });

  it('Should perform a search and verify presence of specific link', () => {
    cy.visit('https://www.mojeek.com/');
    cy.get('.js-search-input').type('How can we contribute to a greener planet')
    cy.get('button > .svg-icon').click();
    cy.get('.pagination > ul > :nth-child(5) > a > span').click();
    cy.get('.r4 > h2 > .title').should('be.visible');
  });
});
