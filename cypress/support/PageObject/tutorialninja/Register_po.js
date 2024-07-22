class Register_po{

EnterURL(){
     cy.visit("https://tutorialsninja.com/demo");
}
// here we have created register method which will take all the parameters of required field.

Register(firstname,lastname,email,phone,password,confirmpassword ){
    cy.xpath('//a[@title="My Account"]').click();
        cy.xpath('//a[contains(text(),"Register")]').click();
        cy.wait(2000);
        cy.xpath('//input[@id="input-firstname"]').type(firstname);
        cy.xpath('//input[@id="input-lastname"]').type(lastname);
        cy.xpath('//input[@id="input-email"]').type(email);
        cy.xpath('//input[@id="input-telephone"]').type(phone);
        cy.xpath('//input[@id="input-password"]').type(password);
        cy.xpath('//input[@id="input-confirm"]').type(confirmpassword);
        cy.xpath('//input[@value="1" and @name="newsletter"]').check();
        cy.xpath('//input[@name="agree"]').check();
        cy.xpath('//input[@value="Continue"]').click();
}
}
export default Register_po;