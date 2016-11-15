module.exports = function (config) {
    config.set({
        basePath: '..',
        frameworks: ['mocha', 'chai'],
        files: [
            'lib/lesspass.js',
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
        browsers: ['Chrome', 'Firefox'],
        singleRun: true,
        concurrency: Infinity
    })
};
