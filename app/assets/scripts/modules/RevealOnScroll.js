import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; //need to give a path

class RevealOnScroll {
  // run when page loads
  constructor(elmts, offset) {
      this.itemsToReveal = elmts;
      this.offsetPercent = offset;
      this.hideInitially();
      this.createWaypoints();
  }

 // hide
  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }


  createWaypoints(){
    var that = this;
    this.itemsToReveal.each(function(){
      var currentItem = this; // store each feature-item
        new Waypoint({
          element: currentItem,
          handler: function(){
            $(currentItem).addClass("reveal-item--is-visible");
          },
          offset: that.offsetPercent
        })
    });
  }
}

export default RevealOnScroll;
