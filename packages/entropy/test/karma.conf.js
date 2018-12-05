module.exports = function getKarmaConf(config) {
  config.set({
    basePath: "..",
    frameworks: ["browserify", "mocha"],
    files: ["src/index.js", "test/**/*.js"],
    exclude: [],
    preprocessors: {
      "**/*.js": ["browserify"]
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity
  });
};
