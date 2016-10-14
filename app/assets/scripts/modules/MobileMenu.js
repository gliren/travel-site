import $ from 'jquery';

class MobileMenu {
  // target html elements
  constructor(){
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  // click the icon
  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }


  toggleTheMenu(){
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    // show menu

    this.siteHeader.toggleClass("site-header--is-expanded")
    // show menu background

    this.menuIcon.toggleClass("site-header__menu-icon--close-x")
    // menu icon change to x

  }
}

export default MobileMenu;
