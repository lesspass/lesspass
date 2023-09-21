module.exports = {
  css: {
    extract: {
      filename: "lesspass.min.css"
    }
  },
  configureWebpack: {
    output: {
      filename: "lesspass.min.js"
    },
    optimization: {
      splitChunks: false
    }
  },
  chainWebpack: config => config.resolve.symlinks(false)
};
