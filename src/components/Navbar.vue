<template>
  <v-app-bar fixed class="mb-16">
    <v-tab>Barcelona sell off</v-tab>
    <v-spacer></v-spacer>
    <v-tab to="/"> Inventory</v-tab>
    <v-tab to="/basket">
      <v-badge
        bordered
        :value="basketQuantity"
        :content="basketQuantity"
        color="green lighten-2"
      >
        <v-icon>mdi-cart-outline</v-icon>
      </v-badge>
    </v-tab>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters("basket", ["basketQuantity"]),
  },
};
</script>
