const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/lesspass'
  ],
  output: {
    path: __dirname,
    filename: 'dist/lesspass.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({output: {comments: false}})
  ]
};
