<template>
  <v-container class="my-10">
    <basket-list />
  </v-container>
</template>

<script>
import BasketList from "@/components/basket/BasketList";

export default {
  name: "Basket",
  components: { BasketList },
  methods: {},
};
</script>
