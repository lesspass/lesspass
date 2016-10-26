var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'lesspass.js'
    },
    resolve: {
        extensions: ['.json', '.js', '.vue'],
        alias: {
            jquery: 'jquery/src/jquery'
        }
    },
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, include: [path.resolve(__dirname, './src')], loader: 'babel-loader'},
            {test: /\.json/, loader: 'json-loader'},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader?name=[name].[ext]',},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader',
                    publicPath: ''
                })
            },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/font-woff'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=image/svg+xml'},
        ]
    },
    plugins: [
        new ExtractTextPlugin('lesspass.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.Tether': 'tether'
        })
    ],
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    ]);
}

