/// <reference types="cypress" />

describe('Testing gorest API', () => {

    it('Validate GET of Gorest API', () => {
        cy.request('https://gorest.co.in/public/v2/users/1397').as('get')
        cy.get('@get').its('body').should('contain' ,{ id :1397})
    });

    it('Validate POST of Gorest API with Auth Token', () => {

        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',

            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
             },

             body: {
                "name": "ini tes",
                "email": "r1@aBDcxllll",
                "gender": "female",
                "status": "inactive"
            },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 201)

    })

    it('Validate POST of Gorest API without Auth Token', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',

    
             body: {
                "name": "ini tes",
                "email": "r1@aBC",
                "gender": "female",
                "status": "inactive"
            },
            
            failOnStatusCode: false
          }).as('postWithoutAuth')

          cy.get('@postWithoutAuth').its('body').should('contain', {message: "Authentication failed"})
        })

    it('Validate PUT of Gorest API with auth token', () => {
        cy.request({ 
            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
        },
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/1397',
            failOnStatusCode: false
          }).as('putWithAuth'),
        cy.get('@putWithAuth').its('body').should('contain' ,{ id :1397})
    });

    it('Validate PUT of Gorest API without auth token', () => {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/1397',
            failOnStatusCode: false
          }).as('putWithoutAuth')
        cy.get('@putWithoutAuth').its('status').should('equal' ,401)
        cy.get('@putWithoutAuth').its('body').should('contain', {message: "Authentication failed"})
    });

    // it('Validate DELETE of Gorest API with token', () => {
    //     cy.request({ 
    //         headers: {
    //         authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
    //     },

    //         method: 'DELETE',
    //         url: 'https://gorest.co.in/public/v2/users/1397',
    //         failOnStatusCode: false
    //       }).as('deleteWithAuth'),{}
    //     cy.get('@deleteWithAuth').its('status').should('equal' ,204)
    // });

    // it('Validate DELETE of Gorest API without token', () => {
    //     cy.request({ 
    //         method: 'DELETE',
    //         url: 'https://gorest.co.in/public/v2/users/1397',
    //         failOnStatusCode: false
    //       }).as('deleteWithoutAuth'),{}
    //     cy.get('@deleteWithoutAuth').its('status').should('equal' ,401)
    // });

});