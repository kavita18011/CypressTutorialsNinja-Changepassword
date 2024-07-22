class Login_po{

EnterURL(){
    cy.visit('https://tutorialsninja.com/demo');


}   
// here we are creating login method which will take two parameters username,password
login(username,password){
      cy.xpath('//a[@title="My Account"]').click();
      cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
      cy.xpath('//input[@id="input-email"]').type(username);
      cy.xpath('//input[@id="input-password"]').type(password);
      cy.xpath('//input[@value="Login"]').click();
}

}

export default Login_po;