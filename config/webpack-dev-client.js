const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin =  require('html-webpack-plugin');
const glob = require('glob');
const entries = glob.sync('./src/pages/*.js');
const entry = {};

entry['materialize'] = './src/css/sass/materialize.scss';

for (const singleEntry of entries){
    const chunkName = singleEntry.match(/.*pages\/+(.*)+.*.js/)[1];
    entry[chunkName] = singleEntry;
}

const webpackConfig = {
    name: "client",
    entry,

    mode: "development",

    output:{
        filename: "[name]-bundle.js",
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/"
    },

    devServer: {
        contentBase: path.resolve('static'),
        publicPath: '/',
        overlay: true,
        stats:{
            colors: true
        }
    },

    devtool: "source-map",

    module:{
        rules:[
            {//loaders para javascript
                test: /\.js$/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },

            { 
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",    
                    use:[{
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize:true
                        }
                    }, //css para js
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", //transpila sass para css
                        options: {
                            sourceMap:true,
                        }
                    }]
                })
            },

            { //loader para as imagens
                test: /\.(jpg|gif|png)$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            name:"images/[name]-[hash:8].[ext]"
                        }
                    }
                ]

            },

            { //loader para as fontes
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            name:"[name].[ext]",
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },

           {
                test: /\.html$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      name: "[name].[ext]"
                    }
                  },
                  { loader: "extract-loader" },
                  {
                    loader: "html-loader",
                    options: {
                      attrs: ["img:src"]
                    }
                  }
                ]
            }
        ]
    },

    plugins:[
        new ExtractTextPlugin("[name].css"),
                
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        /*new HTMLWebpackPlugin({
            template:   'src/index.html',
            inject: true,
        })*/
    ]
};

module.exports = webpackConfig;