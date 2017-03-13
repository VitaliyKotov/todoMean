var webpack = require('webpack');


module.exports = {
   
    entry: {
        app: './app.index.js',
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.bundle.js'
    }

};
