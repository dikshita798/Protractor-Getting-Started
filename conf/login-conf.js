const BASE_URL =
  'http://www.way2automation.com/angularjs-protractor/registeration/#/login'

exports.config = {
  directConnect: true,
  baseUrl: BASE_URL,
  specs: ['../tests/loginPageSpec.js'],
  capabilities: {
    browserName: 'chrome',
  },
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
  onPrepare: function () {
    browser.waitForAngularEnabled(true)
    browser.driver.manage().window().maximize()
  },
  onComplete: function () {
    let browserName, browserVersion, platform
    let capsPromise = browser.getCapabilities()
    capsPromise.then(function (caps) {
      browserName = caps.get('browserName')
      browserVersion = caps.get('version')
      platform = caps.get('platform')
    })
  },
}
