var webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'app.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['css', 'sass']
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}