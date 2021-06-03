const { browser, element } = require('protractor')

describe('Calculator', () => {
  it('addition test', () => {
    browser.get('http://juliemr.github.io/protractor-demo/')
    element(by.model('first')).sendKeys(1)
    element(by.model('second')).sendKeys(2)
    // Use the custom locator.
    element(by.buttonTextSimple('Go!')).click()
    expect(element(by.cssContainingText('.ng-binding', '3')).getText()).toEqual(
      '3'
    )
    browser.sleep(5000)
  })
  it('subtraction test', () => {})
})
// Add the custom locator.
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
