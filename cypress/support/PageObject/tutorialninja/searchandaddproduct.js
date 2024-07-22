class searchandaddproduct{

// here we have created method which will take one parameter that is name of product 
// after that we will search product and create order
searchandaddproduct(product){
    cy.get('[name="search"]').type(product);
    cy.get('.col-sm-5 button').click();
    cy.contains('Add to Cart').click();
    cy.wait(500);
    cy.get('[name="quantity"]').clear();
    cy.get('[name="quantity"]').type(1);
    cy.contains('Add to Cart').click();
    cy.wait(1000);
    //here we are asserting sucessfully addition of product in cart 
    cy.get('.alert-success').should('have.text',"Success: You have added "+product+" to your shopping cart!×");
    cy.contains('shopping cart').click();
    cy.wait(2000);
    cy.get('.clearfix').contains('Checkout').click();
    cy.wait(2000);
    cy.get('[id ="button-payment-address"]').click();
    cy.wait(2000);
    cy.get('[id="button-shipping-address"]').click();
    cy.wait(2000);
    cy.get('[id="button-shipping-method"]').click();
    cy.wait(300);
    cy.get('[type="checkbox"]').check();
    cy.get('[id="button-payment-method"]').click();
    cy.get('[id="button-confirm"]').click();
    cy.wait(300);
    //here we are asserting sucessfull order creation message .
    cy.get('#content p').eq(0).should('have.text','Your order has been successfully processed!');
    cy.contains('my account').click();
    
}
}
export default searchandaddproduct;