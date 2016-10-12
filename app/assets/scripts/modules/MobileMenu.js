import $ from 'jquery';

class MobileMenu {
  constructor(){

    this.menuIcon = $(".site-header__menu_icon");
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu);
  }

  toggleTheMenu(){
    console.log("Yayyyyyyyyyy!");
  }
}

export default MobileMenu;
