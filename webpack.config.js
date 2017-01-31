const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader : 'babel',
                query : {
                    presets: ['es2015','react']
                },
                exclude: /node_modules/,
            }
        ],
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html',
            inject: 'body',
        })
    ]
};