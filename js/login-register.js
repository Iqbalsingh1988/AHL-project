
    $(".login_popup_click").click(function() {
    $(".login_register_popup").fadeIn(500);
    $('body').addClass('hidden_part');
  });

  $(".lr_close").click(function() {
    $(".login_register_popup").fadeOut(500);
    $('body').removeClass('hidden_part');
  });
$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


   const inputs = document.querySelectorAll('.floating_input');

    inputs.forEach(input => {
        const label = input.closest('.label_group').querySelector('.sign_up_label');

        function toggleLabel() {
            if (input.value.trim() !== '' || document.activeElement === input) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        }

        input.addEventListener('focus', toggleLabel);
        input.addEventListener('blur', toggleLabel);
        input.addEventListener('input', toggleLabel);

        // Initial check (in case pre-filled value ho)
        toggleLabel();
    });