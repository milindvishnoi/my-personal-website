<template>
  <v-app>
    <navbar />
    <!-- Home Page Container -->
    <v-container app>
      <home-page />
    </v-container>
    <!-- About Me -->
    <v-container class="pt-8"  id="aboutme">
      <v-row class="d-flex justify-center">
        <h1 :class="{'small-h1': this.$vuetify.breakpoint.xs, 'med-h1': this.$vuetify.breakpoint.sm}">Who Am I?</h1>
      </v-row>
      <about-me />
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
import BottomAppBar from "./components/BottomAppBar.vue";
import HomePage from "./views/HomePage.vue";
import Projects from "./views/Projects.vue";
import AboutMe from "./views/AboutMe.vue";

export default {
  name: "App",

  components: {
    HomePage,
    Navbar,
    BottomAppBar,
    Projects,
    AboutMe,
  },

  data() {
    return {};
  }
};
</script>

<style>
h1 {
  font-size: 80px;
}
.med-h1 {
  font-size: 60px;
}
.small-h1 {
  font-size: 45px;
}
</style>