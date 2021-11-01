describe('testing', function() {

    it('what_it_does', function() {
        cy.visit('https://b2cdemo.getswift.asia/');
        cy.url().should('contains', 'Sign In');
        cy.get('#username').click();
        cy.get('#username').type('demo@icube.us');
        cy.get('.field:nth-child(3) #pass').type('Password123');
        cy.get('.primary:nth-child(1) > #send2').click();
        cy.get('.block-content:nth-child(2) > #login-form').submit();
        cy.url().should('contains', 'https://b2cdemo.getswift.asia/');
        cy.url().should('contains', 'https://b2cdemo.getswift.asia/');

    })

})