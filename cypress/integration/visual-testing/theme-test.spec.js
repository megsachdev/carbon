/* global cy,before,after */
import { environment } from '../../util'
describe('Visual Regression Testing', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Carbon',
      testName: 'Themes',
      browser: environment
    })
    cy.visit('/')
  })
  after(() => {
    cy.eyesClose()
  })

  it('themes test', () => {
    cy.get('.themes [role=combobox] [role=button]').click()
    for (let childIndex = 1; childIndex < 28; childIndex++) {
      cy.get('.themes [role=combobox] [role=button]').click()
      cy.get(`.themes [role=combobox] li:nth-child(${childIndex + 1})`).click({ force: true })
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: '.page'
      })
    }
  })
})
