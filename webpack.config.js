var webpack = require('webpack');
let path = require('path');


module.exports = {
    context: __dirname,
    entry: {
        app: './app.index.js',
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    }

};
