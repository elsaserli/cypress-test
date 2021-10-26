describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://b2cdemo.getswift.asia/')
    cy.visit('https://b2cdemo.getswift.asia/customer/account/login/referer/aHR0cHM6Ly9iMmNkZW1vLmdldHN3aWZ0LmFzaWEv/')

    cy.get('[name="Women"]').click();
    
  })
})