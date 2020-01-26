"use strict";

const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'app/App.jsx'),
    output: {
        path: path.resolve(__dirname, 'app/build'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 1337
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
};