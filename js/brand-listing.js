
(function ($) {

    $('.brandgoal a').click(function(){
            $('.brandgoal a').removeClass('activelink');
            $(this).addClass('activelink');
            var tagid = $(this).data('tag');
            $('.brandgoallist').removeClass('active').addClass('hide');
            $('#'+tagid).addClass('active').removeClass('hide');
            $('.brands-goals-slider').slick('setPosition');
    });



      var swiper = new Swiper('.brands-goals-slider', {
          slidesPerView: 5.5,
          spaceBetween: 35,
          loop: false,
          breakpoints: {
            1920: {
              slidesPerView: 5.5
            },
            1280: {
              slidesPerView: 5.5
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
            nextEl: '.brands-goals-next',
            prevEl: '.brands-goals-prev'
          }
    });






    // Smooth scroll
    $('.brand_name_list li a').on('click', function (e) {
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

      $('.scroll_section').each(function () {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();

        // Check for partial visibility
        if (scrollTop + 20 >= sectionTop - sectionHeight / 3 && scrollTop < sectionTop + sectionHeight) {
          const id = $(this).attr('id');
          $('.brand_name_list li a').removeClass('active');
          $(`.brand_name_list li a[href="#${id}"]`).addClass('active');
        }
      });
    });



})(jQuery);