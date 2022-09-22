<template>
  <MasterPage>
    <div class="container">
      <table class="table table-striped">
        <thead class="bg-light">
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>+ -</td>
            <td>Qty</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cart" :key="index">
            <td>{{ product.Title }}</td>
            <td>
              <img :src="product.img" width="10%" alt="" />
            </td>
            <td>
              <span @click="addQty(product)" class="btn btn-success m-1">
                +
              </span>
              <span @click="reduceQty(product)" class="btn btn-danger m-1">
                -
              </span>
            </td>
            <td>
              {{ product.qty }}
            </td>
            <td>
              {{ product.qty * product.price }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </MasterPage>
</template>

<script>
import MasterPage from "../Layout/MasterPage";
export default {
  name: "CartPage",
  components: { MasterPage },
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.cart = this.$root.cart;
  },
  methods: {
    addQty(product) {
      product.qty++;
    },
    reduceQty(product) {
      product.qty--;
    },
  },
};
</script>