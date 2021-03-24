<template>
  <v-container class="my-5">
    <v-layout column align-center>
      <template v-if="!basketItems.length">
        <h1 class="my-5">There are currently no items in your basket.</h1>
        <v-btn @click="navigateToHome">Continue Shopping</v-btn>
      </template>
      <template v-else>
        <v-card-text class="px-0 data-table-horizontal-scroll">
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
                <v-img width="1.5" :src="item.avatar" alt="" />
                <strong class="ml-3 align-self-center">{{ item.title }}</strong>
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
              </td>
            </template>
            <!--            <template v-slot:item.sales="{ item }">-->
            <!--              <td>-->
            <!--                <template v-for="sale in item.sales">-->
            <!--                  <v-chip-->
            <!--                    x-small-->
            <!--                    class="ma-0"-->
            <!--                    :key="sale"-->
            <!--                    color="blue"-->
            <!--                    outlined-->
            <!--                  >-->
            <!--                    {{ salasMap[sale].title }}-->
            <!--                  </v-chip>-->
            <!--                </template>-->
            <!--              </td>-->
            <!--            </template>-->
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
            <div class="d-flex flex-column">
              <v-card-title class="pl-0 pb-1"> Basket Subtotal: </v-card-title>
              <h1>{{ basketTotal }} $</h1>
              <h5>You saved: {{ moneySaved }}$</h5>
              <v-btn x-large color="primary">checkout</v-btn>
            </div>
          </v-layout>
        </v-card-text>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import basketService from "@/utils/basket.service";

export default {
  name: "BasketList",
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
        // {
        //   text: "Sales",
        //   value: "sales",
        //   sortable: false,
        // },
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
