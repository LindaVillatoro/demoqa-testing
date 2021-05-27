import {short,medium,long} from '../lib/timeout'
import {desktop} from '../lib/device'
import App from '../page-objects/pages/App'
import LoginPage from '../page-objects/pages/LoginPage'

describe('BookStore Aplication Testing -  Profile', () => {
    it('Shoul log with valid credetials',()=>{
        App.openLoginPage()
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        LoginPage.formIsVisible()
        LoginPage.fillForm('LindaVillatoro','1lindacecilia*')
        LoginPage.submitLoginForm()
        //LoginPage.logoutForm()
        browser.pause(short)
    })

    it('Should search your books profile', () => {
        $('#userName-value').waitForExist()
        $('#searchBox').waitForExist()
        $('#searchBox').setValue('Git Pocket Guide')
        browser.keys('Enter')
        $('#delete-record-undefined').waitForExist()
        $('#delete-record-undefined').click()
        $('#gotoStore').waitForExist()
        $('#submit').waitForExist()
    });
    
});