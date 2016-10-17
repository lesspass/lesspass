var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/main.js',
        lesspass: './src/lesspass.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, 'node_modules')],
        alias: {
            src: path.resolve(__dirname, './src'),
            jquery: 'jquery/src/jquery'
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader?name=[name].[ext]',},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=8192&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=8192&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=8192&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=8192&mimetype=image/svg+xml"},
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
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
        new webpack.optimize.OccurrenceOrderPlugin(),
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

