$(document).ready(function () {
$('.recommended_bundles_tab a').click(function () {
  var tag = $(this).data('tag');

  // Toggle active tab
  $('.recommended_bundles_tab a').removeClass('activelink');
  $(this).addClass('activelink');

  // Toggle content visibility
  $('.recomended_bundles_inner').addClass('hide').removeClass('active');
  $('#' + tag).removeClass('hide').addClass('active');

  // Toggle headings
  if (tag === 'curate-bundle') {
    $('.heading_recommended').addClass('hide');
    $('.heading_curate').removeClass('hide');
  } else {
    $('.heading_curate').addClass('hide');
    $('.heading_recommended').removeClass('hide');
  }
});


  // FIXED selector from .faq_item to .bundle_faq_item
  $('.bundle_faq_que').click(function () {
    var parent = $(this).closest('.bundle_faq_item');
    if (parent.hasClass('active')) {
      parent.removeClass('active');
    } else {
      $('.bundle_faq_item').removeClass('active');
      parent.addClass('active');
    }
  });

  
  // JS for dynamic progress calculation
const currentPrice = 2999;
const maxPrice = 7999;
const percent = (currentPrice / maxPrice) * 100;

document.querySelector(".progress_bar_fill").style.width = `${percent}%`;



});
var swiper = new Swiper('.curate_own_bundle_slider', {
  slidesPerView: 2.8,
  spaceBetween: 60,
  loop: false,
  breakpoints: {
    1920: {
      slidesPerView: 2.8
    },
    1025: {
      slidesPerView: 2.5
    },
    992: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  },
  navigation: {
    nextEl: '.curate_own_bundle-next',
    prevEl: '.curate_own_bundle-prev'
  }
});
