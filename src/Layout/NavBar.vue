<template>
  <div>
    <!-- Nav -->
    <ul class="nav bg-dark py-4">
      <li class="nav-item">
        <router-link to="/" class="nav-link active">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/product" class="nav-link">Product</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/cart" class="nav-link text-white">
          <i class="fas fa-shopping-cart"></i>
          <small class="badge bg-danger" style="font-size: 9px">{{
            cart.length
          }}</small>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      cart: [],
    };
  },
  created() {
    this.cart = this.$root.cart;
  },
};
</script>