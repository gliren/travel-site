import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
      this.lazyImages = $(".lazyload");
      this.siteHeader = $(".site-header");
      this.headerTriggerElement = $(".large-hero__title");
      this.btnInHeader = $(".btn--in-header");
      this.createHeaderWaypoint();
      this.pageSections = $(".page-section");
      this.headerLinks = $(".primary-nav a");
      this.createPageSectionWapoints();
      this.addSmoothScrolling();
      this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.load(function(){
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint(){
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction){

      if(direction == "down"){
          that.siteHeader.addClass("site-header--dark");
          that.btnInHeader.addClass("btn--change-color");

      } else {
          that.siteHeader.removeClass("site-header--dark");
          that.btnInHeader.removeClass("btn--change-color");
      }

      }
    })
  }

  createPageSectionWapoints(){
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element:currentPageSection,
        handler: function(direction){
          if(direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset:"20%"
        /*don't forget " ",
        default is 0: change when the top edge viewport hit the top of the section
        20%: change line is 20% down from the top of viewport
        */
      });

      new Waypoint({
        element:currentPageSection,
        handler: function(direction){
          if(direction == "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
        }
        },
        offset:"-40%" // change line is 40% up from the viewport top
      });

    });
  }
}

export default StickyHeader;
