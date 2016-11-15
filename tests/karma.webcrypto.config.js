module.exports = function (config) {
    config.set({
        basePath: '..',
        frameworks: ['mocha', 'chai'],
        files: [
            'node_modules/unibabel/index.js',
            'node_modules/unibabel/unibabel.hex.js',
            'webcrypto.js',
            'tests/**/*.js'
        ],
        exclude: [
            'tests/node.js',
            'tests/helper.js',
            'tests/karma.config.js',
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
