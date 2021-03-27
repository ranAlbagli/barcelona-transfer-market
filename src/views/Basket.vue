<template>
  <v-container>
    <basket-list />
  </v-container>
</template>

<script>
import BasketList from "@/components/basket/BasketList";

export default {
  name: "Basket",
  components: { BasketList },
};
</script>
