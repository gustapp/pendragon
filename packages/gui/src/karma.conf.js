// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
// process.env.CHROME_BIN = '/home/gustap/github/pendragon/packages/gui/node_modules/puppeteer/.local-chromium/linux-599821';
process.env.CHROME_BIN = require('puppeteer').executablePath()
process.env.CHROME_CANARY_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-ie-launcher'),
      require('karma-firefox-launcher'),
      require('karma-spec-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
        emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        },
        // thresholds per file
        each: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        }
      },
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless', 'ChromeCanaryHeadless', 'FirefoxHeadless'],
    singleRun: true
  });
};