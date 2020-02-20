const { resolve } = require('path');
const { ProgressPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/client/index.js',
    settings: './src/client/settings.js'
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
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
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.min.js'
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
      title: 'Production index', // inject title, accessed in html as <%= htmlWebpackPlugin.options.title %>
      somethingElse: 'custom property can be accessed in template', // <%= htmlWebpackPlugin.options.somethingElse %>
      inject: true, // (true|'body')|'head'|false, location of script injection
      chunks: ['index'], // select chunk(s) from entry(s)
      template: './src/client/views/index.html', // source file
      filename: 'index.html' // output file
    }),
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Production settings',
      somethingElse: 'custom property can be accessed in template',
      inject: true,
      chunks: ['settings'],
      template: './src/client/views/settings.html',
      filename: 'settings.html'
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ]
};
