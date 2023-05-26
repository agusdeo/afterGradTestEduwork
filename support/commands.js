// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('filledCheckout', (name, email, phone, city, address, postalCode) => {
     cy.get('.buy').click()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear().type('Agus')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear().type('agus@gmail.com')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear().type('08123456')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear().type('Jakarta')
            cy.get('textarea').clear().type('jl.pahlawan kita')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear().type('29229')
            cy.get('.cart-checkout').click()
})


Cypress.Commands.add('unfilledCheckout', (name, email, phone, city, address, postalCode) => {
     cy.get('.buy').click()
            cy.get('[data-reactid=".0.0.1.0.3.0.0.0"] > .input > input').clear().type('Agus')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear().type(' ')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.2"] > .input > input').clear().type('08123456')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.3"] > .input > input').clear().type('Jakarta')
            cy.get('textarea').clear().type('jl.pahlawan kita')
            cy.get('[data-reactid=".0.0.1.0.3.0.0.5"] > .input > input').clear().type('29229')
            cy.get('.cart-checkout').click()
})