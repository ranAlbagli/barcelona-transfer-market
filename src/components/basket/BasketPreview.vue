<template>
  <h1>{{ product.title }}</h1>
</template>

<script>
export default {
  name: "BasketPreview",
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>
