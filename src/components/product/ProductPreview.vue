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
          content="Sale"
          color="green lighten-2"
          :value="!!product.saleId"
        >
          <v-img width="250" :src="product.avatar">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="#004D98"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-expand-transition>
              <div
                v-if="hover || product.isInBasket"
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
            <v-chip
              v-if="product.saleId"
              small
              class="ma-1"
              color="blue"
              outlined
            >
              {{ salasMap[product.saleId].title }}
            </v-chip>
          </v-card-text>
        </v-badge>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
import basketService from "../../utils/basket.service";
import { mapActions } from "vuex";
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
    ...mapActions("product", ["updateProductsItems"]),
    ...mapActions("basket", ["addToBasket", "removeFromBasket"]),

    toggleProductFromBasket() {
      const product = {
        ...this.product,
        isInBasket: !this.product.isInBasket,
      };

      if (product.isInBasket) this.addToBasket(this.product);
      else this.removeFromBasket(this.product);

      this.updateProductsItems(product);
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
