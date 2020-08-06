<template>
  <tr v-if="quantity > 0">
    <td>
      <div class="d-inline">
        <img class="bookImg" :src="book.thumbnail" alt />
        <div class="card-body d-inline-block pl-sm-0 pl-lg-4">
          <span class="card-title book-name d-block m-0">{{book.name}}</span>
          <small class="card-text book-author text-muted d-block">{{book.author}}</small>
        </div>
      </div>
    </td>
    <td>
      <span>{{book.format}}</span>
    </td>
    <td>
      <input @change="setQuantity" type="number" min="0" max="100" v-model="quantity" />
    </td>
    <td>
      <span class="font-weight-bold">${{ quantity * book.price }}</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["book"],

  data() {
    return {
      preQuantity: 0,
      quantity: 1,
      total: 0,
    };
  },

  methods: {
    setQuantity() {
      if (this.quantity > this.preQuantity) {
        this.preQuantity = this.quantity;
        this.$emit("increase", this.book.price);
      } else {
        if (this.quantity == 0 && this.book.shipping > 0) {
          this.getShippingPrice();
        }
        this.$emit("decrease", this.book.price);
        this.preQuantity = this.quantity;
      }
    },

    getShippingPrice() {
      if (this.quantity > 0) {
        this.$emit("shippingPrice", this.book.shipping);
      } else {
        this.$emit("shippingPrice", 0);
      }
    },
  },

  created() {
    this.setQuantity();
    this.getShippingPrice();
  },
};
</script>

<style scoped>
img {
  height: 150px;
}

input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}

input[type="number"] {
  border: none;
  background-color: #ededed;
  outline: none;
}

.table td {
  vertical-align: middle;
}
</style>
