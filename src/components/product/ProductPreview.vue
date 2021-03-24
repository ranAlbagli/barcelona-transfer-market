<template>
  <v-flex class="my-5 mx-2">
    <v-hover v-slot="{ hover }">
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
          <v-img width="250" :src="product.avatar">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text"
                style="height: 100%; background: rgba(0, 0, 0, 0.3)"
              >
                <v-btn
                  @click="toggleProductFromBasket"
                  :color="cartColor"
                  class="white--text"
                  fab
                  large
                >
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-title>${{ product.price }}</v-card-title>

          <v-card-text style="height: 70px">
            <template v-for="sale in product.sales">
              <v-chip small class="ma-1" :key="sale" color="blue" outlined>
                {{ salasMap[sale].title }}
              </v-chip>
            </template>
          </v-card-text>
        </v-badge>
      </v-card>
    </v-hover>
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
  computed: {
    cartColor() {
      return !this.product.isInBasket ? "green lighten-2" : "red lighten-2";
    },
  },
  methods: {
    toggleProductFromBasket() {
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

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
