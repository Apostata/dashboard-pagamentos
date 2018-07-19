const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const glob = require('glob');
const entries = glob.sync('./src/pages/*.js');
const entry = {};
let htmlEntries = [];

entry['materialize'] = './src/css/sass/materialize.scss';

for (const singleEntry of entries){
    const chunkName = singleEntry.match(/.*pages\/+(.*)+.*.js/)[1];
    if(chunkName !== "pages"){
        entry[chunkName] = [];
        entry[chunkName].push(singleEntry);
    }
};

const webpackConfig = {
    name: "client",
    entry,

    mode: "production",

    output:{
        filename: "js/[name]-bundle.js",
        chunkFilename: "js/[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },

    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true, //live reoald
        stats:{
            colors: true
        }
    },

    optimization:{
        splitChunks:{
            chunks: "all",
            automaticNameDelimiter: "-"
        }
    },

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
            }
        ]
    },

    plugins:[
        new OptimizeCssAssetsPlugin({
            assetsNameRegExp:/\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions:{
                discardComments:{ removeAll: true}
            },
            canPrint: true
        }),
        new ExtractTextPlugin("./css/[name].css"),
                
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        
        new MinifyPlugin(),
        new CompressionPlugin({
            algorithm: "gzip"
        }),
    ]
};

module.exports = webpackConfig;