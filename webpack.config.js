const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "bundle":'./src/index.js',
        "detail": './src/pokemonDetail.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ["bundle"],
            filename:"index.html"
        }),
        new HtmlWebpackPlugin({
            template: './src/detail.html',
            inject: true,
            chunks: ["detail"],
            filename:"detail.html"
        }),
    ],
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};