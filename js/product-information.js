

// Science Backed Benefits
var swiper = new Swiper(".trusted_brands_slider", {
  slidesPerView: "auto",
  loop: true,
  slidesPerGroup: 1,
  spaceBetween: 12,
  loopedSlides: document.querySelectorAll('.trusted_brands_slider .swiper-slide').length,
  navigation: {
    nextEl: ".next-btn-sci-benefit",
    prevEl: ".prev-btn-sci-benefit",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 12
    },
    768: {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 12
    }
  }
});




// longevity faq js
$('.bundle_faq_que').click(function () {
  var parent = $(this).closest('.bundle_faq_item');
  if (parent.hasClass('active')) {
    parent.removeClass('active');
  } else {
    $('.bundle_faq_item').removeClass('active');
    parent.addClass('active');
  }
});


// Science Backed Benefits section

// $('.sci_benefits_col').on('click', function () {
//   $('.sci_benefits_col').removeClass('active');
//   $(this).addClass('active');
// });

$('.sci_benefits_col').on('mouseover', function() {
  $('.sci_benefits_col').removeClass('active');
  $(this).addClass('active');
});



$(".product_popup").click(function () {
  $(".popup_product").fadeIn(500);
  $('.main-img-slider').slick('setPosition');
  $('.thumb-nav').slick('setPosition');
});
$(".close").click(function () {
  $(".popup_product").fadeOut(500);
});



$('.thumb-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: true,
  draggable: false,
  speed: 200,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
  nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>'
}); sci_benefits_col

$('.main-img-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});



