import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import Basket from "../views/Basket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
