<template>
  <v-app-bar app dark color="#004D98">
    <v-tab @click="scrollToTop">
      <v-img width="50" src="../assets/Barcelona-Logo-PNG3.png" />
      <span class="pl-3">Barcelona Transfer Market</span>
    </v-tab>
    <v-spacer />
    <v-tab to="/">Store</v-tab>
    <v-tab to="/basket">
      <v-badge
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
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
