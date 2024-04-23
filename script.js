state: "failed",
body: () => { 
    cy.visit(baseUrl);
    // Wait for the paragraph element to be added to the DOM
    cy.get('p', { timeout: 4000 }).should('exist');
    // After waiting, check for its absence
    cy.get('p').should('not.exist');
},
displayError: "AssertionError: Timed out retrying after 4000ms: expected '<p>' not to exist in the DOM, but it was continuously found"
