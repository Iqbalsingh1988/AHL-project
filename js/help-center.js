
$(document).ready(function () {

  $('.order_shipping_row').hide(); // Hide all shipping rows initially

  $('.general_query_inner_col').click(function () {
    var index = $(this).data('target');

    $('.general_query_row').hide();
    $('.order_shipping_row').hide();

    $('.order_shipping_row_active_' + index).show();
  });

  $('.move-prev').click(function () {
    $('.order_shipping_row').hide();
    $('.general_query_row').show();
  });

});
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function (e) {
      // Ignore clicks coming from inside .accordion-content
      if (e.target.closest(".accordion-content")) {
        return;
      }

      // Close other accordions
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.classList.remove("active");
          otherHeader.querySelector(".accordion-content").classList.remove("active");
        }
      });

      // Toggle current accordion
      header.classList.toggle("active");
      header.querySelector(".accordion-content").classList.toggle("active");
    });
  });
});
