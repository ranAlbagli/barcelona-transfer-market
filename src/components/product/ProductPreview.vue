<template>
  <v-flex class="my-5 mx-2">
    <v-card
      color="#f5f5f5"
      elevation="4"
      shaped
      class="mx-auto fill-height"
      max-width="250"
    >
      <v-badge
        bordered
        left
        overlap
        content="sale"
        color="green lighten-2"
        :value="!!product.sales && !!product.sales.length"
      >
        <v-img width="250" :src="product.avatar" alt=""> </v-img>
        <v-card-title>${{ product.price }}</v-card-title>

        <v-card-text style="height: 70px">
          <template v-for="sale in product.sales">
            <v-chip :key="sale" color="blue" outlined>
              {{ salasMap[sale].title }}
            </v-chip>
          </template>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
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
import basketService from "../../utils/basket.service";
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
      salasMap: basketService.salasMap,
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
