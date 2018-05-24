import 'babel-register';
import 'babel-runtime/regenerator';
import "webpack-hot-middleware/client?reload=true";

import '../html/teste.html';
import materialize from 'materialize-css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


var teste = new Teste();
teste.printTeste();