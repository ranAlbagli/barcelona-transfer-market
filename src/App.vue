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
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABkCAYAAADdY439AAAEvUlEQVR4Xu2cPW/bMBCGJSeAYXl11nq1g2yaO/c3d+6sLYi9pmu9SoaBQCpeQTSuDCV+i2p7XoJYskU+uvfuSN05zxK/np+fv769vf1INYyyLIvr9Vp2XfczPxwO37Isu+R5fjmdTu9zDyoVjOPxuO+6bkfnm+MfcWC1WhWr1eqyXq9/VVV1mQPMnDAU83yvqqoR8+xh0Bcl9vj42KzX6z8+EBpQbBhlWe5ut9tT27a7tm2b7XaL+Shv9CcYYrLQUtM0T13XHWLKKAYMjP12u+0FAFMXMAqDWgDo1nW9h4xA1/TLTawoJAxq1RhjURSQ+10GuvEYwYgpI18Y1A/oZBAchspi8J6rf3GBIfuBUJZqbRljdHGH8jz/YisjUxjEh/XhMBSAT6FVZz42x1X+ZUq7OhgvLy/Hj4+PQgCw9QM2Yw9mGfJFxZ2EteDYWP6CpO98Pn9X+aW5855oMKbyF+rphWXEjFim1jEbDEX+ssOdx/vwM/iLhCjLssYmHJpO1OS8RcAQA8ViKcX6SFx/NhhUBoP/6BeFWDFi1Yrj1+v1OOVfTO6uzzlRYZisC1TRhCZSsJaYESR2aBVrmns+4BNaZTAxZRTEMlQJkend1OUZxPH2q0/kHHC8MfyLFwzd/oCJfk1hjEWjkPsv1jCEHxBZoW84tIWhyl8eHh4KjMd1fWQVTeRsMqSJ+sKQLUZkvC5jNNnc6ZMjEQ5DJ0ShYEir6TCbO//atp9Y6ImNKe22nyIh+j83hGGmtnsQJlHC9JwYMtFdW7VHiscG1tFEdyHb4ylgSP6lXwb0D5FsBx/6/NQwMB+MYbPZVAxjgIHFIsNgGH+KXUiVLYMtgy1jNBCyTAgahsEw1Ephy2DLYMvQLqdYJiwTlgnLREuAZcIy0RoJRxOWCcuEZaIlsESZHA6H8nw+VzaDD31ucgdKS5zmLFVSgUwCQzzWkyp+66EiB8WzSTqiZoUh6spxV6ZKG8QDcJw3FJ7M8gA8OgxMrGmaLYpHXGo75qz4iwKDVvjgyT7u7uvr68nH4fkUz5leNxgMOlhRhWda6Wc6WHGea7uV7jreMEJU+ukGOXU85PWdYKSs8NGBkVo5rDoujWHM0QHkYyH0syP+pdb16E7CoPlAbD8QCoT8PTSpw7GpUshPMGRH6BIOY03M93vlxh654u9euWNS+e87mCV9XpHYvaPNY7PZnHJQcammXdIEXcZCwzQ+31c8YtWIf1w6hF0GsYTPEOtAG8hFtIf1lTuqZCZW4pQKxtQcR6NJrCwvBQRVdqxq3jHKM1KtIn3AuURFIxhSQnP/pYTUmzEqWLrwOQXYGoa8WJqrJXtqErCCuq77jkcRBFx62JxhyOkvfrSDdiXpUl8fCVBnL3rVkB/4NgYHgTEmo5B9YwLA8CsvfUekb/uVfEOCw6AXCLFLBQlkWQYZ7KkMYoT8qDAoGHQC4bdv8J7JeidFzjMbDOp4YeqqHxxJAYDesNlhjPmXtm0hh0toP2DjqJPCoNYyrBir0F2Rfx0MDHgpnUjcfDOYzyJkwpYhiZllQoAwDIahDnZsGWwZbBnaRJBlwjJhmbBMtARYJiwTrZFwNGGZsExYJloCLBOWidZIOJqwTJYvk99oQ2aizSFengAAAABJRU5ErkJggg=="),
    linear-gradient(180deg, #d4d4d4, darkgrey) !important;
}
</style>
