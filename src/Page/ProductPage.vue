<template>
  <MasterPage>
    <!-- Loader -->
    <LoaderPage v-show="isLoad" />
    <div v-show="!isLoad" class="container">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-lg-4 col-md-6"
        >
          <div class="card p-3 m-3">
            <div class="card-header">{{ product.Title }}</div>
            <div class="card-body">
              <img width="100%" :src="product.img" alt="cloth" />
            </div>
            <div class="card-footer">
              <span
                >Price: <small>${{ product.price }}</small></span
              >
              <a
                href="#"
                class="btn btn-sm btn-dark float-end"
                @click="addToCart(product)"
                >Add To Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </MasterPage>
</template>

<script>
import MasterPage from "../Layout/MasterPage";
import LoaderPage from "../Component/LoaderPage";
import axios from "axios";
export default {
  name: "ProductPage",
  components: { MasterPage, LoaderPage },
  data() {
    return {
      isLoad: true,
      products: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/products").then((res) => {
      this.products = res.data;
      this.isLoad = false;
    });
  },
  methods: {
    addToCart(product) {
      var cart = this.$root.cart;
      var isInCart = cart.find((v) => {
        return v.Title === product.Title;
      });
      if (isInCart) {
        isInCart.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }
    },
  },
};
</script>