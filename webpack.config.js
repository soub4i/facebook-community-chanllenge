// Webpack uses this to work with directories
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: './src/index.js',

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },



    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' },
                { from: 'fragments', to: 'fragments' },
            ],
        })
    ]

};