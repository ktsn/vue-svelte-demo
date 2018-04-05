module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'svelte-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    contentBase: 'dist'
  }
}
