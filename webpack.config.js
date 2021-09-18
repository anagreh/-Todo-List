const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode : 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
        
        },

    plugins: [
        new HtmlWebpackPlugin({
        title: 'Output Management',
        title:'development',
        }),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
};