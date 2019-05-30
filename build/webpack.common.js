const path = require('path');
const srcPath = path.join(__dirname, '..', 'src');
const distPath = path.join(__dirname, '..', 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    index: path.join(srcPath, 'index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer({
              browsers: ['ie > 8', 'Firefox >= 20', 'Safari >= 5', 'Android >= 4', 'Ios >= 6', 'last 4 version'],
              remove: true
            })],
            courceMap: true
          }
        }]
      },
      {
        test: /.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            outputPath: '/img/',
            publicPath: '../img',
            fallback: 'file-loader'
          }
        }
      },
      {
        test: /.html$/,
        use: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      chunks: ['index']
    })
  ],
  resolve: {
    alias: {
      '@s': path.resolve(__dirname, '../src')
    }
  }
};