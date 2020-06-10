<template>
  <v-app>
    <navbar />
    <home-page />
    <v-container>
      <v-row>
        <v-col cols="12">
          <bottom-app-bar />
        </v-col>
      </v-row>
      <v-row class="justify-center" :sm="4" :xs="12" cols="4" >
        <Projects />
      </v-row>
      <div style="height: 50px;" />
    </v-container>
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
