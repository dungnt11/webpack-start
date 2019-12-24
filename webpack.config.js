const HtmlWebPackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');
module.exports = {
    // entry: './src/index.js',
    // output: {
    //     library: 'XOScroll2Top',
    //     libraryTarget: 'umd',
    //     libraryExport: 'default',
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'xo-scroll2top.js'
    // },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
          test:/\.(s*)css$/,
          use:['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: false }
              }
            ]
          }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
    ]
};