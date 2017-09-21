$(function() {
  console.log("tested");
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='donate']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: "required",
      donationAmount: "required",
      email: {
        required: true,
        email: true
      },
      message: {
        required: false,
      }
    },
    messages: {
      name: "Please enter your firstname",
      email: "Please enter a valid email address",
      donationAmount: "Please enter a valid donation amount",
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});
