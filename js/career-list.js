(function ($) {


$(".click_video_popup").click(function() {
  $(".popup_product_vdo").fadeIn(500);
  $('body').addClass('hidden_part');
});
$(".close").click(function() {
  $(".popup_product_vdo").fadeOut(500);
  $('body').removeClass('hidden_part');
});


})(jQuery);