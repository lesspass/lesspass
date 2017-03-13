var path = require('path');
var webpack = require('webpack');

var production = process.env.NODE_ENV === 'production' || false;

module.exports = {
  entry: './src/lesspass.js',
  output: {
    filename: production ? 'lesspass.min.js' : 'lesspass.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LessPass',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: production ? [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false
      })
    ] : []
};
