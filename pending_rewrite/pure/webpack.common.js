const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const productionMode = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: productionMode ? "[name].[hash].css" : "[name].css",
      chunkFilename: productionMode ? "[id].[hash].css" : "[id].css"
    }),
    new CleanWebpackPlugin(["build"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    }),
    new CopyWebpackPlugin([{ context: "./src", from: "config.json", to: "" }]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.WatchIgnorePlugin(["./src/config.json"])
  ],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!copy-text-to-clipboard)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          productionMode ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ["file-loader?name=[name].[ext]"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      { test: /\.html$/, loader: "raw-loader" }
    ]
  }
};
