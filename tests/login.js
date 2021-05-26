import {short,medium,long} from '../lib/timeout'
import {desktop} from '../lib/device'

describe('Book Store Aplication Testing- Login', () => {
    
    it('Load the Website', ()=>{
        browser.url('https://demoqa.com/') 
        browser.setWindowSize(desktop[0],desktop[1])
            var runInBrowser = function(argument) { 
            argument.click();
          };

          var bookstoreapp = browser.$('#app > div > div > div.home-body > div > div:nth-child(6) > div > div.card-body > h5')
          bookstoreapp.waitForExist()
          browser.execute(runInBrowser, bookstoreapp);
          browser.pause(short)
        
    })

    
    it('Should go to the Login page', ()=> {
        browser.setWindowSize(desktop[0],desktop[1])
        var runInBrowser = function(argument) { 
            argument.click();
          };
        var bookstorespan = browser.$('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(6) > span > div > div.header-text > span')  
        var loginspan = browser.$('//*[@id="item-0"]')
        bookstorespan.waitForExist()
        loginspan.waitForExist()
        browser.execute(runInBrowser, bookstorespan);
        //browser.execute(runInBrowser, loginspan);
       // $('//*[@id="item-0"]').click()
        browser.pause(short)   
    })

    it('Shoul log with invalid credetials',()=>{
        browser.url('https://demoqa.com/login')
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        $('#userName').waitForExist()
        $('#userName').setValue('linda')
        $('#password').waitForExist()
        $('#password').setValue('linda123.')
        $('#login').waitForExist()
        $('#login').click()
        const InvalidUser =  $('#name')
        expect(InvalidUser).toHaveText('Invalid username or password!')
        browser.pause(short)
    })

    it('Shoul log with valid credetials',()=>{
        browser.url('https://demoqa.com/login')
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        $('#userName').waitForExist()
        $('#userName').setValue('LindaVillatoro')
        $('#password').waitForExist()
        $('#password').setValue('1Lindacecilia*')
        $('#login').waitForExist()
        $('#login').click()
        $('#submit').waitForExist()
        $('#submit').click()
        browser.pause(short)
    })

    it('Should Create a new User', () => { 
        browser.url('https://demoqa.com/login')
        browser.setWindowSize(desktop[0],desktop[1])
        $('#newUser').waitForExist()
        $('#newUser').click()
        expect(browser).toHaveUrl('https://demoqa.com/register')
        $('#userForm').waitForExist()
        const newUsertitle = $('h4')
        newUsertitle.waitForExist()
        expect(newUsertitle).toHaveText('Register to Book Store')
        $('#firstname').waitForExist()
        $('#firstname').setValue('Ana')
        $('#lastname').waitForExist()
        $('#lastname').setValue('Andino')
        $('#userName').waitForExist()
        $('#userName').setValue('AnaAndino')
        $('#password').waitForExist()
        $('#password').setValue('Anaandino123')
        //$('#recaptcha-anchor').click()
        $('#register').waitForExist()
        //$('#register').click()
        $('#gotologin').waitForExist()
        $('#gotologin').click()
        browser.pause(short)
    });
 

});