const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                ],
            }
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
