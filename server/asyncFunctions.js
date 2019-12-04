const consola = require('consola');
const axios = require('axios');
const conekta = require('conekta');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.prod = process.env.NODE_ENV === 'production';
config.dev = process.env.NODE_ENV === 'dev';

var methods = {};
var url_calls = "";

if (config.prod) {
  url_calls = config.apiCalls.productionServerUrl;
} else {
  url_calls = config.apiCalls.serverUrl;
}

consola.log("process.env.CONEKTA_KEY_ENV");
consola.log("|||||||||");
consola.log(process.env.CONEKTA_KEY_ENV);

conekta.api_key = process.env.CONEKTA_KEY_ENV;
conekta.locale = 'es';

consola.log("url_calls")
consola.log("|||||||||")
consola.log(url_calls)

methods.userPayment = async(data) => {
  var response_service = {}
  try {
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
          "token_id": data.card_token
        }
      }]
    }).then(function (result) {
      console.log(result.toObject())
      /* if (typeof response !== 'undefined'
        && response !== null
        && response !== {}
        && response.status === 201
        && response.statusText === 'Created') {
          if (typeof response.data !== 'undefined'
            && response.data !== null){
            response_service.status = 201
            response_service.statusText = "OK"
          }
      } */
    }, function (error) {
      console.log(error)
      if (response.status === 404) {
        response.status = 404
        response = "Error, not found"
      }

      if (typeof error !== 'undefined' 
        && error !== null 
        && response.status !== 404
        && error.email !== '') {
          consola.info('Error, user already exists in the platform')
          response_service.status = 400
          response_service.statusText = "ERROR"
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return response_service
}
