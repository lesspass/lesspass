const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
      options: "./extension/src/main.js"
  },
  output: {
      path: path.resolve(__dirname, "extension/dist")
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
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
    ]
  }
};
