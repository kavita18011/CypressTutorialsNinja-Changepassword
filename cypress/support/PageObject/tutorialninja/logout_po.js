class Logout_po{


Logout(){
    cy.xpath('//a[@title="My Account"]').click();
    cy.get('.dropdown-menu-right').contains('Logout').click();
    cy.wait(200);
    // here we are asserting sucess message after logging out , eq(0) is giving the recode of (0)  index.
    cy.get('#content p').eq(0).should('have.text','You have been logged off your account. It is now safe to leave the computer.');
    cy.xpath('//a[@class="btn btn-primary"]').click();
   
    
}
}
export default Logout_po;