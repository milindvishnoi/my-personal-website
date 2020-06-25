<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <navbar-mobile v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" />
    <navbar-laptop />
    <!-- Home Page Container -->
    <v-container app id="home">
      <home-page />
    </v-container>
    <!-- About Me -->
    <v-container class="pt-8" id="aboutme">
      <v-row class="d-flex justify-center">
        <h1
          :class="{'small-h1': this.$vuetify.breakpoint.xs, 'med-h1': this.$vuetify.breakpoint.sm}"
        >Who Am I?</h1>
      </v-row>
      <about-me />
    </v-container>
    <!-- Projects Container -->
    <v-container class="pt-8" id="projects">
      <Projects />
    </v-container>
    <!-- Contact Me Section -->
    <v-container class="pt-8 align-center" id="contactme">
      <v-row class="d-flex justify-center">
        <h1
          :class="{'small-h1': this.$vuetify.breakpoint.xs, 'med-h1': this.$vuetify.breakpoint.sm}"
        >Get In Touch!</h1>
      </v-row>
      <v-row justify="center">
        <contact-me />
      </v-row>
    </v-container>
    <!-- Last Indentation -->
    <div style="height: 100px;" />
    <bottom-app-bar />
  </v-app>
</template>

<script>
import NavbarMobile from "./components/NavbarMobile.vue";
import NavbarLaptop from "./components/NavbarLaptop.vue";
import BottomAppBar from "./components/BottomAppBar.vue";
import HomePage from "./views/HomePage.vue";
import Projects from "./views/Projects.vue";
import AboutMe from "./views/AboutMe.vue";
import ContactMe from "./views/ContactMe.vue";

export default {
  name: "App",

  components: {
    HomePage,
    NavbarMobile,
    NavbarLaptop,
    BottomAppBar,
    Projects,
    AboutMe,
    ContactMe
  },

  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
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
.website-background {
  background: white;
}
</style>