const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, './app/index.jsx'),
  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/
      },
      {
        test: /\.css?/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}