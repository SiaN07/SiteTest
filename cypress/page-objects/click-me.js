/// <reference types="Cypress" />

export class ClickMePage {

    navigate(){
        cy.visit('../modal-test/index.html')
    }

    clickMe(){
        cy.contains('Click me!').click() 
        
    }
    clickMeConfirmationBox(){
        cy.get('.confirmation-box > p').should('have.text', 'Are you sure you want to continue?')
    }

    confirmationBoxYes(){
        cy.get('.confirm').click()

        cy.get('#result').should('have.text', 'You just clicked "Yes".')
    }

    confirmationBoxCancel(){
        cy.get('.cancel').click()

        cy.get('#result').should('have.text', 'You just clicked "Cancel".')
    }

    clickMeToo(){
        cy.get('#button-2').click()

    } 
    clickMeTooConfirmationBox(){
        cy.get('.confirmation-box > p').should('have.text', 'Are you sure you want to continue - this is the message for the second button?')
    }
    
    confirmationBoxYesBtn2(){
        cy.get('.confirm').click()

        cy.get('#result').should('have.text', 'You just clicked "Yes".')
    }

    confirmationBoxCancelBtn2(){
        cy.get('.cancel').click()

        cy.get('#result').should('have.text', 'You just clicked "Cancel".')
    }
}