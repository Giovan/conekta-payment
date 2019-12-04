var conekta = require('conekta');

conekta.api_key = '';
conekta.locale = 'es';

conekta.Order.create({
  "currency": "MXN",
  "customer_info": {
    "name": "Jul Ceballos",
    "phone": "+5215555555555",
    "email": "jul@conekta.io"
  },
  "line_items": [{
    "name": "Box of Cohiba S1s",
    "unit_price": 35000,
    "quantity": 1
  }],
  "charges": [{
    "payment_method": {
      "type": "card",
      "token_id": "tok_test_visa_4242"
    }
  }]
}).then(function (result) {
  console.log(result.toObject())
}, function (error) {
  console.log(error)
})