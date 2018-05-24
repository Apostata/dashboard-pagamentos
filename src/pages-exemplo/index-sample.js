import 'babel-register';
import 'babel-runtime/regenerator';
import "webpack-hot-middleware/client?reload=true";

import '../hbs/index.hbs';

import axios from 'axios';
import materialize from 'materialize-css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


$(document).ready(() => {
    $('.sidenav-trigger').on('click', ()=>{
        import('../js/home.js').then((Teste)=>{
            let teste = Teste.default
            let teste2 = new teste();
            teste2.printTeste()
        });
    });
})

    




