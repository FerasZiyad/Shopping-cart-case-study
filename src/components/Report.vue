<template>
  <div class="report p-4">
    <div class="row">
      <div class="d-none d-md-block col-7"></div>
      <div class="col-3">
        <p>Subtotal</p>
      </div>
      <div class="col-2">
        <p class="font-weight-bold">${{total.toFixed(2)}}</p>
      </div>
    </div>

    <div class="row">
      <div class="d-none d-md-block col-7"></div>
      <div class="col-3">
        <p>Shipping</p>
      </div>
      <div class="col-2">
        <p class="font-weight-bold">${{shipping}}</p>
      </div>
    </div>

    <div class="row">
      <div class="d-none d-md-block col-7"></div>
      <div class="col">
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="d-none d-md-block col-7"></div>
      <div class="col-3">
        <p>Total(tax included)</p>
      </div>
      <div class="col-2">
        <p class="font-weight-bold">${{(total + shipping).toFixed(2)}}</p>
      </div>
    </div>

    <div class="row">
      <div class="d-none d-md-block col-7"></div>
      <div class="col-3 checkout-text">
        <p class="text-white">Checkout</p>
      </div>
      <div class="col-2 checkout-value">
        <p class="text-white font-weight-bold">${{(total + shipping).toFixed(2)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["total", "shipping"],
};
</script>

<style scoped>
.report {
  background-color: white !important;
  border: 1px solid lightgrey;
  border-radius: 20px;
}

.checkout-text {
  background-color: rgb(80, 128, 190);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-top: 20px;
}

.checkout-value {
  background-color: rgb(80, 128, 190);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-top: 20px;
}
</style>