var webpack = require('webpack');
var config = require('./webpack.config');

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        comments: false
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;