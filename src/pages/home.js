import 'babel-runtime/regenerator';
import "webpack-hot-middleware/client?reload=true";

import '../html/home.html';
import materialize from 'materialize-css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default  class Home{
    constructor(){

    }

    initilize(){
        import('../js/home.js').then((Teste)=>{
            let teste = Teste.default
            let teste2 = new teste();
            teste2.printTeste()
        });
    }
   
}
var home = new Home();
home.initilize();





    




