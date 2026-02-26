(function ($) {


    $('#file-upload').on('change', function() {
      let fileName = $(this).val().split('\\').pop();
      $('#file-name').text(fileName ? `Selected File: ${fileName}` : 'No file selected');
    });

})(jQuery);