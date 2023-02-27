const Form_URL = '/automation-practice-form'

describe('Forms', () => {
  before(() => {
    cy.visit('Form_URL')

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Practice Form')
  })

  it('should display the form title', () => {
    cy.get('.practice-form-wrapper > h5')
      .should('contain', 'Student Registration Form')
  })

  it('Fill the Text Field Details', () => {
    //Firstname
    cy.get('.mr-sm-2.form-control').eq(1)
      .type('ABC')
    //Lastname
    cy.get('.mr-sm-2.form-control').eq(2)
    .type('EFG')
    //Email
    cy.get('.mr-sm-2.form-control').eq(3)
      .type('abc@gmail.com')
    //Mobile
    cy.get('.mr-sm-2.form-control').eq(3)
      .type('9999900000')
  })

  it('Select Gender', () => {
    cy.get('custom-control.custom-radio.custom-control-inline').eq(0)
      .click()
  })

  it('Select Date from Datepicker', () => {
    cy.get('form-control.react-datepicker-ignore-onclickoutsidedateOfBirthInput').click()
    cy.get('react-datepicker__month-select')
      .select('January')
      .invoke("val")
      .should("eq", "January");
    cy.get('react-datepicker__year-select')
      .select('1992')
      .invoke("val")
      .should("eq", "1992");
    cy.get('react-datepicker__day react-datepicker__day--006').click();
  })

  it('Select Subject', () => {
    cy.get('subjects-auto-complete__placeholder.css-1wa3eu0-placeholder').click()
    cy.get('subjects-auto-complete__input > input').type('Maths')
    cy.get('#react-select-2-option-0').click()
  })

  it('Select Hobby', () => {
    cy.get('custom-control.custom-checkbox.custom-control-inline').eq(0).click()
  })

  it('Select Picture', () => {
    //To do
  })

  it('Fill Address', () => {
    //To do
  })

  it('Select State', () => {
    //To do
  })

  it('Select City', () => {
    //To do
  })

})
