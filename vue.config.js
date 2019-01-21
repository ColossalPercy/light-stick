module.exports = {
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  baseUrl: '',
  productionSourceMap: false
}
