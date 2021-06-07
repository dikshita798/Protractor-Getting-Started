const BASE_URL = 'https://www.benjaminmoore.com/en-us'

exports.config = {
  directConnect: true,
  baseUrl: BASE_URL,
  specs: ['../tests/benjaminMoore.js'],
  capabilities: {
    browserName: 'chrome',
  },
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
  OnPrepare: function () {
    //browser.waitForAngularEnabled(true)
    browser.manage().window().maximize()
  },
}
