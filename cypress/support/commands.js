import 'cypress-file-upload';
//require('cypress-downloadfile/lib/downloadFileCommand')

/*Cypress.Commands.add('login', (email, password) => {
     cy.get('.login').click()
     cy.get('#email').type(email)
     cy.get('#passwd').type(password)
     cy.get('#SubmitLogin').click()
    })*/
    Cypress.on('window:load', function(window) { const original = window.addEventListener; window.addEventListener = function() { if (arguments && arguments[0] === 'beforeunload') { return; } return original.apply(this, arguments); }; });
//Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//cy.get("button[name='submit_search']")