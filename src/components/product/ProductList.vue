<template>
  <v-layout row wrap>
    <template v-for="product in productItems">
      <product-preview :key="product.id" :product="product" />
    </template>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductPreview from "@/components/product/ProductPreview";

export default {
  name: "ProductList",
  components: { ProductPreview },
  computed: {
    ...mapGetters("product", ["productItems"]),
  },
  created() {
    this.getProductItems();
  },
  methods: { ...mapActions("product", ["getProductItems"]) },
};
</script>
