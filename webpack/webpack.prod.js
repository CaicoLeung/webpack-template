const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common')
const { smart } = require('webpack-merge')
const distPath = path.join(__dirname, '..', 'dist')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = smart(webpackCommonConf, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash:8].js',
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contentHash:8].css',
      hmr: true
    })
  ],
  devtool: '#@source-map',
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({ // 压缩js代码
        cache: true, // 启用文件缓存
        parallel: true, // 使用多进程并行执行任务来提高构建效率
        sourceMap: true, // 将错误消息位置映射到模块
        terserOptions: {
          drop_console: true, // 打包时剔除所有console.log
          drop_debugger: true // 打包时剔除所有debugger
        }
      }),
      new OptimizeCssAssetsWebpackPlugin({})], // 压缩css代码
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'initial',
          minSize: 0,
          minChunks: 2
        }
      }
    }
  }
})
