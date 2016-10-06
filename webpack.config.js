var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/main.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]',},
            {test: /\.css$/, loader: 'style!css?sourceMap'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether',
            'window.Tether': 'tether'
        })
    ]
};

// var webpack = require('webpack');
// var path = require('path');
//
// module.exports = {
//     entry: {
//         app: path.resolve(__dirname, './src/main.js')
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'bundle.js',
//         publicPath: '',
//     },
//     resolve: {
//         modulesDirectories: ['node_modules', 'src'],
//         extensions: ['.js', '.vue'],
//     },
//     module: {
//         loaders: [
//             {test: /\.vue$/, loader: 'vue-loader'},
//             {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
//             {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]',},
//             {test: /\.css$/, loader: ExtractTextPlugin.extract({loader: 'css-loader'})}
//         ]
//     },
//     devtool: '#eval-source-map',
//     plugins: [
//         new ExtractTextPlugin('styles.css'),
//         new webpack.ProvidePlugin({
//             $: 'jquery',
//             jQuery: 'jquery',
//             'window.jQuery': 'jquery',
//             'Tether': 'tether',
//             'window.Tether': 'tether'
//         })
//     ],
//     devServer: {
//         historyApiFallback: true,
//         hot: true,
//         progress: false,
//         colors: true,
//         proxy: {},
//     }
// };
//
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = false;
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'app',
//             filename: 'common.js',
//         }),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: 'production'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: true
//             },
//             output: {
//                 comments: false
//             },
//             sourceMap: false
//         })
//     ])
// }
