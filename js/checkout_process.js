
document.addEventListener("DOMContentLoaded", function () {

  // Gift checkbox toggle
  const checkbox = document.getElementById("giftCheck");
  const specialNote = document.querySelector(".special_gift_order");

  if (checkbox && specialNote) {
    checkbox.addEventListener("change", function () {
      specialNote.style.display = this.checked ? "block" : "none";
    });
  }


      $(".add-address-checkout_popup_click").click(function() {
    $(".add-address-checkout-popup").fadeIn(500);
    $('body').addClass('hidden_part');
  });

  $(".address_close").click(function() {
    $(".add-address-checkout-popup").fadeOut(500);
    $('body').removeClass('hidden_part');
  });


  // see details pop up inr js start
const popups = document.querySelectorAll('.see_details_pop_up_inr');
const buttons = document.querySelectorAll('.see-details_btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = btn.textContent.trim().toLowerCase();
    const id = btn.getAttribute('data-id');

    if (text === 'see details' && id) {
      // Close all open popups first (optional)
      popups.forEach(p => p.classList.remove('active'));

      // Find and activate the matching popup
      const targetPopup = document.querySelector(`.see_details_pop_up_inr[data-id="${id}"]`);
      if (targetPopup) {
        targetPopup.classList.add('active');
      }
    }

    if (text === 'cancel' || text === 'remove') {
      const popup = btn.closest('.see_details_pop_up_inr');
      if (popup) {
        popup.classList.remove('active');
      }
    }
  });
});
  // see details pop up inr js end

    // Coupons available pop up inr js start
        const openTriggers = document.querySelectorAll('.available_coupons_open');
        const popup = document.querySelector('.exclusive_coupon_popup');
        const overlay = document.querySelector('.exclusive_coupon_overlay');
        const closeTrigger = document.querySelector('.exclusive_coupon_popup .back_arrow_page');

        if (popup && overlay && closeTrigger) {
          // Handle multiple open triggers
          openTriggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
              e.preventDefault(); // prevents default if it's an <a>
              popup.classList.add('active');
              overlay.classList.add('active');
              document.body.classList.add('no-scroll'); // prevent scroll
            });
          });

          // Close on back arrow click
          closeTrigger.addEventListener('click', () => {
            popup.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
          });

        }

  // Coupons available pop up inr js end


if($(window).width() < 767){
  $('.check_part_list').appendTo('.mobile_list');
}



});
