<template>
  <v-app>
    <navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  components: { Navbar },

  data: () => ({
    //
  }),
  methods: {},
};
</script>

<style>
* {
}
</style>
