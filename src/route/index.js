import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../Page/HomePage";
import ProductPage from "../Page/ProductPage";
import CartPage from "../Page/CartPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/product",
    name: "product",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
