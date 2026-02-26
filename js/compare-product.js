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



    $(".add_product_click").click(function() {
    $(".compare_product_video_popup").fadeIn(500);
    $('body').addClass('hidden_part');
  });

  $(".cp_close").click(function() {
    $(".compare_product_video_popup").fadeOut(500);
    $('body').removeClass('hidden_part');
  });
