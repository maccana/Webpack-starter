const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  module: {
    loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader!sass")}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter'
    }),
    new ExtractTextPlugin("style.css", {allChunks: false} )

  ]
};