<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500">
      <v-card>
        <v-img src="../assets/messi_meme.jpg" />
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="show = false"> ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CheckoutDialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
};
</script>
