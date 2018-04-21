/* eslint-disable */
var webpack = require('webpack');

module.exports = {
    entry: {
      background: "./backgroundScript/index.js",
      popup: "./popupscript"
    },
    output: {
        filename: "./chromeExtension/[name].js",
    },
    module: {
        loaders: [{
            test: /\.js$|\.tag$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
