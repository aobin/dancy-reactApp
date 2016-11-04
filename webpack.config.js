/**
 * Created by t on 10/11/2016.
 */
var config = {
    entry: {
        app: "./src/gnbapp.js",
        gnbcomponents: "./src/gnbcomponents.js",
        react_app: "./src/index.js"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        },
            // Font Definitions
         {
             test: /\.svg$/,
             loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
         },
         {
             test: /\.woff$/,
             loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
         },
         {
             test: /\.woff2$/,
             loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
         },
         {
             test: /\.[ot]tf$/,
             loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
         },
         {
             test: /\.eot$/,
             loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
         }]
    }
};

module.exports = config;