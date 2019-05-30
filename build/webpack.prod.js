const path = require('path');
const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common');
const { smart } = require('webpack-merge');
const srcPath = path.join(__dirname, '..', 'src');
const distPath = path.join(__dirname, '..', 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports =smart(webpackCommonConf, {
  mode: 'production',
  output: {
    filename: 'bundle.[contentHash:8].js',
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
    new CleanWebpackPlugin.default(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contentHash:8].css'
    })
  ],
  devtool: '#@source-map',
  optimization: {
    minimizer: [new TerserWebpackPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
  }
});