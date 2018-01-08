$(function() {
  //Get the form
  var form = $('#ajaxContactForm');

  //Get the messages div.
  var formMessages = $('#formMessages');

  // Setup an event listener for the contact form.
  $(form).submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      //Serialize the form data
      var formData = $(form).serialize();

      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
        })
        .done(function(response) {
          //Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          //Set the message text.
          $(formMessages).text('Your message has been sent!  Thank you!')

          //Clear the form.
          $('#user_name').val('');
          $('#user_email').val('');
          $('#user_message').val('');
        })
        .fail(function(data) {
          //Make sure that the formMessages div has the 'error' class.
          $('#formMessages').removeClass('success');
          $('#formMessages').addClass('error');

          //Set the message text
          if (data.responseText !== '') {
            $(formMessages).text('Your message has been sent!  Thank you!');
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent');
        }
      });
      });

      return false;
  });
