<template>
  <v-app>
    <navbar />
    <v-container app full-height>
      <v-col>
      <home-page />
      </v-col>
    </v-container>
    <v-container>
      <Projects />
      <div style="height: 50px;" />
    </v-container>
    <bottom-app-bar />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HomePage from "./components/HomePage.vue"
import BottomAppBar from "./components/BottomAppBar.vue"
import Projects from "./components/Projects.vue"
// import AppCard from "./components/AppCard.vue"

export default {
  name: 'App',

  components: {
    HomePage,
    Navbar,
    BottomAppBar,
    Projects
    // AppCard
  },

  data() {
    return {
      
    }
  },
};
</script>
