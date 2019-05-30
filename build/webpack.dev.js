  const path = require('path');
  const webpack = require('webpack');
  const webpackCommonConf = require('./webpack.common');
  const { smart } = require('webpack-merge');
  const srcPath = path.join(__dirname, '..', 'src');
  const distPath = path.join(__dirname, '..', 'dist');

  module.exports = smart(webpackCommonConf, {
    mode: 'development',
    plugins: [
      new webpack.DefinePlugin({
        ENV: JSON.stringify('development')
      })
    ],
    devServer: {
      port: 3000,
      progress: true,
      contentBase: distPath,
      compress: true,
      proxy: {
        '/posts': {
          target: 'https://jsonplaceholder.typicode.com',
        }
      }
    }
  });