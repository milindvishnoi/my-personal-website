<template>
  <v-app>
    <navbar />
    <v-container app>
      <home-page />
    </v-container>
    <v-container class="pt-8">
      <Projects />
      <div style="height: 50px;" />
    </v-container>
    <bottom-app-bar />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HomePage from "./views/HomePage.vue";
import BottomAppBar from "./components/BottomAppBar.vue";
import Projects from "./views/Projects.vue";

export default {
  name: "App",

  components: {
    HomePage,
    Navbar,
    BottomAppBar,
    Projects
  },

  data() {
    return {};
  }
};
</script>

<style>

</style>