export default class Sidebar{
    constructor(props){
        this.element = document.querySelector('.sidenav');
        this.sidebarConfig = M.Sidenav.defaults;
        this.SidebarInstance;
    }

    initilize(){
        M.Sidenav.defaults.onCloseEnd = this.onCloseSidebar;
        M.Sidenav.defaults.onOpenEnd =  this.onOpenSidebar;
        M.Sidenav.init(this.element);
        this.SidebarInstance = M.Sidenav.getInstance(this.element);
        this.toggleOpen()
    }

    onOpenSidebar(){
        $(document.body).removeClass('closed');
        $(document.body).addClass('opened');
    }

    onCloseSidebar(){
        $(document.body).removeClass('opened');
        $(document.body).addClass('closed');
    }

    toggleOpen(){
        $(document.body).on('click', '.sidenav-trigger', ()=>{
            if($(document.body).hasClass('opened')){
                this.SidebarInstance.close();
            }
        });
    }
};