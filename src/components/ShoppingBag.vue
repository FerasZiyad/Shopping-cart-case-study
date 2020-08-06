<template>
  <div>
    <b-container>
      <table class="table">
        <thead>
          <tr>
            <th class="table-head" scope="col">
              <h2>Shopping Bag</h2>
            </th>
            <th class="table-head" scope="col">Format</th>
            <th class="table-head" scope="col">Quantity</th>
            <th class="table-head" scope="col">Price</th>
          </tr>
        </thead>
        <tbody v-for="book in this.allBooks" :key="book.id">
          <item
            @increase="increase"
            @decrease="decrease"
            @shippingPrice="getShipping"
            :book="book"
          />
        </tbody>
      </table>
      <report :total="this.total" :shipping="shipping" />
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Item from "./Item";
import Report from "./Report";
export default {
  components: {
    item: Item,
    report: Report,
  },

  data() {
    return {
      books: this.allBooks,
      quantity: 1,
      total: 0,
      shipping: 0,
    };
  },

  computed: mapGetters(["allBooks"]),

  methods: {
    ...mapActions(["fetchBooks"]),

    increase(q) {
      this.total += q;
    },

    decrease(q) {
      this.total -= q;
    },

    getShipping(price) {
      this.shipping = price;
    },
  },

  created() {
    this.fetchBooks();
  },
};
</script>

<style scoped>
.bookImg {
  height: 100px;
}

.table-head {
  border: none;
}
</style>