const WebpackMerge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = WebpackMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'verbose',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
});
