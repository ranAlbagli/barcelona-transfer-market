<template>
  <v-flex sm-3>
    <v-card elevation="24" shaped class="mx-auto my-12" max-width="250">
      <v-badge
        bordered
        left
        overlap
        content="sale"
        color="green lighten-2"
        :value="!!product.sales && !!product.sales.length"
      >
        <img height="255" width="250" :src="product.avatar" alt="" />
        <v-card-title> price: {{ product.price }}$</v-card-title>
        <v-card-text>
          <v-chip-group>
            <v-chip
              v-for="sale in product.sales"
              active-class="deep-purple accent-4 white--text"
              :key="sale"
              >{{ sale }}</v-chip
            >
          </v-chip-group>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="!product.isInBasket"
            @click="toggleBasket"
            color="green lighten-2"
            text
          >
            Add to Basket
          </v-btn>
          <v-btn v-else @click="toggleBasket" color="red lighten-2" text>
            Remove from Basket
          </v-btn>
        </v-card-actions>
      </v-badge>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "ProductPreview",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      image: require("@/assets/players-images/MESSI.png"),
    };
  },
  methods: {
    toggleBasket() {
      const product = {
        ...this.product,
        isInBasket: !this.product.isInBasket,
      };

      if (product.isInBasket)
        this.$store.dispatch("basket/addToBasket", this.product);
      else this.$store.dispatch("basket/removeFromBasket", this.product);

      this.$store.dispatch("product/updateProductsItems", product);
    },
  },
};
</script>

<style scoped></style>
