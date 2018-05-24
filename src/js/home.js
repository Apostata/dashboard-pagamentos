
export default class Teste{
    constructor(){
        //Object.assign(this, dependencies);
    }

    printTeste(){
        $('main').append('<div>Apended html!</div>');
        var elem = document.querySelector('.sidenav');
        var instance = M.Sidenav.init(elem);
    }
};