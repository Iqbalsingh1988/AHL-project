(function ($) {


  $('.shaire_btn').on('click', function() {
      $('.socual_main_product').toggleClass('active');
  });



  $('.btn_click_bottom').on('click', function() {
      $('.starter_pack_pop').addClass('active');
      $('body').addClass('detail_popup_body');
  });

   $('.starter_close_part').on('click', function() {
      $('.starter_pack_pop').removeClass('active');
      $('body').removeClass('detail_popup_body');
  });





  $(".video_review_click").click(function() {
    $(".detail_review_video_popup").fadeIn(500);
    $('body').addClass('hidden_part');
  });

  $(".close").click(function() {
    $(".detail_review_video_popup").fadeOut(500);
    $('body').removeClass('hidden_part');
  });





  $(".image_review_click").click(function() {
    $(".detail_review_image_popup").fadeIn(500);
    $('body').addClass('hidden_part');
  });

  $(".close").click(function() {
    $(".detail_review_image_popup").fadeOut(500);
    $('body').removeClass('hidden_part');
  });


$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.header_main').addClass('fixed-header');
    }
    else {
        $('.header_main').removeClass('fixed-header');
    }
});



var btn = $('#price_cart_main');

$(window).scroll(function() {
  if ($(window).scrollTop() > 900) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});






     // Smooth scroll
    $('.product_all_tabing li a').on('click', function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 160
      }, 600);
    });

    // Active link on scroll

    $(window).on('scroll', function () {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      $('.scroll_part').each(function () {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();

        // Check for partial visibility
        if (scrollTop + 120 >= sectionTop - sectionHeight / 3 && scrollTop < sectionTop + sectionHeight) {
          const id = $(this).attr('id');
          $('.product_all_tabing li a').removeClass('active');
          $(`.product_all_tabing li a[href="#${id}"]`).addClass('active');
        }
      });
    });

    
    $(window).trigger('scroll');


    var swiper = new Swiper('.product_bundle_slider', {
          slidesPerView: 2.3,
          spaceBetween: 10,
          loop: false,
          breakpoints: {
            1920: {
              slidesPerView: 2.3
            },
            992: {
              slidesPerView: 3
            },
            320: {
              slidesPerView: 1.5
            }
          },
          navigation: {
            nextEl: '.product_bundle-next',
            prevEl: '.product_bundle-prev'
          }
    });



    var swiper = new Swiper('.starter_pack_slider', {
          slidesPerView: 3.3,
          spaceBetween: 80,
          loop: false,
          breakpoints: {
            1920: {
              slidesPerView: 3.3
            },
            992: {
              slidesPerView: 2
            },
            320: {
              slidesPerView: 1
            }
          },
          navigation: {
            nextEl: '.starter_pack-next',
            prevEl: '.starter_pack-prev'
          }
    });



    var swiper = new Swiper('.frequently_picked_slider', {
          slidesPerView: 2.6,
          spaceBetween: 60,
          loop: false,
          breakpoints: {
            1920: {
              slidesPerView: 2.6
            },

            1025: {
              slidesPerView: 2.5
            },

            992: {
              slidesPerView: 2
            },
            320: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            }
          },
          navigation: {
            nextEl: '.frequently-next',
            prevEl: '.frequently-prev'
          }
    });



    
    $('.detail_rivew_section_up_right').on('click', function() {
        $('body').addClass("modal-open");
    });
    
    $('.close-modal').on('click', function() {
        $('body').removeClass("modal-open");
    });


            $("#profile-pic").click(function(){
                $("#file-input").click();
                // $('.add_rating_right').addClass("active");
            });

            $("#file-input").change(function(){
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("#profile-pic").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });



  $(".show-more").click(function(event) {
		var txt = $(".hide-part").is(':visible') ? 'Show more' : 'Show-Less';
		$(".hide-part").toggleClass("show-part");
		$(this).html(txt);
		event.preventDefault();
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





// start multiple image upload


  jQuery(document).ready(function () {
  ImgUpload();
});

function ImgUpload() {
  var imgWrap = "";
  var imgArray = [];

  $('.upload__inputfile').each(function () {
    $(this).on('change', function (e) {
      imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
      var maxLength = $(this).attr('data-max_length');

      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
      var iterator = 0;
      filesArr.forEach(function (f, index) {

        if (!f.type.match('image.*')) {
          return;
        }

        if (imgArray.length > maxLength) {
          return false
        } else {
          var len = 0;
          for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
              len++;
            }
          }
          if (len > maxLength) {
            return false;
          } else {
            imgArray.push(f);

            var reader = new FileReader();
            reader.onload = function (e) {
              var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
              imgWrap.append(html);
              iterator++;
            }
            reader.readAsDataURL(f);
          }
        }
      });
    });
  });

  $('body').on('click', ".upload__img-close", function (e) {
    var file = $(this).parent().data("file");
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
      }
    }
    $(this).parent().parent().remove();
  });
}



// end multiple image upload




})(jQuery);