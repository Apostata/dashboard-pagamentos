import axios from 'axios';
export default class Teste{
    constructor(...dependencies){
        this.teste = "Profile";
    }

    printTeste(){
        var porfile = document.getElementsByClassName("main-content");
        var div  = document.createElement('div');
        div.innerHTML = 'appended html';
        profile.appendChild(div);
    }
};