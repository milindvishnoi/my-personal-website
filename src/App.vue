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
    </v-container>
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
