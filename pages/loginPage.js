'use strict'

const { element } = require('protractor')

by.addLocator(
  'paraTextSimple',
  function (paraText, opt_parentElement, opt_rootSelector) {
    // This function will be serialized as a string and will execute in the
    // browser. The first argument is the text for the button. The second
    // argument is the parent element, if any.
    var using = opt_parentElement || document,
      paras = using.querySelectorAll('p')

    // Return an array of buttons with the text.
    return Array.prototype.filter.call(paras, function (para) {
      return para.textContent === paraText
    })
  }
)
by.addLocator(
  'buttonTextSimple',
  function (buttonText, opt_parentElement, opt_rootSelector) {
    // This function will be serialized as a string and will execute in the
    // browser. The first argument is the text for the button. The second
    // argument is the parent element, if any.
    var using = opt_parentElement || document,
      buttons = using.querySelectorAll('button')

    // Return an array of buttons with the text.
    return Array.prototype.filter.call(buttons, function (button) {
      return button.textContent === buttonText
    })
  }
)

class LoginPage {
  constructor() {
    this.userId = element(by.name('username'))
    this.password = element(by.id('password'))
    this.description = element(by.id('formly_1_input_username_0'))
    this.loginBtn = element(by.css('.btn.btn-danger'))
    //this.loginBtn = element(by.buttonTextSimple('Login'))
  }

  async visit() {
    await browser.get(
      'http://www.way2automation.com/angularjs-protractor/registeration/#/login'
    )
  }

  async setUserId(name) {
    await this.userId.sendKeys(name)
  }

  async setPassword(pwd) {
    await this.password.sendKeys(pwd)
  }

  async setDescription(desc) {
    await this.description.sendKeys(desc)
  }

  async clickOnLoginButton() {
    await this.loginBtn.click()
  }

  async login(username, password, description) {
    await this.setUserId(username)
    await this.setPassword(password)
    await this.setDescription(description)
    await this.clickOnLoginButton()
  }

  async getLoginPageText() {
    //return await element(by.paraTextSimple("You're logged in!!")).getText()
    return await element(by.css('p.ng-scope')).getText()
  }
}

module.exports = new LoginPage()
