$ = jQuery;

$(document).ready(function(){
    "use strict";
    var swiper = new Swiper(".featured-images", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
     
     
});

const menuBar = document.querySelector('.menu-bar');
const navBar = document.querySelector('.nav-bar');

menuBar.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
});
