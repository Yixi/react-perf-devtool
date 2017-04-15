/**
 * Created by Yixi on 14/04/2017.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        background: './src/chrome/background/index',
        content: './src/chrome/content/index',
        page: './src/chrome/content/page',
        inject: './src/chrome/content/inject',
        panel: './src/app/index'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dev/js'),
    },
    cache: true,
    devtool: 'source-map',
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader']
            },
            { // for svg
                test: /\.(svg?)(\?[a-z0-9]+)?$/,
                use: ['url-loader']
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};