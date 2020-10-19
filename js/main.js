$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    dots: false,
    items:3,
    autoplaySpeed:1000,
    navSpeed: 1000,
    dotsSpeed:1000,
    lazyLoad:false,
    // navText: ['', ''],
    // dotsData:true,
    
    responsive: {
      0: {
        items: 1
      },
       600:{
        items: 1
  
      },
      700: {
        items: 2
      },
      992: {
        items: 3
      },
      1024:{
        items:3
      }
    },
    nav: true
    })
  });