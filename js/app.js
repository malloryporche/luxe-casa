$(function() {
  //Get the form
  var form = $('#ajaxContactForm');

  //Get the messages div.
  var formMessages = $('#formMessages');

  // Setup an event listener for the contact form.
  $(form).submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();
      alert('Testing');
      debugger

      $.ajax({
          url: '../contact.php',
          type: "POST",
          data: data,
          success: function (data) {
            // Refresh container contents based on success or error of submission

          },
          error: function() {
            alert('ERROR');
          }
      });

      return false;
  });
})
