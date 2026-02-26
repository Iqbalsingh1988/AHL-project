// Show cart sidebar
$('.cart_button_header').on('click', function () {
  $('.cart__detail_card').fadeIn().addClass('active');
  $('.cart_details_overlay').fadeIn().addClass('active'); // Show overlay
  $('body').addClass('no-scroll'); // Optional: disable background scroll
});

// Hide on clicking close button
$('.cart_cross_btn, .cart_details_overlay').on('click', function () {
  $('.cart__detail_card').removeClass('active');
  $('.cart_details_overlay').removeClass('active');

  setTimeout(function () {
    $('.cart__detail_card').fadeOut();
    $('.cart_details_overlay').fadeOut(); // Hide overlay
    $('body').removeClass('no-scroll');
  }, 400); // Match with CSS transition if any
});
