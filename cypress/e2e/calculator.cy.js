describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of runnning total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '222')
  })
  
  it('should display correct results from arithmetic operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  
  it('should allow multiple operations chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '16')
  })
  
  it('should allow for a range of number types (negatives, decimals etc.)', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1997.5')
  })

  it('should provide an appropriate response to unachievable operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'You can not divide by 0')
  })

})