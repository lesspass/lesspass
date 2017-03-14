module.exports = function(config) {
  var configuration = {
    basePath: '..',
    frameworks: ['mocha', 'chai'],
    files: [
      'node_modules/big-integer/BigInteger.min.js',
      'dist/lesspass.js',
      'tests/**/*.js'
    ],
    exclude: [
      'tests/node.js',
      'tests/helper.js',
      'tests/karma.webcrypto.config.js',
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: true,
    concurrency: Infinity
  };
  config.set(configuration)
};
