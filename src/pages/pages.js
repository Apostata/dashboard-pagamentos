export default class Pages{
    constructor(){

    }

    initilize(){
        this.setClickLeftSidebar();
        this.setSidebars();
        this.setSelects();
    }

    setClickLeftSidebar(){
        $('.menu-btn').on('click', function(){
            if(!$('body').hasClass('sideLeftClosed')){
                $('body').addClass('sideLeftClosed');
            }
            else{
                $('body').removeClass('sideLeftClosed');
            }
        })
    }

    setSidebars(){
        var sidebarAcc = $('#account-sidebar');

        var instances = M.Sidenav.init(sidebarAcc, {
            menuWidth: 300,
            closeOnClick: true,
            edge: 'right', // <--- CHECK THIS OUT
        }); //inicia sidebar
    }

    setSelects(){
       var selects =  $('select');
       M.FormSelect.init(selects);
    }
}