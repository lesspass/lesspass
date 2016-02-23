var webpack = require('webpack');
var OfflinePlugin = require('offline-plugin');

module.exports = {
    context: __dirname + "/app",
    entry: ["./main.js"],
    output: {
        path: __dirname + "/dist",
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.json$/, loader: 'json'},
            {test: /\.(png|jpg|gif)$/, loader: 'url', query: {limit: 11000, name: '[name].[ext]?[hash]'}},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, comments: false}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new OfflinePlugin({
            caches: 'all',
            scope: '/dist/',
            updateStrategy: 'all',
            ServiceWorker: { output: 'sw.js'},
            AppCache: false
        })
    ])
}