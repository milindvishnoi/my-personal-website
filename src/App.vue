<template>
  <v-app>
    <navbar />
    <home-page />
    <!-- <div style="height: 10000px;" /> -->
    <bottom-app-bar />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HomePage from "./components/HomePage.vue"
import BottomAppBar from "./components/BottomAppBar.vue"

export default {
  name: 'App',

  components: {
    HomePage,
    Navbar,
    BottomAppBar
  },

  data: () => ({
  }),
};
</script>
