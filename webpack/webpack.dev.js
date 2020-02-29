const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common')
const { smart } = require('webpack-merge')
const distPath = path.join(__dirname, '..', 'dist')

module.exports = smart(webpackCommonConf, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open: false, // 自动打开浏览器
    hot: true, // 开启热替换, css代码跟新不刷新页面
    progress: true,
    contentBase: distPath,
    compress: true,
    proxy: {
      '/posts': {
        target: 'https://jsonplaceholder.typicode.com'
      }
    }
  }
})
