import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events(){
    // click the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    //click the close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    //press any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  // esc key code is 27
  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false; // prevent clicking the link (href="#") to scroll up of the page
  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
