var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// "__dirname"是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    entry: {
        app: "./src/main.js" //入口文件
    },
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        publicPath: "/", //指向生成文件的根目录（相对浏览器）
        filename: "[name].js" //打包后输出文件的文件名
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],        
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'inline-source-map',
    
    /**
     * webpack-dev-server 常用配置
     */
    devServer: {
        contentBase: __dirname + "/dist", //本地服务器所加载的页面所在的目录
        inline: true, //启用内联模式
        hot: true,
        historyApiFallback: true, //如果访问的页面不存在(404)时，将会被重定向到 index.html 页面
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
                test: /\.scss$/,
                use: [{
                  loader: 'style-loader'
                }, {
                  loader: 'css-loader'
                }, {
                  loader: 'sass-loader'
                }]
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
        new UglifyJSPlugin(),        
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
