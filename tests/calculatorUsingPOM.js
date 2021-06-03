const homepage = require('../pages/homePage')

describe('Calculator', () => {
  it('addition test', () => {
    homepage.get('http://juliemr.github.io/protractor-demo/')
    homepage.enterFirstNumber('5')
    homepage.enterSecondNumber('7')
    homepage.clickGo()

    homepage.verifyResult('12')
    browser.sleep(5000)
  })
  it('addition test2', () => {
    homepage.get('http://juliemr.github.io/protractor-demo/')
    homepage.enterFirstNumber('5')
    homepage.enterSecondNumber('7')
    homepage.clickGo1()

    homepage.verifyResult('12')
    browser.sleep(5000)
  })
})
