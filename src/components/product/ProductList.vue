<template>
  <v-layout row wrap>
    <template v-for="product in productItems">
      <product-preview :key="product.id" :product="product" />
    </template>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import ProductPreview from "@/components/product/ProductPreview";

export default {
  name: "ProductList",
  components: { ProductPreview },
  computed: {
    ...mapGetters("product", ["productItems"]),
  },
  created() {
    this.$store.dispatch("product/getProductItems");
  },
};
</script>

<style scoped></style>
