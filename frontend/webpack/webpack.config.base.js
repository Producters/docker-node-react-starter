import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

export default {
    entry: [
        '/frontend/src/js/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: '/frontend/dist/',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel!eslint',
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.styl$/,
                loader: 'style!css!postcss!stylus'
            },
            {
                test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    target: 'web',
    plugins: []
};