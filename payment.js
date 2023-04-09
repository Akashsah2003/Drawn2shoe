var options = {
    "key": "rzp_test_NuTUG6yrfovjY3",
    "amount": "14900", // Amount in paisa
    "currency": "INR",
    "name": "DRAWN2SHOE",
    "description": "Payment for my website",
    "image": "https://example.com/your_logo.png",
    "handler": function (response) {
      alert(response.razorpay_payment_id);
    },
    "prefill": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "contact": "+919876543210"
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#2E2F3C"
    }
  };
  var rzp = new Razorpay(options);
  document.getElementById('rzp-button').onclick = function(e){
      rzp.open();
      e.preventDefault();
  }