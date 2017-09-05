var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')

// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    entry: {
        app: "./src/main.js"
    }, //__dirname+"/src/main.js",
    output: {
        path: __dirname+"/dist",
        publicPath: "/",
        filename: "[name].js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    /**
     * webpack-dev-server 常用配置
     */
    devServer: {
        contentBase: __dirname + "/dist",
        inline: true,
        hot: true,
        historyApiFallback: true,
        port: 8080,
        noInfo: true,
        // open: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 相对于output.path 的路径
            template: path.resolve(__dirname, 'index.html'), // 绝对路径
            inject: true
        }),
        new ExtractTextPlugin("[name].css")
    ]
}