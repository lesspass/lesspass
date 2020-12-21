module.exports = (config) => {
  config.set({
    basePath: "..",
    frameworks: ["mocha"],
    files: ["src/index.js", "test/**/*.js"],
    preprocessors: {
      "src/index.js": ["webpack"],
      "test/**/*.js": ["webpack"],
    },
    webpack: {},
    webpackMiddleware: {
      stats: "errors-only",
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
};
