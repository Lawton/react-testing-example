var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DEBUG = (process.argv.indexOf('--release') === -1);

module.exports = {
  entry: {
    app: ['babel-polyfill', 'isomorphic-fetch', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: DEBUG ? '/js/bundle.js' : '/js/bundle.[hash].js'
  },
  resolve: {extensions: ['', '.js', '.jsx']},
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify(DEBUG ? "development" : "production")
       }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: DEBUG ? false : true,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: DEBUG ? false : true
      }
    })
  ]
};
