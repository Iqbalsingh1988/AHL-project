(function ($) {



    if ($('.filter_slider').length) {
        $('.filter_slider').slick({
             slidesToShow: 2.1,
            slidesToScroll: 1,
            autoplay: false,
            loop:false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        TouchEvent:true,
                    }
                }
            ]
        });

    $(".prev-filter").click(function () {
            $(".filter_slider").slick("slickPrev");
        });

        $(".next-filter").click(function () {
            $(".filter_slider").slick("slickNext");
        });
        $(".prev-filter").addClass("slick-disabled");
        $(".filter_slider").on("afterChange", function () {
            if ($(".filter_slider .slick-prev").hasClass("slick-disabled")) {
                $(".prev-filter").addClass("slick-disabled");
            } else {
                $(".prev-filter").removeClass("slick-disabled");
            }
            if ($(".filter_slider .slick-next").hasClass("slick-disabled")) {
                $(".next-filter").addClass("slick-disabled");
            } else {
                $(".next-filter").removeClass("slick-disabled");
            }
        });
    };








    

    if ($('.all_product').length) {
        $('.all_product').slick({
            slidesToShow: 5.5,
            slidesToScroll: 1,
            autoplay: false,
            loop:false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3.1
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2.5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2.2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2.4,
                        TouchEvent:true,
                    }
                }
            ]
        });
        $(".prev-prod").click(function () {
            $(".all_product").slick("slickPrev");
        });

        $(".next-prod").click(function () {
            $(".all_product").slick("slickNext");
        });
        $(".prev-prod").addClass("slick-disabled");
        $(".all_product").on("afterChange", function () {
            if ($(".all_product .slick-prev").hasClass("slick-disabled")) {
                $(".prev-prod").addClass("slick-disabled");
            } else {
                $(".prev-prod").removeClass("slick-disabled");
            }
            if ($(".all_product .slick-next").hasClass("slick-disabled")) {
                $(".next-prod").addClass("slick-disabled");
            } else {
                $(".next-prod").removeClass("slick-disabled");
            }
        });
    };



    




$("#select-all").click(function() {
	$(".all_select input[type=checkbox]").prop("checked", $(this).prop("checked"));
});



// start video hover play

 $(".our-video .myvideos").on("mouseover", function(event) {
   
    this.play();

  }).on('mouseout', function(event) {
    this.pause();

  });

// end video hover play


// start popup video

$(".our-video").click(function() {
  $(".popup_product_vdo").fadeIn(500);
  $('body').addClass('hidden_part');
});
$(".close").click(function() {
  $(".popup_product_vdo").fadeOut(500);
  $('body').removeClass('hidden_part');
});




$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})



    $(".filter_click").click(function(){
        $(".filter_product_left").toggleClass("active");
        $('body').toggleClass('hidden_part');
    });

  
    $(".filter_arrow").click(function() {
      $('.filter_product_left').removeClass('active');
      $('body').removeClass('hidden_part');
    });





     $(".short_by_click").click(function(){
        $(".select_wrap").toggleClass("active");
    });

  

    $('.click_mobile_cat').on('click', function() {
      $(this).parent(".checkbox_left_part").addClass('active').siblings().removeClass('active');
    });

    

  


//   $(".filter_click").click(function() {
//     $("#popupModal").fadeIn(500);
//     $('body').addClass('hidden_part');
//   });

//   $(".close").click(function() {
//     $("#popupModal").fadeOut(500);
//     $('body').removeClass('hidden_part');
//   });
  

//   $(".modal_section").click(function() {
//     $("#popupModal").fadeOut(500);
//   });





// end popup video



})(jQuery);