import webpack from 'webpack';
import path from 'path';
import express from 'express';
import configDevClient from "../../config/webpack-dev-client.js";

const server = express();


const PORT = process.env.PORT || 8181;

if(process.env.NODE_ENV !== "production"){
    server.use('/', express.static(__dirname + '/dist'));
    const compiler = webpack([configDevClient]);

    const webpackDevMiddleware = require('webpack-dev-middleware')(
        compiler,
        configDevClient.devServer,
    );
    
    const webpackHotMiddleware = require('webpack-hot-middleware')(
        compiler.compilers[0],
        configDevClient.devServer,
    );

    webpackDevMiddleware.invalidate();
    server.use(webpackDevMiddleware); //usar as configurações de devserver do webpack config
    server.use(webpackHotMiddleware); //usar live reload USAR SEMPRE DEPOIS DO DEV MIDDLEWARE

    server.get('/:page', function(req, res) {
        const htmlBuffer = webpackDevMiddleware.fileSystem.readFileSync(`${configDevClient.output.path}/${req.params.page}.html`)

        res.send(htmlBuffer.toString())
        //res.sendFile(path.join(__dirname, '../../dist', path.basename(req.params.page) + '.html'));
    });

    server.get('/', function(req, res) {
        const htmlBuffer = webpackDevMiddleware.fileSystem.readFileSync(`${configDevClient.output.path}/home.html`)

        res.send(htmlBuffer.toString())
        //res.sendFile(path.join(__dirname, '../../dist', path.basename(req.params.page) + '.html'));
    });

    server.listen(PORT, ()=>{
        console.log(`Servidor funcionando na porta ${PORT} ${process.env.NODE_ENV}`);
    });
}
else{
    const expressStaticGzip = require('express-static-gzip');
    server.use(
        expressStaticGzip("dist", {
                enableBrotli:true
            }
        )
    );

    server.get('/:page', function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/views/', path.basename(req.params.page) + '.html'));
    });

    server.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/views/home.html'));
    });

    server.listen(PORT, ()=>{
        console.log(`Servidor funcionando na porta ${PORT} ${process.env.NODE_ENV}`);
    });
}

