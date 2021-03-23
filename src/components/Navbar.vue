<template>
  <v-card color="grey lighten-4" flat height="100px" tile>
    <v-app-bar fixed dense>
      <v-toolbar-title>Barcelona sell off</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/"> players</router-link>
      <router-link to="/basket"> basket</router-link>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
