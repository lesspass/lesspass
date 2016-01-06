module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'app.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },

            {
                test: /\.scss$/,
                loaders: ['css', 'sass']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }, {
                // edit this for additional asset file types
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
};
