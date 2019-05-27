const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: { minimize: true }
            }]
        },
        {
            test: /\.css$/,
            use: [MiniCssPlugin.loader, "css-loader"]
        }]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ]
}