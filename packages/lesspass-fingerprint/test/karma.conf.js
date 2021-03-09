module.exports = (config) => {
  config.set({
    basePath: "..",
    frameworks: ["mocha", "browserify"],
    plugins: ["karma-mocha", "karma-browserify", "karma-chrome-launcher"],
    files: ["src/index.js", "test/**/*.js"],
    preprocessors: {
      "src/index.js": ["browserify"],
      "test/**/*.js": ["browserify"],
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
};
