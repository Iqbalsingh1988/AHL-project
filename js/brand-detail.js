
(function ($) {


       var swiper = new Swiper('.certified_img_slider', {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
          autoplay: true,
          loop: true,
          breakpoints: {
            1920: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            992: {
              slidesPerView: 3
            },
            320: {
              slidesPerView: 3
            }
          },
          navigation: {
            nextEl: '.next-pak',
            prevEl: '.prev-pack'
          }
    });


    var swiper = new Swiper('.stories-inspire-slider', {
          slidesPerView: 3.3,
          spaceBetween: 25,
          loop: false,
          breakpoints: {
            1920: {
              slidesPerView: 3.3
            },
            992: {
              slidesPerView: 3
            },
            500: {
              slidesPerView: 2
            },
            320: {
              slidesPerView: 1
            }
          },
          navigation: {
            nextEl: '.stories-inspire-next',
            prevEl: '.stories-inspire-prev'
          }
    });


$('.moreless-button').click(function() {
  $('.moretext').slideToggle();

  if ($(this).text().trim() === "Read more") {
    $(this).text("Read less");
  } else {
    $(this).text("Read more");
  }
});






})(jQuery);




