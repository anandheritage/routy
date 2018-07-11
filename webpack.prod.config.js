/* eslint-disable */
var webpack = require("webpack");

module.exports = {
    entry: {
        background: "./backgroundScript/index.js"
    },
    output: {
        filename: "./chromeExtension/[name].js",
    },
    module: {
        loaders: [
            {
                test: /\.js$|\.tag$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
