<template>
  <div class="container">
    <nav-bar/>
    <h1 class="title">E-commerce payment</h1>

    <div class="columns">
      <div class="column">
        Total: $350.00
      </div>
      <div class="column">
        <form @submit="onSubmit">
          <div class="columns is-multiline is-mobile is-centered">
            <div class="column is-full col-center">
              <div class="field input-element">
                <div class="control">
                  <input
                    id="input-card-name"
                    v-model="form.cardname"
                    class="input"
                    data-conekta="card[name]"
                    type="text"
                    placeholder="Nombre en la tarjeta"
                    required>
                </div>
              </div>
            </div>

            <div class="column is-full col-center">
              <div class="field input-element">
                <div class="control">
                  <input
                    id="input-card-number"
                    v-model="form.cardnumber"
                    class="input"
                    data-conekta="card[number]"
                    type="text"
                    placeholder="Número de la tarjeta"
                    required>
                </div>
              </div>
            </div>

            <div class="column is-full col-center">
              <div class="field input-element">
                <div class="control">
                  <input
                    id="input-card-cvc"
                    v-model="form.cardcvc"
                    class="input"
                    data-conekta="card[cvc]"
                    type="text"
                    placeholder="CVC"
                    required>
                </div>
              </div>
            </div>

            <div class="column is-full col-center">
              <div class="field input-element">
                <div class="control">
                  <input
                    id="input-card-card_expirationmonth"
                    v-model="form.card_expirationmonth"
                    class="input"
                    data-conekta="card[exp_month]"
                    type="number"
                    placeholder="MM"
                    required>
                  <span>/</span>
                  <input
                    id="input-card-card_expirationyear"
                    v-model="form.card_expirationyear"
                    class="input"
                    data-conekta="card[exp_year]"
                    type="number"
                    placeholder="AAAA"
                    required>
                </div>
              </div>
            </div>

            <div class="column is-full col-center">
              <div class="field input-element">
                <div class="control">
                  <div class="control">
                    <button type="submit" class="button is-link input-login">Pagar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  data() {
    return {
      form: {
        cardname: '',
        cardnumber: '',
        cardcvc: '',
        card_expirationmonth: '',
        card_expirationyear: ''
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      try {
        Conekta.setLanguage("es");
        Conekta.setPublicKey("key_Pp12BwKdGTretyq6mVsuLqw");

        var successResponseHandler = function(token) {
          // Do something on sucess
          // you need to send the token to the backend.
          console.log("successResponseHandler");
          console.log("-------");
        };

        var errorResponseHandler = function(error) {
          // Do something on error
          console.log("errorResponseHandler");
          console.log("-------");
        };

        var tokenParams = {
          "card": {
            "number": this.form.cardnumber,
            "name": this.form.cardname,
            "exp_year": this.form.card_expirationyear,
            "exp_month": this.form.card_expirationmonth,
            "cvc": this.form.cardcvc,
            "address": {
                "street1": "Calle 123 Int 404",
                "street2": "Col. Condesa",
                "city": "Ciudad de Mexico",
                "state": "Distrito Federal",
                "zip": "12345",
                "country": "Mexico"
            }
          }
        };

        let token = Conekta.Token.create(tokenParams, successResponseHandler, errorResponseHandler);
        console.log("token");
        console.log("-------");
        console.log(token);
        console.log(token.response.id);

        let data = {
          card_token: token.response.id
        }

        try {
          let respose_payment = await this.$store.dispatch('payment', data)
          if (typeof respose_payment !== 'undefined' && typeof respose_payment.data !== 'undefined') {
            if (respose_payment.data.email !== '') {
              // let userDataObj = JSON.parse(JSON.stringify(this.$store.state.authUser))

              this.$router.push('/')

              this.form.cardname = ''
              this.form.cardnumber = ''
              this.form.cardcvc = ''
              this.form.card_expirationmonth = ''
              this.form.card_expirationyear = ''
              this.formError = null
            } else {
              console.log("respose_payment");
              console.log("------------");
              console.log(respose_payment);
            }
          } else {
            console.log("Payment error");
          }
        } catch (e) {
          this.formError = e.message
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 40px!important;
  margin-top: 10px!important;
}
</style>
