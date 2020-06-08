<template>
  <v-app>
    <navbar />
    <home-page />
    <!-- <div style="height: 10000px;" /> -->
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HomePage from "./components/HomePage.vue"

export default {
  name: 'App',

  components: {
    HomePage,
    Navbar
  },

  data: () => ({
  }),
};
</script>
