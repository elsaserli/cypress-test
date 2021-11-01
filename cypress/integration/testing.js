describe('testing', function() {

 it('what_it_does', function() {

    cy.viewport(1440, 821)
 
    cy.visit('https://b2cdemo.getswift.asia/')
 
    cy.get('.item-content1 > .mega-col > #\31 6356531001844780193 > .nav-anchor > span').click()
 
    cy.visit('https://b2cdemo.getswift.asia/gear/bags.html')
 
    cy.get('.item:nth-child(2) > .product-item-info:nth-child(1) > .product:nth-child(2) > .product-item-inner:nth-child(5) > .product:nth-child(2) > .actions-primary:nth-child(1) > .addtocart_position_5:nth-child(1) > form:nth-child(1) > .action:nth-child(4) > span:nth-child(1)').click()
 
    cy.get('.actions > .secondary > .action > span > span').click()
 
    cy.visit('https://b2cdemo.getswift.asia/checkout/cart/')
 
    cy.get('.cart-summary > .checkout > .item > .primary > span').click()
 
    cy.visit('https://pwa-checkout.getswift.asia/authentication?state=38TOXCsvu%2FuelcpFrw3XDhs5mC6iqP2otrtJGWY5C0496me70%2F773v0gIqgdT4%2B%2F')
 
 })

})
