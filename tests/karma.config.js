module.exports = function (config) {
    var configuration = {
        basePath: '..',
        frameworks: ['mocha', 'chai'],
        files: [
            'node_modules/bluebird/js/browser/bluebird.core.min.js',
            'node_modules/big-integer/BigInteger.min.js',
            'node_modules/unibabel/index.js',
            'node_modules/unibabel/unibabel.hex.js',
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
    };
    if (process.env.TRAVIS) {
        configuration.browsers = ['PhantomJS'];
    }
    config.set(configuration)
};
