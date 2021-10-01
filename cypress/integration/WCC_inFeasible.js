///<reference types='cypress' />

describe('filesuploading', ()=>
{

    it('entering schdule name' ,()=> {

        cy.visit('https://aom-streamlit-app-test.azurewebsites.net/')
        const date = (new Date()).toISOString().split('T')[0];
        cy.get('input[type="text"]').type("PenobscotFeasible_".concat(date))
        cy.get('input[type="text"]').type('{enter}')
        cy.wait(2000)
        const networkFile= 'Penobscot_inFeasible/NetworkDescription.xlsx'
        const efficienceyFile= 'Penobscot_inFeasible/GeneratorEfficiency.xlsx'
        const conversionFile= 'Penobscot_inFeasible/StorageConversion.xlsx'

        cy.get('section[class="main"]>:first-child>:first-child>:nth-child(6)>:last-child>:last-child>:first-child').attachFile(networkFile, { subjectType: 'drag-n-drop' });
        cy.get('section[class="main"]>:first-child>:first-child>:nth-child(7)>:last-child>:last-child>:first-child').attachFile(efficienceyFile, { subjectType: 'drag-n-drop' });
        cy.get('section[class="main"]>:first-child>:first-child>:nth-child(8)>:last-child>:last-child>:first-child').attachFile(conversionFile, { subjectType: 'drag-n-drop' })
        //selecting hydrology option
        cy.wait(10000)
        cy.get('div[style="overflow: visible; width: 0px;"]>:nth-child(16)>:first-child>:nth-child(2)').click()
        cy.get('div[role="listbox"]>:first-child>:nth-child(3)>:first-child').contains('Normal').click()
        cy.wait(10000)
        cy.get('div[class="Widget row-widget stButton"]>:first-child').click()
        cy.wait(170000) 
        cy.get('div[style="overflow: visible; width: 0px;"]>:nth-child(19)>:first-child').contains('Finished').should('be.visible')
        cy.get('div[style="overflow: visible; width: 0px;"]>:nth-child(23)>:first-child>:first-child>:first-child>:first-child').contains('INFEASIBLE').should('be.visible')
        cy.get('a[download^="aom_Myriver"]').click()
        
       
    })      
      })
