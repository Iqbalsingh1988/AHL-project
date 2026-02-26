$(document).ready(function () {
  let currentStep = 0;
  const steps = $(".form_step");

  function showStep(index) {
    steps.removeClass("form-step-active");
    steps.eq(index).addClass("form-step-active");
  }

  // Show the first step on page load
  showStep(currentStep);

  $(".move-next").on("click", function (e) {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  $(".move-prev").on("click", function (e) {
    e.preventDefault();
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });


// Return Order popup js start
$(".return_order_click").click(function() {
    $(".return_popup_js").fadeIn(500);
    $('body').addClass('hidden_part');
});

$(".cp_close").click(function() {
    $(".return_popup_js").fadeOut(500);
    $('body').removeClass('hidden_part');
});


// Return Order popup js end

// Cancle Order popup js start
$(".cancel_order_click").click(function() {
    $(".order_popup_js").fadeIn(500);
    $('body').addClass('hidden_part');
});

$(".cp_close").click(function() {
    $(".order_popup_js").fadeOut(500);
    $('body').removeClass('hidden_part');
});
// Cancle Order popup js end

// View Bundle Product popup js start
$(".view_bundle_on_click").click(function() {
    $(".view_bundle_popup_js").fadeIn(500);
    $('body').addClass('hidden_part');
});

$(".cp_close").click(function() {
    $(".view_bundle_popup_js").fadeOut(500);
    $('body').removeClass('hidden_part');
});
// View Bundle Product popup js end

});

