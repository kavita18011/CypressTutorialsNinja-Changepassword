import Login_po from "../../support/PageObject/tutorialninja/login_po";
import Register_po from "../../support/PageObject/tutorialninja/Register_po";
import Logout_po from "../../support/PageObject/tutorialninja/logout_po";
import changepassword_po from "../../support/PageObject/tutorialninja/changepassword_po";
import searchandaddproduct from "../../support/PageObject/tutorialninja/searchandaddproduct";


import {it} from "mocha";



describe('Validate the working of Register functionality', () => {
     const registerpo = new Register_po();

     it('test1 register with valid credential', () => {
        registerpo.EnterURL();
         registerpo.Register("kavita","chauhan","kavita1234@gm.com","9675310386","test123","test123");
       

     });
     it('test2 register with invalid credentials',()=>{
         registerpo.EnterURL();
         registerpo.Register(" ","chauhan","kavita1234.com","9675310386","test123","test123");

     });
    it('test3 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register(" "," ","kavita1234.com","9675310386","test123","test123");
       
     });
     it('test4 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register("kavita","chauhan"," "," ","test123","test123");

        
     });
     it('test5 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register(" "," "," "," "," "," ");

        
     });
     it('test6 register with invalid credentials', () => {
        registerpo.EnterURL();
        registerpo.Register("kavita","chauhan","11@kavita@g.com","9675sdfs310386","test123","test123");
        
     });
     it('test7 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register(" "," "," "," ","test123","test123");
        
     });
    it('test8 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register("kavita","chauhan"," ","9"," "," ");
        
     });
     it('test9 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register("9675310386","9675310386","1234567","1234567","2345678","2345678");
        
     });
     it('test10 register with invalid credentials', () => {
         registerpo.EnterURL();
         registerpo.Register("kavita","kavita","kavita","kavita","kavita","kavita");

        
     });
    
         });
    describe('Validate the login functionality,search product, add to cart,logout', () => {
        const loginobj = new Login_po();
        var search = new searchandaddproduct();
        var changepass = new changepassword_po();
        var logout = new Logout_po();


        it('test1 login with invalid credential', () => {

            loginobj.EnterURL();
            loginobj.login("ita1234.com","test123");

        });
        it('test2 login with invalid credential',()=>{
            loginobj.EnterURL();
            loginobj.login(" ","test123");
        });
        it('test3 login with invalid credential',()=>{
            loginobj.EnterURL();
            loginobj.login("kavita1234.com"," ");
        
    });
   
        it('test4 login with invalid credentil',()=>{
            loginobj.EnterURL();
            loginobj.login(" ","0");
        });
        it('test5 login with valid credential',()=>{
            loginobj.EnterURL();
            loginobj.login("11kavita.gdc@gmail.com","1234567890@");
            search.searchandaddproduct("HP LP3065");
            changepass.changepassword_po('Edit your account information');
            cy.wait(300);
            logout.Logout();
        });
    })
   