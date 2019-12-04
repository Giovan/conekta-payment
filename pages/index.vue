<template>
  <div class="container">
    <div>
      <h1 class="title">
        conekta_payment
      </h1>
      <form action="" method="POST" id="card-form">
        <span class="card-errors"></span>
        <div>
          <label>
            <span>Cardholder name</span>
            <input type="text" size="20" data-conekta="card[name]">
          </label>
        </div>
        <div>
          <label>
            <span>Card number</span>
            <input type="text" size="20" data-conekta="card[number]">
          </label>
        </div>
        <div>
          <label>
            <span>CVC</span>
            <input type="text" size="4" data-conekta="card[cvc]">
          </label>
        </div>
        <div>
          <label>
            <span>Expiration date (MM/YYYY)</span>
            <input type="text" size="2" data-conekta="card[exp_month]">
          </label>
          <span>/</span>
          <input type="text" size="4" data-conekta="card[exp_year]">
        </div>
        <button type="submit">Create token</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
