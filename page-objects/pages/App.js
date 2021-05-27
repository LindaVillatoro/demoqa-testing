class App{

    openHomepage(){
        browser.url('https://demoqa.com/')
    }

    openLoginPage(){
        browser.url('https://demoqa.com/login')
    }


}

export default new App()