var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter')

var reporter = new HtmlScreenshotReporter({
  dest: 'targets/screenshots',
  filename: 'my-report.html',
})

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculatorUsingPOM.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve)
    })
  },

  // Assign the test reporter to each running instance (using protractor jasmine screenshot reporter)
  // onPrepare: function () {
  //   jasmine.getEnv().addReporter(reporter)
  // },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode))
    })
  },

  //using jasmine allure reporter
  // onPrepare: function () {
  //   var AllureReporter = require('jasmine-allure-reporter')
  //   jasmine.getEnv().addReporter(
  //     new AllureReporter({
  //       resultsDir: 'allure-results',
  //     })
  //   )
  // },
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter')
    jasmine.getEnv().addReporter(new AllureReporter())
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          'Screenshot',
          function () {
            return new Buffer.from(png, 'base64')
          },
          'image/png'
        )()
        done()
      })
    })
  },
}
