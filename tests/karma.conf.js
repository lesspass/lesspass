module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['mocha', 'chai'],
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE,
    singleRun: false,
    autoWatch: true,
    browsers: ['Firefox', 'Chrome'],
    concurrency: Infinity
  });
};
