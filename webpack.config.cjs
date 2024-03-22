const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        checkmatrix: "./src/checkmatrix/CheckMatrix.js",
        rating: "./src/rating/Rating.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "output management",
            template: "./template.html"
        })
    ],
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: './dist'
    },
    optimization: {
        runtimeChunk: "single"
    }
}
