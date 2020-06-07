<template>
  <v-app>
    <navbar />
    <hello-world />
    <div style="height: 10000px;" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import HelloWorld from "./components/HelloWorld.vue"

export default {
  name: 'App',

  components: {
      HelloWorld,
      Navbar
  },

  data: () => ({
  }),
};
</script>
