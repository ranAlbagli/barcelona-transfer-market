<template>
  <v-container>
    <product-list />
  </v-container>
</template>

<script>
import ProductList from "@/components/product/ProductList";
export default {
  name: "Products",
  components: { ProductList },
  methods: {},
};
</script>
