/// <reference types="Cypress" />

import { ClickMePage } from "../page-objects/click-me"

describe('Click me dialog component tests', () => {
    const clickMePage = new ClickMePage()

    beforeEach(() => {
        clickMePage.navigate()
    })
    describe('Tests for the first button', () => {
        beforeEach(() => {            
            clickMePage.clickMe()
        })

        it('Opens the confirmation box for click me', () =>{
            clickMePage.clickMeConfirmationBox()
        })
    
        it('Shows the confirmation message after clicking yes button', () => {
            clickMePage.confirmationBoxYes()
        })
     
        it('Shows the cancel message after clicking the cancel button', () => {
                clickMePage.confirmationBoxCancel()
        })
    })

    describe('Tests for the second button', () => {
        beforeEach(() => {
            clickMePage.clickMeToo()

        })

        it('Opens the confirmation box for click me', () =>{
            clickMePage.clickMeTooConfirmationBox()
        })

        it('Shows confirmation message for yes button after clicking the second button', () =>{
            clickMePage.confirmationBoxYesBtn2()
        })

        it('Shows cancel message after clicking cancel for the second button', () =>{
            clickMePage.confirmationBoxCancelBtn2()
        })
    })

})