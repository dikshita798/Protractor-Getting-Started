const { element, browser } = require('protractor')

const homepage = function () {
  const first = element(by.model('first'))
  const second = element(by.model('second'))
  const submit = element(by.css('[ng-click="doAddition()"]'))

  this.get = function (url) {
    browser.get(url)
  }
  this.enterFirstNumber = function (firstNum) {
    first.sendKeys(firstNum)
  }

  this.enterSecondNumber = function (secondNum) {
    second.sendKeys(secondNum)
  }

  this.clickGo = function () {
    submit.click()
  }

  this.verifyResult = function (result) {
    expect(
      element(by.cssContainingText('.ng-binding', result)).getText()
    ).toEqual(result)
  }
}
module.exports = new homepage()
