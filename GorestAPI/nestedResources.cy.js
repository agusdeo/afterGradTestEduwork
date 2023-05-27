describe('Testing Nested Resources Gorest API', () => {
   
//    // Membuat user post dengan menggunakan AUTH TOken yang disediakan
    it('Create user posts with Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1390/posts',

            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
             },

             body:  {
        

                "title": "Tes membuat post baru",
                "body": "Ini isinya"
            },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 201)
          
    });

    // Membuat user post tanpa menggunakan AUTH Token yang disediakan
    it('Create user posts without Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1390/posts',


             body:  {
        

                "title": "Tes membuat post baru",
                "body": "Ini isinya"
            },
            
            failOnStatusCode: false
          }).as('postWithoutAuth')

          cy.get('@postWithoutAuth').its('status').should('equal', 401)
          
    });

    // Mengambil user post dengan menggunakan AUTH Token yang disediakan
    it('Retreive user Post with Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1390/posts',

            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
             },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 200)
          
          
    });

    // Membuat user Comments dengan menggunakan AUTH Token yang disediakan
    it('Create user Comments with Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/posts/31273/comments',

            headers: {
                authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
                 },

           body : 
            {
                "post_id" : 31273,   
                "name": "Agus doo0",
                "email": "gowda_ananda@tll.test",
                "body": "ini commentnya. untuk nested resource"
                  
        },
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 201)
          
          
    });

     // Membuat user Comments tanpa menggunakan AUTH Token yang disediakan
    it('Create user comments without Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/posts/31273/comments',

                 body : {
                    "post_id" : 31273,   
                    "name": "Agus doo",
                    "email": "gowda_ananda@tll.test",
                    "body": "ini commentnya. untuk nested resource"
        },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 401)
          
          
    });

     // Mengambil user Comments dengan menggunakan AUTH Token yang disediakan
     it('Retreive user Comments with Auth', () => {
        cy.request({ 

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/31273/posts',

            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
             },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 200)
          
          
    });


    // Membuat user todos menggunakan AUTH Token yang disediakan
        it('Create user todos with Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1397/todos',

            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
             },

             body:  {
       
                "title": "Tes post Todos 1",
                "due_on": "2023-05-20T00:00:00.000+05:30",
                "status": "completed"
            },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 201)
          
    });

    // Membuat user todos tanpa menggunakan AUTH Token yang disediakan
    it('Create user todos without Auth', () => {
        cy.request({ 

            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/1397/todos',


             body:  {
       
                "title": "Tes post Todos",
                "due_on": "2023-05-20T00:00:00.000+05:30",
                "status": "completed"
            },
            
            failOnStatusCode: false
          }).as('postWithoutAuth')

          cy.get('@postWithoutAuth').its('status').should('equal', 401)
          
    });
0
    // Mengambil user todos dengan menggunakan AUTH Token yang disediakan
    it('Retreive user todos with Auth', () => {
        cy.request({ 

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/1397/todos',

            headers: {
            authorization: 'Bearer 6f4eade406c28686afb238812e9d2f64b0e98fac75a0f840bd87a10cbcf51391'
             },
            
            failOnStatusCode: false
          }).as('postWithAuth')

          cy.get('@postWithAuth').its('status').should('equal', 200)
          
          
    });
    
});