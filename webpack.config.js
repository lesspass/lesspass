const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'lesspass.min.js'
    },
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, include: [path.resolve(__dirname, './src')], loader: 'babel-loader'},
            {test: /\.json/, loader: 'json-loader'},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader?name=[name].[ext]'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader', publicPath: ''})},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/font-woff'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=image/svg+xml'},
        ]
    },
    plugins: [
        new ExtractTextPlugin('lesspass.min.css')
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {comments: false},
            compress: {warnings: false}
        })
    ]);
}

