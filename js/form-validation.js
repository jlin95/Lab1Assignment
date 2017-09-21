$(function() {
  $("form[name='donate']").validate({
    rules: {

      name: "required",
      email: "required",
      donationAmount: "required",
      ccNumber: "required",
      cvv: "required",
      expDate: "required",
      email: {
        required: true,
        email: true
      },
      message: {
        required: false,
      }
    },
    messages: {
      name: "Please enter your first name",
      email: "Please enter a valid email address",
      donationAmount: "Please enter a valid donation amount",
      ccNumber: "Please enter a valid credit card number",
      expDate: "Please enter a valid expiration date",
      cvv: "Please enter a valid 3-digit CVV number",
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});
