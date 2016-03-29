var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, 'node_modules')],
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  resolveLoader: {root: path.join(__dirname, 'node_modules'),},
  module: {
    loaders: [
      {
        test: /\.vue$/, loader: 'vue'
      },
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/
      },
      {
        test: /\.json$/, loader: 'json'
      },
      {
        test: /\.html$/, loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {limit: 10000, name: '[name].[ext]?[hash:7]'}
      }
    ]
  },
  devServer: {historyApiFallback: true, noInfo: true},
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': "jquery",
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
