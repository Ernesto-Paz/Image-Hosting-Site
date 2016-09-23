const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        'vendor': './public/angular-2-src/vendor.ts',
        'main': './public/angular-2-src/main.ts'
    },
    output: {
        filename: './public/webpack/[name].js'
    },
    resolve: {
        extensions: ['','.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
             {
                test: /\.html$/, 
                loader: 'html'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
    name: ['main', 'vendor']
  }),

  new HtmlWebpackPlugin({
    template: 'public/index/index-template.html',
    filename: 'public/index/index.html'
  })
    ]
}