(function ($) {
  
        
    if ($(window).width() > "992") {
        $(".main_ul").on("mouseenter", function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            $(".main_ul .service_menu_left > ul > li:first-child").addClass("active_item");
        });

        
        $(".main_ul .service_menu_left > ul > li").mouseenter(function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            $(this).siblings().removeClass("active_item");
            $(this).addClass("active_item");
        });
        $(".main_ul .service_menu_left > ul > li").mouseleave(function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            $(this).removeClass("active_item");
            $(".main_ul .service_menu_left > ul > li:first-child").addClass("active_item");
        });
    }




    $(".mobile_menu_toggle").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".right_menu").slideToggle();
        $(this).toggleClass('active');
      });



      
      $('.menu_arrow').click(function() {
          $(this).parent('.menu_dropdown').toggleClass('active');
          $(this).parent().siblings().removeClass('active')
      });



      $('.menu_arrow').click(function() {
        $(this).parent('.service_menu_left li').toggleClass('active');
        $(this).parent().siblings().removeClass('active')
      });



      if ($('.board_slider').length) {
        $('.board_slider').slick({
            slidesToShow: 4.5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".prev-btn1").click(function () {
            $(".board_slider").slick("slickPrev");
        });

        $(".next-btn1").click(function () {
            $(".board_slider").slick("slickNext");
        });
        $(".prev-btn1").addClass("slick-disabled");
        $(".board_slider").on("afterChange", function () {
            if ($(".board_mamber .slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn1").addClass("slick-disabled");
            } else {
                $(".prev-btn1").removeClass("slick-disabled");
            }
            if ($(".board_mamber .slick-next").hasClass("slick-disabled")) {
                $(".next-btn1").addClass("slick-disabled");
            } else {
                $(".next-btn1").removeClass("slick-disabled");
            }
        });
    };

    
    //  video home banner
    if ($('#myVideo').length) {
    $('#playPauseBtn').on('click', function () {
        var video = $('#myVideo').get(0); // get DOM element from jQuery object
        if (video.paused) {
          video.play();
          $('.pause_btn').show();
          $('.play_btn').hide();
        } else {
          video.pause();
          $('.pause_btn').hide();
          $('.play_btn').show();
        }
      });

    }


 //  video home banner mute unmute

    if ($('#myVideo').length) {
        $('#toggleMute').on('click', function () {
          var video = $('#myVideo').get(0); // get DOM element from jQuery object
      
          if (video.muted) {
            video.muted = false; // unmute
            $('.unmute_btn').show();
            $('.mute_btn').hide();
          } else {
            video.muted = true; // mute
            $('.unmute_btn').hide();
            $('.mute_btn').show();
          }
        });
      }
 



      if ($('.slider_banner').length) {
        $('.slider_banner').slick({
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,
            arrows: false,
            swipe: false,
            slidesToShow: 5,
            cssEase: 'linear',
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1.5,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    




    if ($('.trested_brand_slider').length) {
        $('.trested_brand_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".prev-btn").click(function () {
            $(".trested_brand_slider").slick("slickPrev");
        });

        $(".next-btn").click(function () {
            $(".trested_brand_slider").slick("slickNext");
        });
        $(".prev-btn").addClass("slick-disabled");
        $(".trested_brand_slider").on("afterChange", function () {
            if ($(".trasted_brands .slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn").addClass("slick-disabled");
            } else {
                $(".prev-btn").removeClass("slick-disabled");
            }
            if ($(".trasted_brands .slick-next").hasClass("slick-disabled")) {
                $(".next-btn").addClass("slick-disabled");
            } else {
                $(".next-btn").removeClass("slick-disabled");
            }
        });
    };














    if ($('.longer_life_slider').length) {
        $('.longer_life_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".prev-btn").click(function () {
            $(".longer_life_slider").slick("slickPrev");
        });

        $(".next-btn").click(function () {
            $(".longer_life_slider").slick("slickNext");
        });
        $(".prev-btn").addClass("slick-disabled");
        $(".longer_life_slider").on("afterChange", function () {
            if ($(".longer_life_main .slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn").addClass("slick-disabled");
            } else {
                $(".prev-btn").removeClass("slick-disabled");
            }
            if ($(".longer_life_main .slick-next").hasClass("slick-disabled")) {
                $(".next-btn").addClass("slick-disabled");
            } else {
                $(".next-btn").removeClass("slick-disabled");
            }
        });
    };




    if ($('.product_slider').length) {
        $('.product_slider').slick({
            slidesToShow: 4.1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".prev-btn1").click(function () {
            $(".product_slider").slick("slickPrev");
        });

        $(".next-btn1").click(function () {
            $(".product_slider").slick("slickNext");
        });
        $(".prev-btn1").addClass("slick-disabled");
        $(".product_slider").on("afterChange", function () {
            if ($(".home_product .slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn1").addClass("slick-disabled");
            } else {
                $(".prev-btn1").removeClass("slick-disabled");
            }
            if ($(".home_product .slick-next").hasClass("slick-disabled")) {
                $(".next-btn1").addClass("slick-disabled");
            } else {
                $(".next-btn1").removeClass("slick-disabled");
            }
        });
    };



    
    $('.productclick a').click(function(){
        $('.productclick a').removeClass('activelink');
        $(this).addClass('activelink');
        var tagid = $(this).data('tag');
        $('.productlist').removeClass('active').addClass('hide');
        $('#'+tagid).addClass('active').removeClass('hide');
        $('.product_slider').slick('setPosition');
    });




    
// Live young js section start
if ($('.live_young_slider').length) {
    $('.live_young_slider').slick({
        slidesToShow: 4.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".live-young-prev-btn").click(function () {
        $(".live_young_slider").slick("slickPrev");
    });

    $(".live-young-next-btn").click(function () {
        $(".live_young_slider").slick("slickNext");
    });
    $(".live-young-prev-btn").addClass("slick-disabled");
    $(".live_young_slider").on("afterChange", function () {
        if ($(".live_young_section .slick-prev").hasClass("slick-disabled")) {
            $(".live-young-prev-btn").addClass("slick-disabled");
        } else {
            $(".live-young-prev-btn").removeClass("slick-disabled");
        }
        if ($(".live_young_section .slick-next").hasClass("slick-disabled")) {
            $(".live-young-next-btn").addClass("slick-disabled");
        } else {
            $(".live-young-next-btn").removeClass("slick-disabled");
        }
    });
};
// Live young js section end

// Live young js section start
if ($('.inspired_backed_slider').length) {
    $('.inspired_backed_slider').slick({
        slidesToShow: 4.4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".inspired_backed-prev-btn").click(function () {
        $(".inspired_backed_slider").slick("slickPrev");
    });

    $(".inspired_backed-next-btn").click(function () {
        $(".inspired_backed_slider").slick("slickNext");
    });
    $(".inspired_backed-prev-btn").addClass("slick-disabled");
    $(".inspired_backed_slider").on("afterChange", function () {
        if ($(".inspired_backed_section .slick-prev").hasClass("slick-disabled")) {
            $(".inspired_backed-prev-btn").addClass("slick-disabled");
        } else {
            $(".inspired_backed-prev-btn").removeClass("slick-disabled");
        }
        if ($(".inspired_backed_section .slick-next").hasClass("slick-disabled")) {
            $(".inspired_backed-next-btn").addClass("slick-disabled");
        } else {
            $(".inspired_backed-next-btn").removeClass("slick-disabled");
        }
    });
};



$(".product_popup").click(function() {
    $(".popup_product").fadeIn(500);
    $('.main-img-slider').slick('setPosition');
    $('.thumb-nav').slick('setPosition');
  });
  $(".close").click(function() {
    $(".popup_product").fadeOut(500);
  });
  





  $('.main-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    fade:true,
    speed: 300,
    lazyLoad: 'ondemand',
    asNavFor: '.thumb-nav',
    responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots:true,
                }
            }
        ]
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
    speed:200,
    focusOnSelect: true,
    prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
    nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>'  
  });
  
 
  $('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.thumb-nav .slick-slide').removeClass('slick-current');
    $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
  });

  

// Live young js section end   


const previewContainer = document.getElementById('videoPreview');
const previewVideo = previewContainer.querySelector('video');

// Hover autoplay
previewContainer.addEventListener('mouseenter', () => {
  previewVideo.play();
});

previewContainer.addEventListener('mouseleave', () => {
  previewVideo.pause();
  previewVideo.currentTime = 0;
});

// Modal logic
const videoContainers = document.querySelectorAll('.video-container');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModalBtn = document.getElementById('closeModal');

videoContainers.forEach(container => {
  const previewVideo = container.querySelector('video');
  const fullVideoSrc = container.getAttribute('data-full');

  // Hover autoplay
  container.addEventListener('mouseenter', () => {
    previewVideo.play();
  });

  container.addEventListener('mouseleave', () => {
    previewVideo.pause();
    previewVideo.currentTime = 0;
  });

  // Click to open modal
  container.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalVideo.src = fullVideoSrc;
    modalVideo.currentTime = 0;
    modalVideo.play();
  });
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = "";
});

// Close when clicking outside video
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = "";
  }
});










// accordion section home page 
document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function (e) {
        // Ignore clicks coming from inside .accordion-content
        if (e.target.closest(".accordion-content")) {
          return;
        }

        // Toggle logic
        accordionHeaders.forEach((otherHeader) => {
          if (otherHeader !== header) {
            otherHeader.classList.remove("active");
            otherHeader.querySelector(".accordion-content").classList.remove("active");
          }
        });

        header.classList.toggle("active");
        header.querySelector(".accordion-content").classList.toggle("active");
      });
    });
  });


$('.ingredients_tabbing a').click(function(){
    $('.ingredients_tabbing a').removeClass('activelink');
    $(this).addClass('activelink');
    var tagid = $(this).data('tag');
    $('.ingredients_rewrite_aging_row').removeClass('active').addClass('hide');
    $('#'+tagid).addClass('active').removeClass('hide');
});



})(jQuery);


