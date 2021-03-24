<template>
  <v-container class="my-5">
    <div
      class="d-flex flex-column align-center justify-center"
      v-if="!basketItems.length"
    >
      <h1 class="my-5">There are currently no items in your basket.</h1>
      <v-btn @click="navigateToHome">Continue Shopping</v-btn>
    </div>
    <template v-else>
      <v-card>
        <v-card-text class="px-0">
          <v-card-title>
            {{ basketQuantity }} products in your basket
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="basketItems"
            hide-default-footer
          >
            <template v-slot:item.title="{ item }">
              <td class="d-flex">
                <v-img width="1.5" :src="item.avatar" />
              </td>
            </template>
            <template v-slot:item.price="{ item }">
              <td>${{ item.price }}</td>
            </template>
            <template v-slot:item.quantity="{ item }">
              <td>
                <v-text-field
                  v-model.number="item.quantity"
                  type="number"
                  min="1"
                />
                <template v-for="sale in item.sales">
                  <v-tooltip :key="sale" bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" color="#004D98">
                        mdi-tag
                      </v-icon>
                    </template>
                    <span>{{ salasMap[sale].title }}</span>
                  </v-tooltip>
                </template>
              </td>
            </template>
            <template v-slot:item.actions="{ item }">
              <td>
                <span v-for="(action, index) in dataTableActions" :key="index">
                  <v-btn icon :color="action.color" @click="action.click(item)">
                    <v-icon>{{ action.icon }}</v-icon>
                  </v-btn>
                </span>
              </td>
            </template>
          </v-data-table>
          <v-layout row justify-space-between class="mt-16">
            <div class="d-flex align-end pl-3">
              <v-btn @click="navigateToHome"> Continue shopping </v-btn>
            </div>
            <div class="d-flex flex-column pr-5">
              <v-card-title class="pl-0 pb-1"> Basket Subtotal: </v-card-title>
              <h1>${{ basketTotal }}</h1>
              <h5>You saved: ${{ moneySaved }}</h5>
              <v-btn
                @click="showCheckoutDialog = true"
                x-large
                color="#004D98"
                class="white--text"
                >checkout</v-btn
              >
            </div>
          </v-layout>
        </v-card-text>
      </v-card>
    </template>
    <checkout-dialog v-model="showCheckoutDialog" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import basketService from "@/utils/basket.service";
import CheckoutDialog from "@/components/CheckoutDialog";

export default {
  name: "BasketList",
  components: { CheckoutDialog },
  data() {
    return {
      headers: [
        {
          text: "Product",
          value: "title",
          sortable: false,
        },
        {
          text: "Price",
          value: "price",
          sortable: false,
        },
        {
          text: "Quantity",
          value: "quantity",
          sortable: false,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
        },
      ],
      dataTableActions: [
        {
          action: "remove",
          icon: "mdi-close-circle-outline",
          color: "black",
          click: this.removeFromBasket,
        },
      ],
      salasMap: basketService.salasMap,
      showCheckoutDialog: false,
    };
  },
  created() {
    this.$store.dispatch("basket/getBasketItems");
  },
  computed: {
    ...mapGetters("basket", [
      "basketItems",
      "basketTotal",
      "basketQuantity",
      "basketTotalFixedPrice",
    ]),
    moneySaved() {
      return this.basketTotalFixedPrice - this.basketTotal;
    },
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    removeFromBasket(product) {
      const removedProduct = {
        ...product,
        quantity: 1,
      };

      this.$store.dispatch("basket/removeFromBasket", removedProduct);
      this.$store.dispatch("product/updateProductsItems", removedProduct);
    },
  },
};
</script>
