import Base from '../pages/Base'

class LoginPage extends Base{

    get loginForm(){
        return $('#userForm')
    }

    get usernameInput(){
     return  $('#userName')
    }

    get passwordInput(){
        return $('#password')
    }

    get loginButton(){
        return  $('#login')
    }

    get logoutButton(){
        return $('#submit')
    }

    formIsVisible(){
        this.loginForm.waitForExist()
    }

    fillForm(username,password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitLoginForm(){
        this.loginButton.click()
    }

    logoutForm(){
       this.logoutButton.click() 
    }


}


export default new LoginPage()