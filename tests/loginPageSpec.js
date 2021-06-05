'use strict'

const { browser } = require('protractor')
const loginPage = require('../pages/loginPage')

const userId = 'angular'
const password = 'password'
const description = 'Angular application testing'

describe('Login', () => {
  beforeEach(async () => {
    await browser.driver.manage().deleteAllCookies()
    await loginPage.visit()
  })

  it('Login with invalid username and password inputs', async () => {
    await loginPage.login(userId + 'demo', password + 'demo', description)
    await expect(element(by.css('div[ng-if="Auth.error"]')).getText()).toEqual(
      'Username or password is incorrect'
    )
  })

  it('Login with valid username and password inputs', async () => {
    await loginPage.login(userId, password, description)
    await browser.sleep(5000)
    await expect(loginPage.getLoginPageText()).toEqual("You're logged in!!")
  })
})
