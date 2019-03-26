const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const productionMode = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/main.js",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "lesspass.min.css" }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html", inject: "body" }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new VueLoaderPlugin()
  ],
  output: {
    filename: "lesspass.min.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!copy-text-to-clipboard)/,
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          productionMode ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader"
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
