
  $(document).ready(function () {
  let currentStep = 0;
  const steps = $(".form_step");

  function showStep(index) {
    steps.removeClass("form-step-active");
    steps.eq(index).addClass("form-step-active");
  }

  // Show the first step on page load
  showStep(currentStep);

  $(".move-next").on("click", function () {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  $(".move-prev").on("click", function () {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

