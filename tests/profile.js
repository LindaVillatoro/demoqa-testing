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
        browser.pause(short)
        LoginPage.submitLoginForm()
        //LoginPage.logoutForm()
        browser.pause(short)
    })

    it('Should search your books profile', () => {
        $('#userName-value').waitForExist()
        $('#searchBox').waitForExist()
        $('#searchBox').setValue('Git Pocket Guide')
        browser.keys('Enter')
        //$('#gotoStore').waitForExist()
        $('#submit').waitForExist()
    });
    
    it('Should delete a book and add it again', () => {
        $('#delete-record-undefined').scrollIntoView()
        $('#delete-record-undefined').click()
        $('.modal-footer').waitForExist()
        $('#closeSmallModal-ok').scrollIntoView()
        $('#closeSmallModal-ok').click()
        
        /*var bookstore = browser.$('/html/body/div/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[2]/span')
        bookstore.scrollIntoView()
        bookstore.waitForExist() 
        bookstore.click()
        browser.pause(short)*/
        $('#gotoStore').scrollIntoView()
        $('#gotoStore').click()
        $('#searchBox').waitForExist()
        $('#searchBox').setValue('Git Pocket Guide')
        browser.keys('Enter')
        $('.rt-td').click()
        $('.action-buttons').waitForExist()
        const title = $('.mr-2 > a')
        expect(title).toHaveText('Git Pocket Guide')
        //To work with text links
        $('*=Git Pocket Guide').click()
        const addToCollection = $('//*[@id="addNewRecordButton"]')
        addToCollection.scrollIntoView()
        browser.pause(short)
        addToCollection.click() 
       
    });
});