import Pages from './pages';

import '../css/home.scss';
import '../hbs/home.hbs';
import materialize from 'materialize-css';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Home extends Pages{
    constructor(){
        super();
    }
}
var home = new Home();
home.initilize();





    




