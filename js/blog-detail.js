(function ($) {

   // Smooth scroll
    $('.table_list_tabbing li a').on('click', function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 100
      }, 600);
    });

    // Active link on scroll

    $(window).on('scroll', function () {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      $('.table_center_inner').each(function () {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();

        // Check for partial visibility
        if (scrollTop + 10 >= sectionTop - sectionHeight / 3 && scrollTop < sectionTop + sectionHeight) {
          const id = $(this).attr('id');
          $('.table_list_tabbing li a').removeClass('active');
          $(`.table_list_tabbing li a[href="#${id}"]`).addClass('active');
        }
      });
    });







})(jQuery);





$(document).ready(function() {
  var $panel = $(".blog_detail_table_left");
  var panelWidth = $panel.outerWidth();

  function toggleSidebar() {
    if ($panel.hasClass("open")) {
      $panel.removeClass("open")
            .stop()
            .animate({ right: -panelWidth }, 400);
    } else {
      $panel.addClass("open")
            .stop()
            .animate({ right: 50 }, 400);
    }
  }

  $(".privacy_policy_sidebar").on("click tap", toggleSidebar);
  
 });

  $(document).keyup(function(e) {
    if (e.key === "Escape" && $panel.hasClass("open")) {
      toggleSidebar();
    }
  });