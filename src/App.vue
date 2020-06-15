<template>
  <v-app>
    <navbar />
    <!-- Home Page Container -->
    <v-container app>
      <home-page />
    </v-container>
    <!-- Projects Container -->
    <v-container class="pt-8">
        <Projects />
    </v-container>
    <!-- Last Indentation -->
    <div style="height: 50px;" />
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