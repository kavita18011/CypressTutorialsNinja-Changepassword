class changepassword_po{

//here we are taking one parameter that is link to edit account information 
changepassword_po(link){
    cy.xpath('//a[@title="My Account"]').click();
    cy.get('.dropdown-menu-right').contains('My Account').click();
    cy.contains(link).click();
    cy.contains('Password').click();
    cy.wait(300);
    cy.xpath('//input[@id="input-password"]').type('1234567890@');
    cy.xpath('//input[@id="input-confirm"]').type('1234567890@');
    cy.xpath('//input[@class="btn btn-primary"]').click();
    cy.wait(300);
    //here we are asserting sucessfull message after changing password 
    cy.get('.alert-success').should('have.text','Success: Your password has been successfully updated.');


}
}
export default changepassword_po;