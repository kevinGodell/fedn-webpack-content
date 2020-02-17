const { resolve } = require('path');
const { ProgressPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'verbose',
  entry: {
    index: './src/client/index.js',
    settings: './src/client/settings.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [resolve(__dirname, 'src/client')],
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new ProgressPlugin(), // shows percent progress in console
    new CleanWebpackPlugin({
      dry: false, // (true) simulates removal of files
      verbose: true, // (true) logs to console
      cleanStaleWebpackAssets: true, // (true) removes unused files
      protectWebpackAssets: false // (true) preserves existing files
    }),
    new HtmlWebPackPlugin({
      hash: true, // (true) puts hash in src url for cache busting as src="index.bundle.js?c029042eb8fcb12a6f46"
      title: 'Development index', // inject title, accessed in html as <%= htmlWebpackPlugin.options.title %>
      somethingElse: 'custom property can be accessed in template', // <%= htmlWebpackPlugin.options.somethingElse %>
      inject: true, // (true|'body')|'head'|false, location of script injection
      chunks: ['index'], // select chunk(s) from entry(s)
      template: './src/client/views/index.html', // source file
      filename: 'index.html' // output file
    }),
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Development settings',
      inject: true,
      chunks: ['settings'],
      template: './src/client/views/settings.html',
      filename: 'settings.html'
    })
  ],
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};
