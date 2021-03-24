<template>
  <v-app class="v-app--custom-bg">
    <navbar />
    <v-main>
      <v-fade-transition>
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>
<style>
.v-app--custom-bg {
  background-attachment: fixed;
  background-position: top;
  background: url("./assets/background.png"),
    linear-gradient(180deg, rgba(168, 19, 62, 0.6), rgb(168, 19, 62)) !important;
}
</style>
