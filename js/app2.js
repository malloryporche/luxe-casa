$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    debugger
    //Serialize the form data
    var formData = $(form).serialize();

    console.log(formData);
    //Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    //Set the message text.
    $(formMessages).text('Your message has been sent!  Thank you!')

    //Clear the form.
    $('#user_name').val('');
    $('#user_email').val('');
    $('#user_message').val('');

}

function onSubmit(event) {
  //Stop the browser from submitting the form.
  event.preventDefault();

  debugger
}
